import {
  InputContainer,
  InputText,
  ItemContainer
} from './styles';

export default function Input({icon, name, ...rest}) {
  return (
    <InputContainer>
      {icon ? <ItemContainer>{icon}</ItemContainer> : null}
      <InputText {...rest}/>
    </InputContainer>
  );
}
