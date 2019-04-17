if(typeof $ == 'undefined') throw new Error("jQuery es requerido para ejecutar api.js")
$('.root-label').html(jb_api.rt);
var testScenarios = JSON.parse(document.getElementById('testScenarios').textContent);
var statusCodes = JSON.parse(document.getElementById('statusCodes').textContent);
for(var x in testScenarios) $('#methodSelect').append('<option value="' + x + '">' + testScenarios[x].title + '</option>')

function testMethod() {
	$('#methodTest .al-wp').html('');
	if(!currentScenario) return;
	var method = eval(currentScenario.method);
	if(typeof method != 'function') return alert("Couldn't find the method " + currentScenario.method)
	var data = currentScenario.model == "args" ? [] : {};	
	for(var x in currentScenario.attributes) {
		var val = $('#attributesWrapper .input-' + x).val().toString().trim();
		if(!val) continue;
		if(currentScenario.model == "args") data.push(val);
		else data[x] = val;
	}
	var testStart = new Date().getTime();
	var cb = function(error, response) {
		var wp = $('#responseWrapper');
		var mk = response;
		if(error) {
			mk = {message: error.message};
			if(error.id) mk.id = error.id;
			if(error.trace) mk.trace = error.trace;
		}
		wp.find('.error-label').toggleClass('hid', !Boolean(error))
		wp.find('.success-label').toggleClass('hid', Boolean(error))
		wp.find('.card-header .method').html(currentScenario.title)
		var testElapsed = new Date().getTime() - testStart;
		wp.find('.timer').html(testElapsed > 0 ? testElapsed + ' ms' : '')
		wp.toggleClass('hid', false);
		wp.find('pre code').html(JSON.stringify(mk, undefined, 2));
	}
	if(currentScenario.model == "args") {
		data.push(cb);
		method.apply(this, data);
	} else method.apply(this, [data, cb]);
}

function onMethodSubmit(event) {
	event.preventDefault();
	testMethod()
}

var currentScenario = null;

function selectHandler(value) {
	if(value == -1) return;
	var scenario = currentScenario = testScenarios[value];
	$('#attributesWrapper').html('');
	for(var x in scenario.attributes) {
		switch(scenario.attributes[x].type) {
			case 'text':
			case 'number':
			case 'password':
				$('#attributesWrapper').append('<div class="form-group"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">' + x + '</span></div><input' + (scenario.attributes[x].required ? ' required' : '') + '  type="' + scenario.attributes[x].type + '" class="form-control input-' + x + '"></div></div>');
				break;
			case 'boolean':
				$('#attributesWrapper').append('<div class="form-group"><div class="form-check form-check-inline"><label class="form-check-label mr-2">' + x + '</label><input class="form-check-input" type="checkbox"></div></div>');
				break;
			case 'dict':
				for(var y in scenario.attributes[x].params) switch(scenario.attributes[x].params[y].type) {
					case 'string':
					case 'number':
					case 'password':
						$('#attributesWrapper').append('<div class="form-group"><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">' + scenario.attributes[x].params[y].title + '</span></div><input' + (scenario.attributes[x].params[y].required ? ' required' : '') + '  type="text" class="form-control"></div></div>');
					break;
				}
			break;
		}
	}
}

function al(wp, txt, cls, dms) {
	if(!cls) cls = 'alert-warning';
	if(typeof dms == 'undefined') dms = true;
	$(wp).html('<div class="alert alert-' + cls + ' ' + (dms ? 'alert-dismissible ' : '') + 'fade show" role="alert">' + txt + '<button type="button" class="close" data-dismiss="alert" aria-label="Cerrar"><span aria-hidden="true">&times;</span></button></div>');
}

function er(error, wp) {
	var msg = error.message + (error.id ? (' (' + error.id + ')') : '');
	if(error.trace) msg += '<br>' + error.trace;
	if(wp) al(wp + ' .al-wp', '<strong>Error interno:</strong> ' + msg);
	console.log('Error Interno')
	console.dir(error);
}

function loginSubmitHandler(event) {
	event.preventDefault();
	login();
}

var currentSession = null;

function loadSession() {
	jb_api.session.get(function(error, response) {
		if(error) return er(error, '#userView');
		if(!response.data) {
			currentSession = null;
			return showSessionView('#loginView');
		} else {
			currentSession = response.data;
			showSessionView('#userView');
			$('#userView pre').html(JSON.stringify(response.data, undefined, 2));
		}
		
	})
}

function showSessionView(view) {
	var wp = $('#sessionView');
	wp.find('.vw').toggleClass('hid', true);
	wp.find('.al-wp').html('');
	$(view).toggleClass('hid', false);
}

function logout() {
	jb_api.session.logout(function(error, response) {
		if(error) return er(error, '#userView');
		loadSession();
	});
}

function login() {
	var vw = $('#loginView');
	var usr = vw.find('.usr-input').val();
	var pwd = vw.find('.pwd-input').val();
	pwd = sha1(pwd);
	jb_api.nonce.get(function(error, response) {
		if(error) return er(error, '#loginView');
		var _nonce = response.data;
		pwd = sha1(pwd + _nonce.nonce);
		$('#loginButton').button('loading');
		$('#loginButton').attr('disabled', 'disabled')
		jb_api.session.login({
			user: usr,
			password: pwd,
			nonce: _nonce.id
		}, function(error, response) {
			$('#loginButton').button('reset');
			$('#loginButton').removeAttr('disabled')
			if(error) return er(error, '#loginView');
			switch(response.data.status) {
				case 1:
					al('#loginView .al-wp', '<i class="fas fa-exclamation-triangle"></i> Invalid user');
				break;
				case 2:
					al('#loginView .al-wp', '<i class="fas fa-exclamation-triangle"></i> Invalid password');
				break;
				case 3:
					al('#loginView .al-wp', '<i class="fas fa-check"></i> Valid login data, welcome!', 'success');
					setTimeout(function() {
						loadSession();
					}, 3000);
				break;
			}
		});
	});
}

$('.endpoint-label').html(jb_api.rt);
loadSession();