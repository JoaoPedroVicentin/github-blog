import styled from "styled-components";
import headerBg from "../../assets/headerBackground.png"

export const HeaderContainer = styled.main`
    min-height: 18.5rem;
    width: 100%;
    margin: 0 auto;
    background: url(${headerBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    img{
        width: 9.25rem;
        margin-top: 4rem;
    }
`