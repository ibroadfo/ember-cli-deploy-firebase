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
        var options = {
          project: context.config.fireBaseAppName,
          public: context.config.build.outputPath,
          message: (context.revisionData || {}).revisionKey
        };
        return fbTools.deploy(options).then(function() {
          // outer.log('it worked yay');
        }).catch(function(err) {
          // handle error
          outer.log('something bad happened oh no', { color: 'red' });
          outer.log(err, { color: 'red' });
        });
      }
    });

    return new DeployPlugin();
  }
};
