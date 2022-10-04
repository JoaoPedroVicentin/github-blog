import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

interface UserData{
    name: string,
    user: string,
    company: string,
    followers: number,
    bio: string,
    img: string,
    url: string
}

interface IssuesData{
    id: number,
    title: string,
    body: string,
    date: string
}

interface IssuesContextType{
    userData?: UserData,
    issues?: IssuesData[]
}

interface IssuaesProviderProps{
    children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({children}: IssuaesProviderProps){

    const [userData, setUserData] = useState<UserData>()

    const [issues, setIssues] = useState<IssuesData[]>([])

    useEffect(() => {
        fetch('http://api.github.com/users/JoaoPedroVicentin')
        .then(response => response.json())
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

        fetch('https://api.github.com/search/issues?q=repo:JoaoPedroVicentin/Github-Blog')
        .then(response => response.json())
        .then(data => {
            {data.items.map(item => {
                return(
                    console.log(item)
                    // setIssues(state => [...state, {
                    //     body: item.body,
                    //     id: item.id,
                    //     title: item.title,
                    //     date: item.created_at
                    // }])
                )
            })}
        })
        
    },[])


    return (
        <IssuesContext.Provider value={{userData, issues}}>
            {children}
        </IssuesContext.Provider>
    )
}