# TfL Tube Status App

This is a demo of how to display data from TfL's API in a React Native app.

## How to run

First, you will need an App ID and key for TfL's API. Once you have these, create a file called `.env` in the root of the project, with the following line:

```
APP_ID=your_tfl_app_id
APP_KEY=your_tfl_app_key
```

To run the app in a web browser, run `expo web`, then click "Run in web browser" from the Metro Bundler menu. In a Chromium-based browser, you can hit F12 and choose to emulate a device's viewport dimensions.

I haven't yet tested this app with Android or iOS devices or emulators.

## Tests

To run the tests, use `npm test`.

## Comments

- This app uses `babel-plugin-inline-dotenv` to set the app ID and API key. This is fine for a demo app, but you shouldn't store secrets in environment variables - [see this doc for more info](https://docs.expo.io/build-reference/variables/).

- I used a simple `useFetch` hook to query the API - in an app with more functionality, I'd think about choosing a data management client library based on considerations such as API architecture, client-side caching requirements, etc.

- Credit for [hex colours of the tube lines](https://github.com/rourkie/tflcss/blob/master/tfl.css).
