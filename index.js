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
        return fbTools.deploy(options).then(() => {
          this.log('successful deploy!', {verbose: true});
        }).catch((err) => {
          // handle error
          this.log('something bad happened oh no', { color: 'red' });
          this.log(err, { color: 'red' });
          this.log(err.stack, { color: 'red' });
        });
      }
    });

    return new DeployPlugin();
  }
};
