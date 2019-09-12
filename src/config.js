const auth0Domain = 'dev-chatkit.au.auth0.com'
const auth0ClientID = 'Dg0YD94HtidaSwY9duDLXLvLHBXkwmlF'
const auth0RedirectUri = 'https://jovial-bhabha-bb6944.netlify.com/'
// const auth0RedirectUri = 'http://localhost:3000' /* Testing locally */

const chatkitTokenProviderEndpoint = '.netlify/functions/token'

const chatkitInstanceLocator = 'v1:us1:ede2c115-4c01-4fb9-8d23-3ce3e72c87fe'

export { auth0Domain, auth0ClientID, auth0RedirectUri, chatkitTokenProviderEndpoint, chatkitInstanceLocator }