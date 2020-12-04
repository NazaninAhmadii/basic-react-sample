import React from 'react'

// initial our context with default valus 
const authContext = React.createContext({ // the default value here does not matter here
    authenticated: false,
    login: () => { }
})

export default authContext