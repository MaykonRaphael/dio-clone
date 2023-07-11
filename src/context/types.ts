import { ReactNode } from "react";
import { IUser } from "../types/IUser";

export interface IAuthContext {
  user: IUser
  handleLogin: (loginData: ILoginData) => Promise<void>
  handleSignOut: () => void
}

export interface AuthContextProviderProps {
  children: ReactNode
}

export interface ILoginData {
  email: string
  password: string
}