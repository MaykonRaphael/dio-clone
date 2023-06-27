import { InputHTMLAttributes, ReactNode } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  name: string;
  errorMessage?: string;
  control: any;
}