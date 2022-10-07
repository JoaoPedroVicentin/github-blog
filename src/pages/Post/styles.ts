import styled from "styled-components";

export const ProfileContainer = styled.main`
    background-color: ${props => props.theme['base-profile']};
    width: 54rem;
    height: 10.5rem;
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    margin-top: -5.5rem;
    padding: 2rem 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 9.25rem;
        border-radius: 8px;
    }
`

export const InfosContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    gap: 1.5rem;
    color: ${props => props.theme['base-title']};
    h1{
        font-size: 1.5rem;
    }
`

export const InfosHeader = styled.header`

    display: flex;
    justify-content: space-between;

    a{
        font-size: 0.75rem;
        color: ${props => props.theme['blue']};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.4s;

        span{
            height: 1.45rem;
        }

        &:hover{
            border-color: ${props => props.theme['blue']};
        }
    }
`

export const InfosFooter = styled.footer`
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: ${props => props.theme['base-label']};

        span{
            height: 1.25rem;
            color: ${props => props.theme['base-subtitle']};
        }
    }
`

export const PostContainer = styled.div`
    width: 54rem;
`

export const PostContent = styled.div`
    padding: 2.5rem 2rem;
`

