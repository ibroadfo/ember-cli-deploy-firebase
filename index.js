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
        var client = require('firebase-tools');
        let outer = this;
        return client.deploy({cwd:'.'}).then(function() {
          outer.log('it worked yay');
        }).catch(function(err) {
          // handle error
          outer.log('something bad happened oh no');
          outer.log(err);
        });
      },

      didDeploy: function(context) {
        //do something here like notify your team on slack
      }
    });

    return new DeployPlugin();
  }
};
