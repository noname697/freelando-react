import Tipografia from "../Tipografia/Tipografia";

const CabecalhoCadastro = ({ titulo, subtitulo, descricao }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Tipografia variante="h1" componente="h1">
        {titulo}
      </Tipografia>
      {subtitulo && (
        <Tipografia variante="h3" componente="h3">
          {subtitulo}
        </Tipografia>
      )}
      {descricao && (
        <Tipografia variante="body" componente="body">
          {descricao}
        </Tipografia>
      )}
    </div>
  );
};

export default CabecalhoCadastro;
