import { Button } from "../ui/button";

const NavbarComponent = () => {
    return(
        <nav className="hidden bg-accent py-3 px-24 justify-between items-center">
            <h1>Logo</h1>
            <Button className="px-10 text-lg">Teste Grátis 7 Dias</Button>
        </nav>
    )
}


export default NavbarComponent;