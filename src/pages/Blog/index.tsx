import { Profile } from "../../components/Profile";
import { InputSearch, PostCard, PostsContainer, SearchContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export function Blog() {

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
                <NavLink to={'/post'}>
                    <PostCard>
                        <div>
                            <h1>JavaScript data types and data structures</h1>
                            <span>Há 1 dias</span>
                        </div>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean</p>
                    </PostCard>
                </NavLink>

                <NavLink to={'/post'}>
                    <PostCard>
                        <div>
                            <h1>JavaScript data types and data structures</h1>
                            <span>Há 1 dias</span>
                        </div>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean</p>
                    </PostCard>
                </NavLink>

                <NavLink to={'/post'}>
                    <PostCard>
                        <div>
                            <h1>JavaScript data types and data structures</h1>
                            <span>Há 1 dias</span>
                        </div>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean</p>
                    </PostCard>
                </NavLink>


                <NavLink to={'/post'}>
                    <PostCard>
                        <div>
                            <h1>JavaScript data types and data structures</h1>
                            <span>Há 1 dias</span>
                        </div>
                        <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types: let foo = 42; // foo is now a number foo = 'bar'; // foo is now a string foo = true; // foo is now a boolean</p>
                    </PostCard>
                </NavLink>
            </PostsContainer>
        </div>
    )
}