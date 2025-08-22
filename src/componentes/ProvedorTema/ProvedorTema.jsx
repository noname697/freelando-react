import { ThemeProvider } from '@emotion/react'

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '#8009FF',
        primarias: {
            a: '#5754ED',
            b: '#D93114',
            c: ''
        },
        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutras: {
            a: '#373737',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: ''
        }
    },
    espacamentos: {
       xs: '8px',
       s : '16px',
       l : '32px',
    },
    fontFamily: "'Montserrat', sans-serif"
}


const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}

export default ProvedorTema;