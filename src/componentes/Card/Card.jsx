import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  padding: 32px;
  background: ${(props) => props.theme.cores.secundarias.a};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.primarias.a};
  border-radius: 16px;
`;

const Card = ({ children }) => {
  return <DivEstilizada>{children}</DivEstilizada>;
};

export default Card;
