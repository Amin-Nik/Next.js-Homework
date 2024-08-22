"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Header() {
    const path = usePathname()
    const [admin, setAdmin] = useState("");

    return (
        <header>
            <ul style={{
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
                listStyle: "none",
                backgroundColor: "black"
            }}>
                <li><Link style={{
                    color: path == "/" ? "blue" : "white",
                    textDecoration: "none",
                    padding: 10
                }} href="/">Home</Link></li>

                <li><Link style={{
                    color: path == "/posts" ? "blue" : "white",
                    backgroundColor: path == "/admin/posts" && "yellowgreen",
                    textDecoration: "none",
                    border: admin && "solid 1px yellowgreen",
                    borderRadius: 20,
                    padding: 10
                }} href={`http://localhost:3000${admin}/posts`}>Posts</Link></li>

                <li><Link style={{
                    color: path == "/users" ? "blue" : "white",
                    backgroundColor: path == "/admin/users" && "yellowgreen",
                    textDecoration: "none",
                    border: admin && "solid 1px yellowgreen",
                    borderRadius: 20,
                    padding: 10
                }} href={`http://localhost:3000${admin}/users`}>Users</Link></li>

                <li><Link style={{
                    color: path == "/recipes" ? "blue" : "white",
                    backgroundColor: path == "/admin/recipes" && "yellowgreen",
                    textDecoration: "none",
                    border: admin && "solid 1px yellowgreen",
                    borderRadius: 20,
                    padding: 10
                }} href={`http://localhost:3000${admin}/recipes`}>Recipes</Link></li>

                <span onClick={(e) => admin ? setAdmin("") : setAdmin("/admin")} style={{
                    padding: 10,
                    borderRadius: "100%",
                    color: "white",
                    backgroundColor: admin ? "yellowgreen" : "black",
                    border: "solid 1px yellowgreen",
                    position: "absolute",
                    left: 20,
                    cursor: "pointer"
                }}>Admin</span>
            </ul>
        </header >
    );
}

export default Header;