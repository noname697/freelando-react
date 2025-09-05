import styled from "@emotion/styled";
import clienteConcluido from "./assets/cliente-concluido.png";
import { Col, Row } from "react-grid-system";
import Botao from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";

const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

const Concluido = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro
        titulo=" Seu perfil esta completo!"
        descricao="Agora é só começar a se conectar com os melhores freelancers do mercado!"
      />
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
