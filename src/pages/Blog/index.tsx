import { Profile } from "../../components/Profile";
import { InputSearch, PostCard, PostsContainer, SearchContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { IssuesContext } from "../../context/IssuesContext";

export function Blog() {

    const issues = useContextSelector(IssuesContext, (context) => {
        return context.issues
    })

    return (
        <div>
            <Profile />

            <SearchContainer>
                <div>
                    <p>Publicações</p>
                    <span>6 publicações</span>
                </div>
                <InputSearch>
                    <input placeholder="Buscar conteúdo" />
                </InputSearch>
            </SearchContainer>

            <PostsContainer>
                {issues?.map(issue => {
                    return (
                        <NavLink key={issue.id} to={'/post'}>
                            <PostCard>
                                <div>
                                    <h1>{issue.title}</h1>
                                    <span>{issue.date}</span>
                                </div>
                                <p>{issue.body}</p>
                            </PostCard>
                        </NavLink>
                    )
                })}
            </PostsContainer>
        </div>
    )
}