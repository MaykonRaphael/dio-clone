import { Controller } from "react-hook-form"
import {
  ErrorMessage,
  InputContainer,
  InputText,
  ItemContainer
} from './styles';
import { IInput } from "./types";

export function Input({icon, name, errorMessage, control, ...rest}: IInput) {
  return (
    <>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <InputContainer>
        {icon && <ItemContainer>{icon}</ItemContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest}/>}
        />
      </InputContainer>
    </>
  );
}
