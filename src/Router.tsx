import { DeafultLayout } from "./layouts/defaultLayout"
import { Blog } from "./pages/Blog"
import { Post } from "./pages/Post"
import { Route, Routes } from "react-router-dom"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DeafultLayout />}>
                <Route path="/" element={<Blog />}/>
                <Route path="/post/:id" element={<Post />}/>
            </Route>
        </Routes>
    )
}