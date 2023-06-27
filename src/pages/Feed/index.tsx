import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import {
  Container,
  Title,
  Column,
  TitleHighlight
} from "./styles";

export function Feed() {
  return (
    <div>
      <Header authenticated/>
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
          <UserInfo name='Maykon Raphael' percentual={45} />
          <UserInfo name='Maykon Raphael' percentual={50} />
          <UserInfo name='Maykon Raphael' percentual={20} />
          <UserInfo name='Maykon Raphael' percentual={60} />
          <UserInfo name='Maykon Raphael' percentual={87} />
          <UserInfo name='Maykon Raphael' percentual={30} />
        </Column>
      </Container>
    </div>
  );
}
