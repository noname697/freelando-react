import styled from "@emotion/styled"
import { useState } from "react"

const LabelEstilizada = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const BotaoEstilizado = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    margin-top: ${props => props.theme.espacamentos.xs};
    padding: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`

const ListaSupensa = ({ titulo, opcoes }) => {
    const [estaAberta, alternarVisibilidade] = useState(false)

    return (<LabelEstilizada>
        {titulo}
        <BotaoEstilizado
             estaAberta={estaAberta}
             onClick={() => alternarVisibilidade(!estaAberta)}
        >
            <div>
                Selecione
            </div>
            <div>
                <span>{estaAberta ? '▲' : '▼'}</span>
            </div>
        </BotaoEstilizado>
    </LabelEstilizada>)
}

export default ListaSupensa
