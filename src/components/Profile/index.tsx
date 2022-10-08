import { InfosContainer, InfosHeader, InfosFooter, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup ,faArrowUpRightFromSquare, faBuilding  } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface UserData {
    name: string,
    login: string,
    company: string,
    followers: number,
    bio: string,
    avatar_url: string,
    html_url: string
}

export function Profile() {

    const [userData, setUserData] = useState<UserData>({
        name: '',
        login: '',
        company: '',
        followers: 0,
        bio: '',
        avatar_url: '',
        html_url: ''
    })

    async function fetchUser() {
        const response = await api.get('users/JoaoPedroVicentin')
        setUserData(response.data)
    }

    useEffect(() => {
        fetchUser()
    }, [])


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