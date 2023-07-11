import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import {
  Container,
  Title,
  Column,
  TitleHighlight
} from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";

export function Feed() {

  const { user } = useContext(AuthContext)

  return (
    <div>
      <Header />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo name={user.name} percentual={45} />
          <UserInfo name={user.name} percentual={50} />
          <UserInfo name={user.name} percentual={20} />
          <UserInfo name={user.name} percentual={60} />
          <UserInfo name={user.name} percentual={87} />
          <UserInfo name={user.name} percentual={30} />
        </Column>
      </Container>
    </div>
  );
}
