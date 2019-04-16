if(typeof WebSocket == 'undefined') throw new Error('Este navegador no es compatible con ga_pull');
var indexOf;
if (typeof Array.prototype.indexOf === 'function') {
    indexOf = function (haystack, needle) {
        return haystack.indexOf(needle);
    };
} else {
    indexOf = function (haystack, needle) {
        var i = 0, length = haystack.length, idx = -1, found = false;

        while (i < length && !found) {
            if (haystack[i] === needle) {
                idx = i;
                found = true;
            }

            i++;
        }

        return idx;
    };
};

var ga_pull = {
	rt: 'wss://sandbox-coda-a1.appgranalianza.com.mx/push/',
	version: '1.1.0', connected: false, _ws: null,
	events: {},
	on: function(event, listener) {
		if (typeof this.events[event] !== 'object') {
		    this.events[event] = [];
		}
		this.events[event].push(listener);
	}, emit: function(event) {
		var i, listeners, length, args = [].slice.call(arguments, 1);
		if (typeof this.events[event] === 'object') {
		    listeners = this.events[event].slice();
		    length = listeners.length;
		    for (i = 0; i < length; i++) listeners[i].apply(this, args);
		}
	}, removeListener: function() {
		var idx;
		if (typeof this.events[event] === 'object') {
		    idx = indexOf(this.events[event], listener);
		    if (idx > -1) this.events[event].splice(idx, 1);
		}
	}, once: function() {
		this.on(event, function g () {
		    this.removeListener(event, g);
		    listener.apply(this, arguments);
		});
	}, init: function() {
		if(this.connected) return;
		this.connected = false;
		this._ws = new WebSocket(this.rt);
		this._ws.onopen = this._wsOpenHandler;
		this._ws.onclose = this._wsCloseHandler;
		this._ws.onmessage = this._wsMessageHandler;
		this._ws.onerror = this._wsErrorHandler;
	}, kill: function() {
		if(!this.connected) return;
		this._ws.close();
	}, _wsOpenHandler: function(evt) {
		let _th = ga_pull;
		_th.connected = true;
		_th.emit('open');
	}, _wsCloseHandler: function(evt) {
		let _th = ga_pull;
		_th.connected = false;
		_th._ws = null;
		_th._cb = {}
		ga_pull.emit('close');
	}, _wsMessageHandler: function(evt) {
		var msg = null;
		try {
			msg = JSON.parse(evt.data);
		} catch(e) {}
		if(!msg) return;
		if(msg.event) ga_pull._evtHandler(msg.event);
		/**
		 * TODO
		 * Broadcast and P2P messaging protocol
		 **/
	}, _evtHandler: function(evt) {
		if(!this._cb[evt.type]) return;
		//Temp array to avoid duplicated event dispatch
		var _p = [];
		//Dispatch Object-based subscriptions
		if(evt.object) if(this._cb[evt.type].obj[evt.object]) for(var x in this._cb[evt.type].obj[evt.object]) if(_p.indexOf(this._cb[evt.type].obj[evt.object][x]) == -1) {
			this._cb[evt.type].obj[evt.object][x].call(null, evt);
			_p.push(this._cb[evt.type].obj[evt.object][x]);
		}
		//Dispatch Full subscriptions
		for(var x in this._cb[evt.type].full) {
			if(_p.indexOf(this._cb[evt.type].full[x]) == -1) {
				this._cb[evt.type].full[x].call(null, evt);
				_p.push(this._cb[evt.type].full[x]);
			}
		}
	}, _wsErrorHandler: function(evt) {
		this.connected = false;
		this._ws = null;
		ga_pull.emit('error');
	}, _cb: {}, sub: function() {
		if(arguments.length < 2 || arguments.length > 3) throw new Error('Invalid event listener');
		var type = arguments[0];
		var obj = arguments.length == 3 ? arguments[1] : '*';
		var cb = arguments.length == 3 ? arguments[2] : arguments[1];
		if(!this._cb[type]) this._cb[type] = {full:[],obj:{}};
		var _c = false;
		if(obj == '*') {
			if(this._cb[type].full.indexOf(cb) == -1) {
				this._cb[type].full.push(cb);
				_c = true;
			}
		} else {
			if(!this._cb[type].obj[obj]) this._cb[type].obj[obj] = [];
			if(this._cb[type].obj[obj].indexOf(cb) == -1) {
				this._cb[type].obj[obj].push(cb);
				_c = true;
			}
		}
		if(_c) this._ws.send('SUB ' + type + ' ' + obj);
	}, unsub: function() {
		if(arguments.length < 2 || arguments.length > 3) throw new Error('Invalid event listener');
		var type = arguments[0];
		var obj = arguments.length == 3 ? arguments[1] : '*';
		var cb = arguments.length == 3 ? arguments[2] : arguments[1];
		if(!this._cb[type]) return;
		var _c = false;
		if(obj == '*') {
			var _i = this._cb[type].full.indexOf(cb);
			if(_i != -1) {
				this._cb[type].full.splice(_i, 1);
				_c = true;
			}
		} else {
			if(!this._cb[type].obj[obj]) return;
			var _i = this._cb[type].obj[obj].indexOf(cb);
			if(_i != -1) {
				this._cb[type].obj[obj].splice(_i, 1);
				_c = true;
			}
		}
		if(_c) this._ws.send('UNSUB ' + type + ' ' + obj);
	}
}
ga_pull.init();