import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import { chatkitTokenProviderEndpoint, chatkitInstanceLocator } from './config'

const credentials = {
  url: (accessToken) =>
    `${chatkitTokenProviderEndpoint}?token=${accessToken}`,
  instanceLocator: chatkitInstanceLocator,
}

const { instanceLocator, url } = credentials
export default ({ state, actions }, { id, accessToken }) => {   

  console.log(`id: ${id}`)
  new ChatManager({
    tokenProvider: new TokenProvider({ url: url(accessToken) }),
    instanceLocator,
    userId: id,
  })
    .connect({
      onUserStartedTyping: actions.isTyping,
      onUserStoppedTyping: actions.notTyping,
      onAddedToRoom: actions.subscribeToRoom,
      onRemovedFromRoom: actions.removeRoom,
      onUserCameOnline: actions.setUserPresence,
      onUserWentOffline: actions.setUserPresence,
    })
    .then(user => {
      // Subscribe to all rooms the user is a member of
      console.log("subscribe to rooms")

      Promise.all(
        user.rooms.map(room => {
          
          console.log(room)

          return user.subscribeToRoom({
            roomId: room.id,
            hooks: { onMessage: actions.addMessage },
          })
        })
      ).then(rooms => {
        console.log(rooms)
        actions.setUser(user)
        // Join the first room in the users room list
        user.rooms.length > 0 && actions.joinRoom(user.rooms[0])
      })
    })
    .catch(error => console.log('Error on connection', error))

  }