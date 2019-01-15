# Chatkit Sample Client

> Slack clone powered by [Chatkit](https://pusher.com/chatkit). See it in action here: [chatkit-sample.netlify.com](https://chatkit-sample.netlify.com).
This project was forked from [React Slack Clone](https://github.com/pusher/react-slack-clone).

This is a static, single page web app bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app) for ease of setup, distribution and development. It is a thin UI wrapper around the [pusher-chatkit-client](https://github.com/pusher/chatkit-client-js) library to demonstrate how different features can work together to form a compelling real-time chat client with various potential product applications.

## Features

The Chatkit SDK allows you to implement features you would expect from a chat client. These include:

* 📝 Public and private chat rooms
* 📡 Realtime sending and receiving of messages
* 📦 Rich media attachments (drag and drop)
* 💬 Typing and presence indicators
* 📚 Read message cursors

## Components

The demo attempts to be feature complete according to documentation [here](https://docs.pusher.com/chatkit/reference/javascript). Feature requests should be made via issues or pull requests to this repository.

* CreateMessageForm - to send a message with a textual body and trigger typing indicators.
* CreateRoomForm - to create a new room and join it upon creation.
* FileInput - to send a message with a rich media attachment.
* Message - to render out a message that potentially includes an attachment.
* MessageList - to render a list of messages from a key value store.
* RoomHeader - to display useful information about a given room.
* RoomList - to render a list of rooms which can be subscribed to by the current user.
* TypingIndicator - to signify to the user that another user is typing in a given room.
* UserHeader - to display useful information about a given user.

# Usage / Deployment 

Follow these steps to set up Chatkit and Auth0 and deploy everything on Netlify.

0. Fork this repo.
1. Sign up for [Chatkit](https://pusher.com/chatkit) and [Auth0](https://auth0.com), and create apps/instances in both.
2. In the [Chatkit dashboard](https://dash.pusher.com/chatkit) use the console to create a new public room, and note the room ID.
3. Go to [Netlify](https://netlify.com), and set up a new site there, pointing to your new fork.
4. In Netlify site settings, set the build command as: `npm run predeploy`, and the publish directory as `build/`.
6. Set up the following environment variables in Netlify, based on the keys and secrets from your Chatkit instance and Auth0 application: `CHATKIT_INSTANCE_LOCATOR`, `CHATKIT_KEY` `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`, `AUTH0_DOMAIN`.
6. Enable lambda functions in Netlify, set functions directory as `./lambda`. This serves as our Chatkit authorizer that provides tokens to our applciation.
5. In [Auth0 dashboard's application settings](https://manage.auth0.com/#/applications) make sure the app is set up as a Single Page Application
6. Add the following to the Allowed Callback URLs section in the Auth0 dashboard: `https://[YOUR_NETLIFY_APP_NAME].netlify.com`
7. Go to the Rules section in Auth0 dashboard, and update and add 2 rules - one for creating a Chatkit user after the first log in, and one to add that user to a room. As rules trigger after each log in, we need to make to make a condition that triggers only when login count is less than 1. You can copy the rules from [rules/create-user.js](https://github.com/zmarkan/chatkit-sample-client/blob/master/rules/create-user.js), and [rules/add-to-room.js](https://github.com/zmarkan/chatkit-sample-client/blob/master/rules/add-to-room.js).

8. Add the following values as the settings in your rules:

- `chatkitInstanceLocator`
- `chatkitSecret`
- `chatkitRoomId`

9. Make a change, to trigger an update on Netlify (if it hasn't yet).
10. Visit the deployed Netlify site at: https://YOUR_NETLIFY_SITE.netlif.com
13. 🚀
