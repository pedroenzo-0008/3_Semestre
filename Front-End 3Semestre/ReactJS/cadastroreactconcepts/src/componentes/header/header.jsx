import {Link} from "react-router-dom";
// import "./header.css"

export default function Header(){
    return(
        <header>
            <nav>
                <Link to="/">Home</Link> {" | "}
                <Link to="/quemsomos">QuemSomos</Link> {" | "}
                <Link to="/cadfrutas">Frutas</Link>{" | "}
                <Link to="/produtos">Produtos</Link>
            </nav>
        </header>
    )
}