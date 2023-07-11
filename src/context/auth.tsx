import { createContext, useState } from "react";
import { AuthContextProviderProps, IAuthContext, ILoginData } from "./types";
import { IUser } from "../types/IUser";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export function AuthContextProvider ({children}: AuthContextProviderProps) {

  const [ user, setUser ] = useState<IUser>({} as IUser)

  const navigate = useNavigate();

  async function handleLogin(loginData: ILoginData) {
    try {
      const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);
      if(data.length === 1) {
        setUser(data[0])
        navigate('/feed')
      }
    } catch {
      alert("Error: Email ou senha inválidos!");
    }
  }

  const handleSignOut = () => {
    setUser({} as IUser)
  }

  return (
    <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
      {children}
    </AuthContext.Provider>
  )
}