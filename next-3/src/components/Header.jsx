"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
    const path = usePathname()

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
                <li><Link style={{ color: path == "/" ? "blue" : "white", textDecoration: "none" }} href="/">Home</Link></li>
                <li><Link style={{ color: path == "/posts" ? "blue" : "white", textDecoration: "none" }} href="/posts">Posts</Link></li>
                <li><Link style={{ color: path == "/users" ? "blue" : "white", textDecoration: "none" }} href="/users">Users</Link></li>
                <li><Link style={{ color: path == "/recipes" ? "blue" : "white", textDecoration: "none" }} href="/recipes">Recipes</Link></li>
            </ul>
        </header>
    );
}

export default Header;