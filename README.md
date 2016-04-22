# ember-cli-deploy-firebase [![Build Status](https://travis-ci.org/ibroadfo/ember-cli-deploy-firebase.svg?branch=master)](https://travis-ci.org/ibroadfo/ember-cli-deploy-firebase)

> An ember-cli-deploy plugin to deploy your app to firebase hosting.


This plugin will deploy your ember-cli app to firebase hosting.

## What is an ember-cli-deploy plugin?

A plugin is an addon that can be executed as a part of the ember-cli-deploy pipeline. A plugin will implement one or more of the ember-cli-deploy's pipeline hooks.

For more information on what plugins are and how they work, please refer to the [Plugin Documentation][1].

## Quick Start
To get up and running quickly, do the following:

- [Sign up for a Firebase account](https://www.firebase.com/signup/)
- Install the Firebase CLI

```bash
$ npm install -g firebase-tools
```

- Ensure ember-cli-deploy and [ember-cli-deploy-build][2] are installed

```bash
$ ember install ember-cli-deploy
$ ember install ember-cli-deploy-build
```

- Set up firebase in your app, answering `dist` when asked 'What directory should be the public root?'.

```bash
$ firebase init
```

- Install this plugin

```bash
$ ember install ember-cli-deploy-firebase
```

- Run the pipeline

```bash
$ ember deploy production
```

- Open your app!

```bash
$ firebase open
```

## Installation
Run the following command in your terminal:

```bash
ember install ember-cli-deploy-firebase
```

## ember-cli-deploy Hooks Implemented

For detailed information on what plugin hooks are and how they work, please refer to the [Plugin Documentation][1].

- `upload`

## Configuration Options

For detailed information on how configuration of plugins works, please refer to the [Plugin Documentation][1].

### fireBaseAppName

The name of the firebase app you want to deploy to. If not specified, firebase-tools will pick this up from the `firebase.json` file it created in your project directory.

```
ENV.fireBaseAppName: 'your-firebase-app-name';
```

### build.outputPath

If you have customised the location your builds go, we'll pass that on.

### deploy messages

If you install the [ember-cli-deploy-revision-data](https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data) plugin, its generated revision key will be used as the deploy message.

[1]: http://ember-cli.github.io/ember-cli-deploy/plugins "Plugin Documentation"
[2]: https://github.com/ember-cli-deploy/ember-cli-deploy-build "ember-cli-deploy-build"
