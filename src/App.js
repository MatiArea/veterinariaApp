import React, { useEffect } from 'react'

import AppNavigation from './navigation'

// import { Provider as ReduxProvider } from 'react-redux'
// import { init } from './database'
// import store from './store'

// init()
//   .then(() => {
//     console.log('DB initialized')
//   })
//   .catch((err) => {
//     console.log('DB initialization failed', err)
//   })

export default App = () => {
  return (
    // <ReduxProvider store={store}>
    <AppNavigation />
    // </ReduxProvider>
  )
}
