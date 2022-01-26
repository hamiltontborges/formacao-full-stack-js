import styled, { css } from 'styled-components'

const Caixa = styled.div`
    width: 100px;
    height: 100px;
    background-color: darkmagenta;

    ${props => 
        props.vermelha && 
        css`
            background-color: red;
    `};
`
const CaixaPreta = styled(Caixa)`
    background-color: black;
`


const Header = () => {
    return (
        <>
            <Caixa />
            <Caixa vermelha />
            <CaixaPreta />
        </>
    )
}

export default Header
