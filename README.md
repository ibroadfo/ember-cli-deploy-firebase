# ember-cli-deploy-firebase [![Build Status](https://travis-ci.org/ibroadfo/ember-cli-deploy-firebase.svg?branch=master)](https://travis-ci.org/ibroadfo/ember-cli-deploy-firebase) [![ember-cli-deploy compatibility badge](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/plugins/ember-cli-deploy-firebase.svg)](https://ember-cli-deploy.github.io/ember-cli-deploy-version-badges/)


> An ember-cli-deploy plugin to deploy your app to firebase hosting.


This plugin will deploy your ember-cli app to firebase hosting.

## What is an ember-cli-deploy plugin? ##

A plugin is an addon that can be executed as a part of the ember-cli-deploy pipeline. A plugin will implement one or more of the ember-cli-deploy's pipeline hooks.

For more information on what plugins are and how they work, please refer to the [Plugin Documentation][1].

## Compatibility ##

If you need to continue using firebase 2.x, please use the 0.1.x branch.

## Quick Start ##
To get up and running quickly, do the following:

- [Sign up for a Firebase account](https://www.firebase.com/signup/)
- Install the Firebase CLI

```bash
$ npm install -g firebase-tools
```

- Install the ember-cli-deploy tool

```bash
$ ember install ember-cli-deploy
```

- Install this plugin and its dependencies using the plugin pack

```bash
$ ember install ember-cli-deploy-firebase-pack
```

- Set up firebase in your app, answering `dist` when asked 'What directory should be the public root?'.

```bash
$ firebase init
```

- Run the pipeline

```bash
$ ember deploy production
```

- Open your app!

```bash
$ firebase open hosting:site
```

## Installation ##
Run the following commands in your terminal:

```bash
ember install ember-cli-deploy
ember install ember-cli-deploy-firebase
```

## ember-cli-deploy Hooks Implemented ##

For detailed information on what plugin hooks are and how they work, please refer to the [Plugin Documentation][1].

- `upload`

## Configuration Options ##

For detailed information on how configuration of plugins works, please refer to the [Plugin Documentation][1].

### firebase.appName ###

The name of the firebase app you want to deploy to. If not specified, firebase-tools will pick this up from the `firebase.json` file it created in your project directory.

```
ENV = {
  ...
  firebase: {
    appName: 'your-firebase-app-name'
  },
  ...
};
```

### firebase.deployToken ###

If you have multiple firebase users, it's helpful to use a token instead. You can set
```
ENV = {
  ...
  firebase: {
    deployToken: 'asdf1234'
  },
  ...
};
```

replacing 'asdf1234' with the ```firebase login:ci``` token you receive.

More highly recommended:
1. Create a .env file in your project root and add ```FIREBASE_DEPLOY_TOKEN="ASDF1234"``` to it, where "ASDF1234" is the ```firebase login:ci``` token you received.
2. In config/deploy.js, add ```ENV.firebase.deployToken = process.env.FIREBASE_DEPLOY_TOKEN```

After this you should be able to deploy regardless of what account is currently logged in.

### build.outputPath ###

If you have customised the location your builds go, we'll pass that on.

### deploy messages

If you install the [ember-cli-deploy-revision-data](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data) plugin, its generated revision key will be used as the deploy message.

[1]: https://ember-cli-deploy.github.io/ember-cli-deploy/plugins/ "Plugin Documentation"
[2]: https://github.com/ember-cli-deploy/ember-cli-deploy-build "ember-cli-deploy-build"
