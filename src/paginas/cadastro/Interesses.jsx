import Tipografia from "../../componentes/Tipografia/Tipografia";
import GrupoRadio from "../../componentes/Radio/GrupoRadio";
import { useState } from "react";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

const Interesses = () => {
  const [opcao, setOpcao] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h3">
        Qual a área de interesse?
      </Tipografia>
      <GrupoRadio opcoes={opcoes} valor={opcao} onChange={setOpcao} />
    </div>
  );
};

export default Interesses;
