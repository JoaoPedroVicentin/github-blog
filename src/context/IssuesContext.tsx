import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface UserData {
    name: string,
    login: string,
    company: string,
    followers: number,
    bio: string,
    avatar_url: string,
    html_url: string
}

interface IssueData {
    id: number,
    title: string,
    body: string,
    created_at: string,
    number: number
}

interface IssuesContextType {
    userData: UserData,
    issues: IssueData[],
    fetchIssues: (query?: string) => Promise<void>
}

interface IssuaesProviderProps {
    children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuaesProviderProps) {

    const [userData, setUserData] = useState<UserData>({
        name: '',
        login: '',
        company: '',
        followers: 0,
        bio: '',
        avatar_url: '',
        html_url: ''
    })

    const [issues, setIssues] = useState<IssueData[]>([])

    async function fetchIssues(query: string = "") {
        const response = await api.get(`search/issues?q=${query}repo:JoaoPedroVicentin/Github-Blog`, {
        })

        setIssues(response.data.items)
    }

    async function fetchUser() {
        const response = await api.get('users/JoaoPedroVicentin')
        setUserData(response.data)
    }

    useEffect(() => {
        fetchUser()
        fetchIssues()
    }, [])

    return (
        <IssuesContext.Provider value={{ issues, userData, fetchIssues }}>
            {children}
        </IssuesContext.Provider>
    )
}