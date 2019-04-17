if(typeof $ == 'undefined') throw new Error("jQuery es requerido para ejecutar upload.js")

var uploader = new qq.s3.FineUploader({
    debug: true,
    element: document.getElementById('fine-uploader'), request: {
        endpoint: 'jobby.sfo2.digitaloceanspaces.com',
        accessKey: 'AKIAIRNSR7FS4VDXPVPA'
    }, signature: {
        endpoint: '/api/v1.1/file'
    }, uploadSuccess: {
        endpoint: '/api/v1.1/file/verify'
    }, iframeSupport: {
        localBlankPagePath: '/test/upload-success.html'
    }, retry: {
       enableAuto: true
    }, deleteFile: {
        enabled: true,
        endpoint: '/api/v1.1/file/discard'
    }
});


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
		ga_api.session.login({
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

loadSession();