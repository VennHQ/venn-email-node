var debug = require('debug')('venn');
EmailServiceProvider = require("../../messaging_service_provider")

function Nexmo(keys){
  if (!keys) return
	this.name = "nexmo"
	this.keys = keys

  this.initialize = function() {
    var API_PROTOCOL = "https"
    var DEBUG = false
    nexmo = require('easynexmo')
    nexmo.initialize(this.keys.api_key, this.keys.api_secret, API_PROTOCOL, DEBUG)
    this.client = nexmo
  }

  this.send = function(data, callback) {
    this.client.sendTextMessage(this.keys.from_phone, data.to, data.message, {}, function(err, result){
      if (err) {
        debug("-_-_ FAILED with nexmo _-_-");
        debug(err);
        return callback(err);
      } else {
        debug("-_-_ sent with nexmo _-_-");
        return callback(null, result, "nexmo");
      }
    })

  }

  this.initialize()
}

Nexmo.prototype = new MessagingServiceProvider()

module.exports = Nexmo