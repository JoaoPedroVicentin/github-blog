import { HeaderContainer } from "./styles";
import imgLogo from "../../assets/logo.svg"

export function Header(){
    return(
        <HeaderContainer>
            <img src={imgLogo} />
        </HeaderContainer>
    )
}