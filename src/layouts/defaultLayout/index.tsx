import { Outlet } from "react-router";
import { Header } from "../../components/Header";
import { BlogContainer } from "./styles";

export function DeafultLayout() {
    return (
        <BlogContainer>
            <Header />
            <Outlet />
        </BlogContainer>
    )
}