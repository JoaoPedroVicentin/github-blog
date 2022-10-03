import { InfosContainer, InfosHeader, InfosFooter, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faArrowUpRightFromSquare, faCalendarDay, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export function Post() {
    return (
        <ProfileContainer>
            <InfosContainer>
                <InfosHeader>
                    <a href="#"><FontAwesomeIcon icon={faChevronLeft} fontSize={12} /><span>VOLTAR</span></a>
                    <a href="#"><span>VER NO GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} /> </a>
                </InfosHeader>
                <h1>JavaScript data types and data structures</h1>
                <InfosFooter>
                    <div> <FontAwesomeIcon icon={faGithub} fontSize={18} /> <span>JoãoPedroVicentin</span></div>
                    <div> <FontAwesomeIcon icon={faCalendarDay} fontSize={14} /> <span>Há 1 dia</span></div>
                    <div> <FontAwesomeIcon icon={faComment} fontSize={16} /> <span>5 comentários</span></div>
                </InfosFooter>
            </InfosContainer>
        </ProfileContainer>
    )
}