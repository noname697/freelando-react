import styled from "@emotion/styled";

const RodapeEstilizado = styled.footer`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
  height: 100px;
`;

const Rodape = ({ children }) => {
  return <RodapeEstilizado>{children}</RodapeEstilizado>;
};

export default Rodape;
