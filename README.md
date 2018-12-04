# Chatkit Sample Client

> Slack clone powered by [Chatkit](https://pusher.com/chatkit). See it in action here: [https://zmarkan.github.io/chatkit-sample-client](https://zmarkan.github.io/chatkit-sample-client).
This project was forked from [React Slack Clone](https://github.com/pusher/react-slack-clone).

This is a static, single page web app bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app) for ease of setup, distribution and development. It is a thin UI wrapper around the [pusher-chatkit-client](https://github.com/pusher/chatkit-client-js) library to demonstrate how different features can work together to form a compelling real-time chat client with various potential product applications.

There is also a corresponding serverside component at [github.com/zmarkan/chatkit-sample-server](https://github.com/zmarkan/chatkit-sample-server), that is also deployed on Glitch.com, as well as rules deployed in Auth0 that create users in Chatkit and make them join rooms.

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

Follow these steps to set up Chatkit and Auth0 and deploy everything on Github pages and Glitch.

1. Sign up for [Chatkit](https://pusher.com/chatkit) and [Auth0](https://auth0.com), and create apps/instances in both.
2. In the [Chatkit dashboard](https://dash.pusher.com/chatkit) use the console to create a new public room, and note the room ID.
3. Go to [Glitch - Chatkit Sample Server](https://glitch.com/~zmarkan-chatkit-sample-server), and remix it (You might need to create a Glitch account first). This serves as our Chatkit authorizer and makes sure that all users exist in Auth0.
4. In the Glitch project root, create a filed called `env`. Fill it with these values with the ones from your Chatkit and Auth0 dashboards:

```javascript
export CHATKIT_INSTANCE_LOCATOR=""
export CHATKIT_KEY=""

export AUTH0_DOMAIN=""
export AUTH0_CLIENT_ID=""
export AUTH0_CLIENT_SECRET=""
```

5. In [Auth0 dashboard's application settings](https://manage.auth0.com/#/applications) make sure the app is set up as a Single Page Application
6. Add the following to the Allowed Callback URLs section in the Auth0 dashboard: `https://[YOUR_GITHUB_USERNAME].github.io/chatkit-sample-client` 

7. Go to the Rules section in Auth0 dashboard, and update and add 2 rules - one for creating a Chatkit user after the first log in, and one to add that user to a room. As rules trigger after each log in, we need to make to make a condition that triggers only when login count is less than 1. You can copy the rules from [zmarkan/chatkit-sample-auth0-rules](https://github.com/zmarkan/chatkit-sample-auth0-rules).

8. Add the following values as the settings in your rules:

- `chatkitInstanceLocator`
- `chatkitSecret`
- `chatkitRoomId`

9. Fork this repository  (if you haven't yet) (chatkit-sample-client)
10. Install the dependencies by running `npm install`
11. Deploy the project to GitHub pages by running `npm run deploy`.
12. Visit the deployed GitHub pages at: https://YOUR_GITHUB_USERNAME.github.io/chatkit-sample-client
13. 🚀
