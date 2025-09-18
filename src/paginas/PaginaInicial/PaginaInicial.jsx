import { Col, Container } from "react-grid-system";
import Banner from "./Banner/Banner";
import Bloco from "./Bloco";
import { cardsClientes, cardsFreelas, habilidades } from "./dados";
import CardCliente from "./Vantagens/cards/CardCliente";
import CardFreela from "./Vantagens/Cards/CardFreela";
import Chip from "../../componentes/Chip/Chip";

const PaginaInicial = () => {
  return (
    <>
      <Banner />
      <Container>
        <Bloco titulo="Vantagens para contratantes">
          {cardsClientes.map((card) => (
            <CardCliente
              key={card.texto}
              icone={card.icone}
              texto={card.texto}
            />
          ))}
        </Bloco>
        <Bloco titulo="Vantagens para Freelas">
          {cardsFreelas.map((card) => (
            <CardFreela
              key={card.texto}
              icone={card.icone}
              texto={card.texto}
            />
          ))}
        </Bloco>
        <Bloco titulo="Quais habilidades você encontra por aqui?">
          <Col sm={12}>
            {habilidades.map((habilidade) => (
              <Chip key={habilidade}>{habilidade}</Chip>
            ))}
          </Col>
        </Bloco>
      </Container>
    </>
  );
};

export default PaginaInicial;
