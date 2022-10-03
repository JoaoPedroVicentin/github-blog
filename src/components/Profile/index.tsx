import { InfosContainer, InfosHeader, InfosFooter, ProfileContainer } from "./styles";
import imgUser from "../../assets/imgUser.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup ,faArrowUpRightFromSquare, faBuilding  } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react";

interface UserData{
    name: string,
    user: string,
    company: string,
    followers: number,
    bio: string,
    img: string,
    url: string
}

export function Profile() {

    useEffect(() => {
        fetch('http://api.github.com/users/JoaoPedroVicentin').then(response => response.json())
        .then(data => {
            setUserData({
                name: data.name,
                user: data.login,
                company: data.company,
                followers: data.followers,
                bio: data.bio,
                img: data.avatar_url,
                url: data.html_url
            })
        })
    },[])

    const [userData, setUserData] = useState<UserData>()

    return (
        <ProfileContainer>
            <img src={userData?.img} />
            <InfosContainer>
                <InfosHeader>
                    <h1>{userData?.name}</h1>
                    <a href={userData?.url} target='_blank'><span>GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} /> </a>
                </InfosHeader>
                <p>{userData?.bio}</p>
                <InfosFooter>
                    <div> <FontAwesomeIcon icon={faGithub} fontSize={18} /> <span>{userData?.user}</span></div>
                    <div> <FontAwesomeIcon icon={faBuilding} fontSize={14} /> <span>{userData?.company}</span></div>
                    <div> <FontAwesomeIcon icon={faUserGroup} fontSize={14} /> <span>{userData?.followers} seguidores</span></div>
                </InfosFooter>
            </InfosContainer>
        </ProfileContainer>
    )
}