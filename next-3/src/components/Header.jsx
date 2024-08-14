"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
    const path = usePathname()
    console.log(path);
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
                <li><Link style={{ color: path == "/support" ? "blue" : "white", textDecoration: "none" }} href="/support">Support</Link></li>
                <li><Link style={{ color: path == "/store" ? "blue" : "white", textDecoration: "none" }} href="/store">Store</Link></li>
                <li><Link style={{ color: path == "/about" ? "blue" : "white", textDecoration: "none" }} href="/about">About</Link></li>
            </ul>
        </header>
    );
}

export default Header;