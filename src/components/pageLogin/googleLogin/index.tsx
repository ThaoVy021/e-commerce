import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'
import { HookReturnValue } from 'react-use-googlelogin/dist/types'

export const GoogleAuthContext = React.createContext<Partial<HookReturnValue>>(
  {},
)

export const GoogleAuthProvider = ({ children }: any) => {
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)
