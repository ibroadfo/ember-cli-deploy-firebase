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
        const outer = this;
        return require('firebase-tools').deploy({
          message: context.revisionData.revisionKey,
          firebase: context.config.fireBaseAppName,
          public: context.config.build.outputPath,
        }).then(function() {
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
