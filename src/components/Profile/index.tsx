import { InfosContainer, InfosHeader, InfosFooter, ProfileContainer } from "./styles";
import imgUser from "../../assets/imgUser.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup ,faArrowUpRightFromSquare, faBuilding  } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export function Profile() {
    return (
        <ProfileContainer>
            <img src={imgUser} />
            <InfosContainer>
                <InfosHeader>
                    <h1>João Pedro Vicentin</h1>
                    <a href="#"><span>GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} /> </a>
                </InfosHeader>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <InfosFooter>
                    <div> <FontAwesomeIcon icon={faGithub} fontSize={18} /> <span>JoãoPedroVicentin</span></div>
                    <div> <FontAwesomeIcon icon={faBuilding} fontSize={14} /> <span>Rocketseat</span></div>
                    <div> <FontAwesomeIcon icon={faUserGroup} fontSize={14} /> <span>32 seguidores</span></div>
                </InfosFooter>
            </InfosContainer>
        </ProfileContainer>
    )
}