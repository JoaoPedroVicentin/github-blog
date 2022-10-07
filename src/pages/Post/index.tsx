import { InfosContainer, InfosHeader, InfosFooter, ProfileContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faArrowUpRightFromSquare, faCalendarDay, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface IssueData {
    id: number,
    title: string,
    body: string,
    created_at: string,
    number: number,
    html_url: string,
    comments: number,
    user: {
        login: string
    },
}

export function Post() {

    const { id } = useParams();

    const [post, setPost] = useState<IssueData>({
        id: 0,
        title: '',
        body: '',
        created_at: '',
        number: 0,
        html_url: '',
        comments: 0,
        user: { login: ''},
    })

    async function fetchPost() {
        const response = await api.get(`/repos/JoaoPedroVicentin/Github-Blog/issues/${id}`)
        setPost(response.data)
    }

    useEffect(() => {
        fetchPost()
    }, [])

    return (
        <ProfileContainer>
            <InfosContainer>
                <InfosHeader>
                    <NavLink to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} fontSize={12} /><span>VOLTAR</span>
                    </NavLink>
                    <a href={post.html_url} target="_blank"><span>VER NO GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} /> </a>
                </InfosHeader>
                <h1>{post.title}</h1>
                <InfosFooter>
                    <div> <FontAwesomeIcon icon={faGithub} fontSize={18} /> <span>{post.user.login}</span></div>
                    <div> <FontAwesomeIcon icon={faCalendarDay} fontSize={14} /> <span>{post.created_at}</span></div>
                    <div> <FontAwesomeIcon icon={faComment} fontSize={16} /> <span>{post.comments} comentários</span></div>
                </InfosFooter>
            </InfosContainer>
        </ProfileContainer>
    )
}