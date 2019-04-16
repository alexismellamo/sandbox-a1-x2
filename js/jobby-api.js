/*
 * Jobby API Wrapper
 * @version 1.1.0
 * @author Rodrigo Spesia [rodigospesia@me.com]
 * @copyright Gran Alianza 2018
 */
/*
 * Verify dependencies
 */
if(typeof $ == 'undefined') throw new Error('No se encontro jQuery');
var __a = $.ajax;
var ga_api = {
	version: '1.1',
	// rt: 'https://sandbox-coda-no-acl.appgranalianza.com.mx/api/v1.1/',
    rt: '/api/v1.1/',
	_e: function(xhr, t, cb) {
		/**
		 * Global HTTP error management
		 **/
		var e;
        switch(xhr.status) {
        	default:
            	if(xhr.responseJSON) {
            		if(xhr.responseJSON.error) {
            			e = new Error(xhr.responseJSON.error.message || 'Error desconocido');
            			e.id = xhr.responseJSON.error.id || 'A4YAM497';
            			if(xhr.responseJSON.error.trace) e.trace = xhr.responseJSON.error.trace;
            		} else {
            			e = new Error('Error desconocido');
            			e.id = 'Z4QFZ52X';
            		}
            	}
            break;
            case 0:
	            e = new Error('Sin conexión a Internet')
	            e.id = 'R83Z93EG';
            break;
            case 502:
            	e = new Error('Sistema no disponible')
	            e.id = '66DUKYAY';
	        break;
        }
        return cb.call(this, e);
    },
    address: {
        get: function(_i, cb) {
            /**
             * Returns Address Data
             * _i: Address UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'address/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Address Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'address'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Address
             * _d: New Address Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'address'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Address by id
             * _d: Address Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'address/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Address
             * _i: address UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'address/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    account: {
        get: function(_i, cb) {
            /**
             * Returns Account Data
             * _i: Account UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'account/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Account Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'account'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Account
             * _d: New Account Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'account'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Account by id
             * _d: Account Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'account/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Account
             * _i: account UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'account/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    appointment: {
        get: function(_i, cb) {
            /**
             * Returns Appointment Data
             * _i: Appointment UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'appointment/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Appointment Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'appointment'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Appointment
             * _d: New Appointment Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'appointment'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Appointment by id
             * _d: Appointment Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'appointment/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Appointment
             * _i: appointment UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'appointment/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    bill: {
        get: function(_i, cb) {
            /**
             * Returns Bill Data
             * _i: Bill UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'bill/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Bill Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'bill'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Bill
             * _d: New Bill Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'bill'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Bill by id
             * _d: Bill Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'bill/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Bill
             * _i: bill UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'bill/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    client: {
		get: function(_i, cb) {
			/**
			 * Returns Client Data 
			 * _i: Client UUID
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    url: ga_api.rt + 'client/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, list: function(_d, cb) {
			/**
			 * Returns Paginated Client Collection according to supplied filter & order params
			 * _d: Filter params (Object)
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    data: _d,
			    url: ga_api.rt + 'client'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, create: function(_d, cb) {
			/**
			 * Create a new Client
			 * _d: New Client Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'POST',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'client'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, update: function(_d, cb) {
			/**
			 * Update an existing Client by id
			 * _d: Client Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'PUT',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'client/' + _d.id
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, delete: function(_i, cb) {
			/**
			 * Deletes a Client
			 * _i: Client UUID
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'DELETE',
			    url: ga_api.rt + 'client/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}
	},
    candidate: {
		get: function(_i, cb) {
			/**
			 * Returns Candidate Data
			 * _i: Candidate UUID
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    url: ga_api.rt + 'candidate/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, list: function(_d, cb) {
			/**
			 * Returns Paginated Candidate Collection according to supplied filter & order params
			 * _d: Filter params (Object)
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    data: _d,
			    url: ga_api.rt + 'candidate'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, create: function(_d, cb) {
			/**
			 * Create a new Candidate
			 * _d: New Candidate Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'POST',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'candidate'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, update: function(_d, cb) {
			/**
			 * Update an existing Candidate by id
			 * _d: Candidate Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'PUT',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'candidate/' + _d.id
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, delete: function(_i, cb) {
			/**
			 * Deletes a Candidate
			 * _i: Candidate UUID
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'DELETE',
			    url: ga_api.rt + 'user/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}
	},
    candidate_application: {
        get: function(_i, cb) {
            /**
             * Returns CandidateApplication Data
             * _i: CandidateApplication UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'candidate_application/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated CandidateApplication Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'candidate_application'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new CandidateApplication
             * _d: New CandidateApplication Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'candidate_application'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing CandidateApplication by id
             * _d: CandidateApplication Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'candidate_application/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a CandidateApplication
             * _i: candidate_application UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'candidate_application/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    employee: {
        get: function(_i, cb) {
            /**
             * Returns Employee Data
             * _i: Employee UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'employee/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Employee Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'employee'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Employee
             * _d: New Employee Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'employee'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Employee by id
             * _d: Employee Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'employee/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Delete an Employee
             * _i: Employee UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'user/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    job: {
		get: function(_i, cb) {
			/**
			 * Returns Job Data
			 * _i: Job UUID
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    url: ga_api.rt + 'job/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, list: function(_d, cb) {
			/**
			 * Returns Paginated Job Collection according to supplied filter & order params
			 * _d: Filter params (Object)
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    data: _d,
			    url: ga_api.rt + 'job'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, create: function(_d, cb) {
			/**
			 * Create a new Job
			 * _d: New Job Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'POST',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'job'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, update: function(_d, cb) {
			/**
			 * Update an existing Job by id
			 * _d: Job Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'PUT',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'job/' + _d.id
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, delete: function(_i, cb) {
			/**
			 * Deletes a Job
			 * _i: Job UUID
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'DELETE',
			    url: ga_api.rt + 'job/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}
	},
    job_instance: {
        get: function(_i, cb) {
            /**
             * Returns JobInstance Data
             * _i: JobInstance UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'job_instance/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated JobInstance Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'job_instance'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new JobInstance
             * _d: New JobInstance Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'job_instance'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing JobInstance by id
             * _d: JobInstance Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'job_instance/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a JobInstance
             * _i: job_instance UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'job_instance/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        },
        appointment: {
            get: function(_i, cb) {
                /**
                 * Returns JobInstance Appointments
                 * _i: JobInstance UUID
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'GET',
                    url: ga_api.rt + 'job_instance/' + _i + '/appointment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, add: function(_i, _d, cb) {
                /**
                 * Add Appointment to JobInstance
                 * _i: JobInstance UUID
                 * _d: Appointment UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'POST',
                    dataType: 'json',
                    data: JSON.stringify(_d),
                    contentType: 'application/json',
                    url: ga_api.rt + 'job_instance' + _i + '/appointment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, remove: function(_i, cb) {
                /**
                 * Remove an Appointment from JobInstance (this doesn't delete the Appointment)
                 * _i: job_instance UUID
                 * _d: Appointment UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'DELETE',
                    url: ga_api.rt + 'job_instance/' + _i + '/appointment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }
        }
    },
    kpi: {
	    client: {
	        operative: {
	            get_kpi: function(_i, _d, cb) {
                    /**
                     * Returns Client Operative KPI
                     * _i: Client UUID
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/client/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns Client Operative Totals
                     * _i: Client UUID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/total/client/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            }
        },
        employee: {
            commercial: {
                get_kpi: function(_i, _d, cb) {
                    /**
                     * Returns Employee Commercial KPI
                     * _i: Employee UUID
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial/employee/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns Employee Commercial Totals
                     * _i: Employee UUID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial/total/employee/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            },
            operative: {
                get_kpi: function(_i, _d, cb) {
                    /**
                     * Returns Employee Operative KPI
                     * _i: Employee UUID
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/employee/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns Employee Operative Totals
                     * _i: Employee UUID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/total/employee/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            }
        },
        candidate_application: {
            operative: {
                get_kpi: function(_i, cb) {
                    /**
                     * Returns CandidateApplication  Operative KPI
                     * _i: CandidateApplication UUID
                     * cb: Callback function(error, data)
                     **/
                    __a({
                        context: this,
                        type:'GET',
                        url: ga_api.rt + 'kpi/operative/candidate_application/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            }
        },
        team: {
            commercial: {
                get_kpi: function(_i, _d, cb) {
                    /**
                     * Returns Team Commercial KPI
                     * _i: Team UUID
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial/team/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns Team Commercial Totals
                     * _i: Team UUID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial/total/team/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            },
            operative: {
                get_kpi: function(_i, _d, cb) {
                    /**
                     * Returns Team Operative KPI
                     * _i: Team UUID
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/team/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns Team Operative Totals
                     * _i: Team UUID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/total/team/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            }
        },
        state: {
            commercial: {
                get_kpi: function(_i, _d, cb) {
                    /**
                     * Returns State Commercial KPI
                     * _i: State ID
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial/state/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns State Commercial Totals
                     * _i: State ID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial/total/state/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            },
            operative: {
                get_kpi: function(_i, _d, cb) {
                    /**
                     * Returns State Operative KPI
                     * _i: State ID
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/state/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns State Operative Totals
                     * _i: State ID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/total/state/' + _i
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            }
        },
        global: {
            commercial: {
                get_kpi: function(_d, cb) {
                    /**
                     * Returns Global Commercial KPI
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial'
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns Global Commercial Totals
                     * _i: State ID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/commercial/total'
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            },
            operative: {
                get_kpi: function(_d, cb) {
                    /**
                     * Returns Global Operative KPI
                     * _d: Optional filters
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative'
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                },
                get_total: function(_d, cb) {
                    /**
                     * Returns Global Operative Totals
                     * _i: State ID
                     * cb: Callback function(error, data)
                     **/
                    if(!_d) _d = {}
                    __a({
                        context: this,
                        type:'GET',
                        data: _d,
                        url: ga_api.rt + 'kpi/operative/total'
                    }).done(function(data) {
                        cb.call(this, null, data);
                    }).fail(function(xhr, t, __m) {
                        ga_api._e(xhr, t, cb);
                    });
                }
            }
        }
    },
    location: {
        get: function(_i, cb) {
            /**
             * Returns Location Data
             * _i: Location UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'location/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Location Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'location'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Location
             * _d: New Location Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'location'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Location by id
             * _d: Location Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'location/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Location
             * _i: location UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'location/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    goal: {
        get: function(_i, cb) {
            /**
             * Returns Goal Data
             * _i: Goal UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'goal/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, get_for_role: function(_i, _d, cb) {
            /**
             * Returns Goal Data for particular Role
             * _i: Role ID
             * _d: Optional filters
             * cb: Callback function(error, data)
             **/
            if(!_d) _d = {}
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'goal/role/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, get_for_user_group: function(_i, _d, cb) {
            /**
             * Returns Goal Data for particular UserGroup
             * _i: UserGroup UUID
             * _d: Optional filters
             * cb: Callback function(error, data)
             **/
            if(!_d) _d = {}
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'goal/user_group/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, get_for_user: function(_i, _d, cb) {
            /**
             * Returns Goal Data for particular User
             * _i: User UUID
             * _d: Optional filters
             * cb: Callback function(error, data)
             **/
            if(!_d) _d = {}
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'goal/user/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Goal Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'goal'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Goal
             * _d: New Goal Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'goal'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Goal by id
             * _d: Goal Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'goal/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Goal
             * _i: goal UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'goal/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    message: {
        get: function(_i, cb) {
            /**
             * Returns Message Data
             * _i: Message UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'message/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Message Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'message'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Message
             * _d: New Message Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'message'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Message by id
             * _d: Message Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'message/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, send: function(_i, cb) {
            /**
             * Sends Message
             * _i: Message UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                url: ga_api.rt + 'message/' + _i + '/send'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, receive: function(_i, cb) {
            /**
             * Notifies Message reception
             * _i: Message UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                url: ga_api.rt + 'message/' + _i + '/receive'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, view: function(_i, cb) {
            /**
             * Notifies Message View
             * _i: Message UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                url: ga_api.rt + 'message/' + _i + '/view'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Message
             * _i: message UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'message/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        },
        attachment: {
            get: function(_i, cb) {
                /**
                 * Returns Message Files
                 * _i: Message UUID
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'GET',
                    url: ga_api.rt + 'message/' + _i + '/attachment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, create: function(_i, _d, cb) {
                /**
                 * Add File to Message
                 * _i: Message UUID
                 * _d: File UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'POST',
                    dataType: 'json',
                    data: JSON.stringify(_d),
                    contentType: 'application/json',
                    url: ga_api.rt + 'message' + _i + '/attachment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, delete: function(_i, cb) {
                /**
                 * Remove a File from Message (this doesn't delete the File)
                 * _i: message UUID
                 * _d: File UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'DELETE',
                    url: ga_api.rt + 'message/' + _i + '/attachment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }
        }
    },
    notification: {
        get: function(_i, cb) {
            /**
             * Returns Notification Data
             * _i: Notification UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'notification/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Notification Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'notification'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, receive: function(_i, cb) {
            /**
             * Notifies Notification reception
             * _i: Notification UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                url: ga_api.rt + 'notification/' + _i + '/receive'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, view: function(_i, cb) {
            /**
             * Notifies Notification View
             * _i: Notification UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                url: ga_api.rt + 'notification/' + _i + '/view'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    project: {
		get: function(_i, cb) {
			/**
			 * Returns Project Data
			 * _i: Project UUID
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    url: ga_api.rt + 'project/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, list: function(_d, cb) {
			/**
			 * Returns Paginated Project Collection according to supplied filter & order params
			 * _d: Filter params (Object)
			 * cb: Callback function(error, data)
			**/
			__a({
			    context: this,
			    type:'GET',
			    data: _d,
			    url: ga_api.rt + 'project'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, create: function(_d, cb) {
			/**
			 * Create a new Project
			 * _d: New Project Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'POST',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'project'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, update: function(_d, cb) {
			/**
			 * Update an existing Project by id
			 * _d: Project Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'PUT',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'project/' + _d.id
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, delete: function(_i, cb) {
			/**
			 * Deletes a Project
			 * _i: Project UUID
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'DELETE',
			    url: ga_api.rt + 'project/' + _i
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}
	},
    user: {
        get: function(_i, cb) {
            /**
             * Returns User Data
             * _i: User UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'user/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated User Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'user'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new User
             * _d: New User Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'user'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing User by id
             * _d: User Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'user/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a User
             * _i: user UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'user/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        },
        appointment: {
            get: function(_i, cb) {
                /**
                 * Returns User Appointments
                 * _i: User UUID
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'GET',
                    url: ga_api.rt + 'user/' + _i + '/appointment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, create: function(_i, _d, cb) {
                /**
                 * Add Appointment to User
                 * _i: User UUID
                 * _d: Appointment UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'POST',
                    dataType: 'json',
                    data: JSON.stringify(_d),
                    contentType: 'application/json',
                    url: ga_api.rt + 'user' + _i + '/appointment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, delete: function(_i, cb) {
                /**
                 * Remove an Appointment from User (this doesn't delete the Appointment)
                 * _i: user UUID
                 * _d: Appointment UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'DELETE',
                    url: ga_api.rt + 'user/' + _i + '/appointment'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }
        },
        task: {
            get: function(_i, cb) {
                /**
                 * Returns User Tasks
                 * _i: User UUID
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'GET',
                    url: ga_api.rt + 'user/' + _i + '/task'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, create: function(_i, _d, cb) {
                /**
                 * Add Task to User
                 * _i: User UUID
                 * _d: Task UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'POST',
                    dataType: 'json',
                    data: JSON.stringify(_d),
                    contentType: 'application/json',
                    url: ga_api.rt + 'user' + _i + '/task'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }, delete: function(_i, cb) {
                /**
                 * Remove an Task from User (this doesn't delete the Task)
                 * _i: user UUID
                 * _d: Task UUIDs (Array)
                 * cb: Callback function(error, data)
                 **/
                __a({
                    context: this,
                    type:'DELETE',
                    url: ga_api.rt + 'user/' + _i + '/task'
                }).done(function(data) {
                    cb.call(this, null, data);
                }).fail(function(xhr, t, __m) {
                    ga_api._e(xhr, t, cb);
                });
            }
        }
    },
    task: {
        get: function(_i, cb) {
            /**
             * Returns Task Data
             * _i: Task UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                url: ga_api.rt + 'task/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, list: function(_d, cb) {
            /**
             * Returns Paginated Task Collection according to supplied filter & order params
             * _d: Filter params (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'GET',
                data: _d,
                url: ga_api.rt + 'task'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, create: function(_d, cb) {
            /**
             * Create a new Task
             * _d: New Task Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'POST',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'task'
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, update: function(_d, cb) {
            /**
             * Update an existing Task by id
             * _d: Task Data (Object)
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'PUT',
                dataType: 'json',
                data: JSON.stringify(_d),
                contentType: 'application/json',
                url: ga_api.rt + 'task/' + _d.id
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }, delete: function(_i, cb) {
            /**
             * Deletes a Task
             * _i: task UUID
             * cb: Callback function(error, data)
             **/
            __a({
                context: this,
                type:'DELETE',
                url: ga_api.rt + 'task/' + _i
            }).done(function(data) {
                cb.call(this, null, data);
            }).fail(function(xhr, t, __m) {
                ga_api._e(xhr, t, cb);
            });
        }
    },
    nonce: {
		get: function(cb) {
			/**
			 * Get curren session
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'GET',
			    url: ga_api.rt + 'nonce'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}
	},
    session: {
		get: function(cb) {
			/**
			 * Get curren session
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'GET',
			    url: ga_api.rt + 'session'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, login: function(_d, cb) {
			/**
			 * Create a new Session
			 * _d: Session Login Data (Object)
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'POST',
			    dataType: 'json',
			    data: JSON.stringify(_d),
			    contentType: 'application/json',
			    url: ga_api.rt + 'session'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}, logout: function(cb) {
			/**
			 * Deletes a Job
			 * _i: Job UUID
			 * cb: Callback function(error, data)
			 **/
			__a({
			    context: this,
			    type:'DELETE',
			    url: ga_api.rt + 'session'
			}).done(function(data) {
			    cb.call(this, null, data);
			}).fail(function(xhr, t, __m) {
			    ga_api._e(xhr, t, cb);
			});
		}
	}
};
