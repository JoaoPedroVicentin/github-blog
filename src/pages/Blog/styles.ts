import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 54rem;
    margin-top: 4.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    div{
        display: flex;
        justify-content: space-between;
        width: 100%;

        p{
            font-size: 1.125rem;
            font-weight: 700;
        }

        span{
            font-size: 0.875rem;
            color: ${props => props.theme['base-span']};
        }
    }

`

export const InputSearch = styled.form`

    input{
            background-color: ${props => props.theme['base-input']};
            color: ${props => props.theme['base-text']};
            width: 100%;
            height: 3.125rem;
            padding: 0.75rem 1rem ;
            border-radius: 5px;
            border: 1px solid ${props => props.theme['base-border']};
            transition: all 0.3s;
            font-size: 1rem;

            ::placeholder{
                color: ${props => props.theme['base-label']};
            };

            &:focus{
                border: 1px solid ${props => props.theme['blue']};
            }
        }
`

export const PostsContainer = styled.div`
    width: 54rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 3rem 0;
`

export const PostCard = styled.div`
    background-color: ${props => props.theme['base-post']};
    height: 16.25rem;
    width: 26rem;
    padding: 2rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem 0;
    transition: all ease 0.3s;
    border: 2px solid transparent;

    div{
        display: grid;
        grid-template-columns: 4fr 1fr;
        gap: 1rem;

        h1{
            font-size: 1.25rem;
            color: ${props => props.theme['base-title']};
            line-height: 160%;
        }

        span{
            font-size: 0.875rem;
            color: ${props => props.theme['base-text']};
        }
    }

    p{
        max-height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${props => props.theme['base-text']};
        text-decoration: none;
    }

    &:hover{
        cursor: pointer;
        border: 2px solid ${props => props.theme['base-label']};
    }
`