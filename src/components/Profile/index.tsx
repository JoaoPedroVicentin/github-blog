import { InfosContainer, InfosHeader, InfosFooter, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup ,faArrowUpRightFromSquare, faBuilding  } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useContextSelector } from "use-context-selector";
import { IssuesContext } from "../../context/IssuesContext";

export function Profile() {

    const userData = useContextSelector(IssuesContext, (context) => {
        return context.userData
    })

    return (
        <ProfileContainer>
            <img src={userData?.avatar_url} />
            <InfosContainer>
                <InfosHeader>
                    <h1>{userData?.name}</h1>
                    <a href={userData?.html_url} target='_blank'><span>GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} /> </a>
                </InfosHeader>
                <p>{userData?.bio}</p>
                <InfosFooter>
                    <div> <FontAwesomeIcon icon={faGithub} fontSize={18} /> <span>{userData?.login}</span></div>
                    <div> <FontAwesomeIcon icon={faBuilding} fontSize={14} /> <span>{userData?.company}</span></div>
                    <div> <FontAwesomeIcon icon={faUserGroup} fontSize={14} /> <span>{userData?.followers} seguidores</span></div>
                </InfosFooter>
            </InfosContainer>
        </ProfileContainer>
    )
}