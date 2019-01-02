const Chatkit = require("@pusher/chatkit-server");
const AuthenticationClient = require("auth0").AuthenticationClient;

const auth0 = new AuthenticationClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET
});

const chatkit = new Chatkit.default({
  instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
  key: process.env.CHATKIT_KEY
});

exports.handler = function(event, context, callback) {

  const { token, user_id } = event.queryStringParameters;
  const userId = user_id;
  const accessToken = token;

  auth0.getProfile(accessToken, function(error, auth0Profile) {

    if (error) {
      console.log("error!");
      console.log(error);

      return {statusCode: 500, body: JSON.stringify(error)}
    }

    console.log(auth0Profile);

    if (auth0Profile.email != userId) {
      console.log("Auth0 profile doesn't match provided ID");
      return {
        statusCode: 401,
        body: "Auth0 profile doesn't match provided ID"
      }
    }

    const authData = chatkit.authenticate({ userId: userId });

    console.log("Authed with chatkit!");
    console.log(userId);

    callback(null, {
        statusCode: authData.status,
        body: JSON.stringify(authData.body)
    })

  });
};
