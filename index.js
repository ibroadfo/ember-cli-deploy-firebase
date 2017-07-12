/* eslint-env node */
'use strict';
var BasePlugin = require('ember-cli-deploy-plugin');
var fbTools = require('firebase-tools');

module.exports = {
  name: 'ember-cli-deploy-firebase',

  createDeployPlugin: function(options) {
    var DeployPlugin = BasePlugin.extend({
      name: options.name,

      upload: function(context) {
        var outer = this;
        var project = context.config.firebase.appName || context.config.fireBaseAppName;
        var options = {
          project: project,
          public: context.config.build.outputPath,
          message: (context.revisionData || {}).revisionKey,
          verbose: context.ui.verbose
        };
        if (context.config.firebase.deployToken || process.env.FIREBASE_TOKEN) {
          options.token = context.config.firebase.deployToken || process.env.FIREBASE_TOKEN;
        }
        return fbTools.deploy(options).then(function() {
          outer.log('successful deploy!', {verbose: true});
        }).catch(function(err) {
          // handle error
          outer.log('something bad happened oh no', { color: 'red' });
          outer.log(err, { color: 'red' });
          outer.log(err.stack, { color: 'red' });
        });
      }
    });

    return new DeployPlugin();
  }
};
