import { Profile } from "../../components/Profile";
import { InputSearch, PostCard, PostsContainer, SearchContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ReactMarkdown from "react-markdown";
import { relativeDateFormatter } from "../../utils/formater";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Spinner } from "../../components/Spinner";

interface IssueData {
    id: number,
    title: string,
    body: string,
    created_at: string,
    number: number
}

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Blog() {

    const [issues, setIssues] = useState<IssueData[]>([])

    const [isLoading, setIsLoading] = useState(true);

    const {
        register,
        handleSubmit,
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchIssues(data: SearchFormInputs) {
        await fetchIssues(data.query)
    }

    const fetchIssues = useCallback(
        async(query: string = "") => {
            try {
                setIsLoading(true)
                const response = await api.get(`search/issues?q=${query}repo:JoaoPedroVicentin/Github-Blog`, {
                })
                setIssues(response.data.items)
            } finally {
                setIsLoading(false)
            }
    
        }, [handleSearchIssues]
    )

    useEffect(() => {
        fetchIssues()
    }, [])

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

            {isLoading === true ? <Spinner /> :
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
            }
        </div>
    )
}