const auth0Domain = 'pusher-chatkit-demo.auth0.com'
const auth0ClientID = 'VF0kHM9szMj0aQGEfqafrdAKVwRb2a3Q'
const auth0RedirectUri = 'https://elastic-kilby-a7cd2c.netlify.com/'
// const auth0RedirectUri = 'http://localhost:3000' /* Testing locally */

// const chatkitTokenProviderEndpoint = 'https://zmarkan-chatkit-sample-server.glitch.me/token'

const chatkitTokenProviderEndpoint = 'https://elastic-kilby-a7cd2c.netlify.com/.netlify/functions/token'

const chatkitInstanceLocator = 'v1:us1:7954c374-f491-4c08-b71e-5abfc0a3dc89'

export { auth0Domain, auth0ClientID, auth0RedirectUri, chatkitTokenProviderEndpoint, chatkitInstanceLocator }