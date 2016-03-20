/* jshint node: true */
'use strict';
var BasePlugin = require('ember-cli-deploy-plugin');

module.exports = {
  name: 'ember-cli-deploy-firebase',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      didBuild: function(context) {
        //do something amazing here once the project has been built
      },

      upload: function(context) {
        var Promise = require('rsvp').Promise;
        let outer = this;
        return new Promise(function(resolve, reject) {
          let foo = require('child_process').spawn('firebase', ['deploy']);
          foo.stdout.on('data', (data) => {
            outer.log(data);
          });
          foo.stderr.on('data', (data) => {
            outer.log(data);
          });
        });
      },

      didDeploy: function(context) {
        //do something here like notify your team on slack
      }
    });

    return new DeployPlugin();
  }
};
