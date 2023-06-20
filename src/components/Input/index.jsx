import { Controller } from "react-hook-form"
import {
  ErrorMessage,
  InputContainer,
  InputText,
  ItemContainer
} from './styles';

export default function Input({icon, name, errorMessage, control, ...rest}) {
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
