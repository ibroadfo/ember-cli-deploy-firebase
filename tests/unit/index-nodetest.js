/* eslint-env node, mocha, es6 */
var chai = require("chai");
var expect    = chai.expect;
var proxyquire =  require('proxyquire');
var chaiAsPromised = require("chai-as-promised");
chai.should();

chai.use(chaiAsPromised);

var stubProject = {
  name: function(){
    return 'my-project';
  }
};

describe('firebase plugin', function() {
  var subject, mockUi;
  var fireStub = {};

  beforeEach(function() {
    subject = proxyquire('../../index', { 'firebase-tools': fireStub });
    mockUi = {
      verbose: true,
      messages: [],
      write: function() { },
      writeLine: function(message) {
        this.messages.push(message);
      }
    };
  });

  it('has a name', function() {
    var result = subject.createDeployPlugin({
      name: 'test-plugin'
    });

    expect(result.name).to.equal('test-plugin');
  });

  describe('calls deploy',function() {
    var plugin;
    var context;
    fireStub.deploy = function () {
      return new Promise(function(resolve) {
        resolve();
      });
    };
    it('uploads the index', function() {
      plugin = subject.createDeployPlugin({name:'firebase' });
      context = {
        ui: mockUi,
        project: stubProject,
        config: {
          fireBaseAppName: 'dont-test-me',
          firebase: {
            appName: 'dont-test-me-object',
            deployToken: 'deploy-token-1234'
          },
          build: {outputPath: './dist'},
        }
      };
      plugin.beforeHook(context);
      plugin.configure(context);
      return plugin.upload(context).should.be.fulfilled;
    });
  });
});
