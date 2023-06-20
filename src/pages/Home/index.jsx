import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";

import {
  Container,
  Title,
  TitleContent,
  TitleHighlight
} from "./styles";

import banner from '../../assets/banner.png';

export function Home() {

  const navigate = useNavigate();
  
  return (
    <div>
      <Header/>
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente<br/>
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TitleContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
            desafio profissional, evoluindo em comunidade com os melhores experts.
          </TitleContent>
          <Button title='Começar agora' variant="secondary" onClick={()=> navigate('/login')} />
        </div>
        <div>
          <img src={banner} alt="Banner" />
        </div>
      </Container>
    </div>
  );
}
