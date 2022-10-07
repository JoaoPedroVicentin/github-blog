import { Profile } from "../../components/Profile";
import { InputSearch, PostCard, PostsContainer, SearchContainer } from "./styles";
import { useContextSelector } from "use-context-selector";
import { IssuesContext } from "../../context/IssuesContext";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactMarkdown from "react-markdown";
import { relativeDateFormatter } from "../../utils/formater";
import { Spinner } from "../../components/Spinner";

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {

    const issues = useContextSelector(IssuesContext, (context) => {
        return context.issues
    })

    const fetchIssues = useContextSelector(IssuesContext, (context) => {
        return context.fetchIssues
    })

    const {
        formState: { isSubmitting },
        register,
        handleSubmit,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchIssues(data: SearchFormInputs) {
        await fetchIssues(data.query)
    }

    return (
        <div>
            <Profile />

            <SearchContainer>
                <div>
                    <p>Publicações</p>
                    <span>{issues?.length} publicações</span>
                </div>
                <InputSearch onSubmit={handleSubmit(handleSearchIssues)}>
                    <input placeholder="Buscar conteúdo" {...register('query')} />
                </InputSearch>
            </SearchContainer>

            <PostsContainer>
                {issues?.map(issue => {
                    return (
                            <PostCard key={issue.id} to={`/post/${issue.number}`}>
                                <div>
                                    <h1>{issue.title}</h1>
                                    <span>{relativeDateFormatter(issue.created_at)}</span>
                                </div>
                                <p>
                                    <ReactMarkdown>
                                        {issue.body}
                                    </ReactMarkdown>
                                </p>                  
                            </PostCard>
                    )
                })}
            </PostsContainer>
        </div>
    )
}