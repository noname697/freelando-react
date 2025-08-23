import styled from "@emotion/styled";

const HeaderEstilizado = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.espacamentos.m};
  color: #fff;
`;

const Cabecalho = ({ children }) => {
  return <HeaderEstilizado>{children}</HeaderEstilizado>;
};

export default Cabecalho;
