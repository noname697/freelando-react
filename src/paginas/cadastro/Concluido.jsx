import styled from "@emotion/styled";
import Tipografia from "../../componentes/Tipografia/Tipografia";
import clienteConcluido from "./assets/cliente-concluido.png";
import { Col, Row } from "react-grid-system";
import Botao from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";

const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

const Concluido = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Seu perfil esta completo!
      </Tipografia>
      <Tipografia variante="body" componente="body">
        Agora é só começar a se conectar com os melhores freelancers do mercado!
      </Tipografia>
      <figure>
        <ImagemEstilizada src={clienteConcluido} alt="" />
      </figure>
      <Row justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
          <Link to="..">
            <Botao variante="secundaria">Voltar para home</Botao>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Concluido;
