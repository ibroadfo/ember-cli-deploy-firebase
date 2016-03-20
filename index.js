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
        //do something here to actually deploy your app somewhere
      },

      didDeploy: function(context) {
        //do something here like notify your team on slack
      }
    });

    return new DeployPlugin();
  }
};
