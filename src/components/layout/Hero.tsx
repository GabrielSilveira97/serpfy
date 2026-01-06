import { Button } from "../ui/button";

const HeroComponent = () => {
    return(
        <section className="md:h-screen flex flex-col px-2 md:px-20">
            <div className="flex justify-center md:justify-start items-center h-20">
                <h1>Logo</h1>
            </div>
            <div className="flex h-full justify-center md:justify-between items-center">
                <div className="flex flex-col items-center md:items-start gap-3">
                    <h1 className="text-center md:text-start text-5xl font-semibold"><span className="text-secondary">Melhore tudo</span> com essa aplicação</h1>
                    <h2 className="text-center md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, libero quia sunt consequuntur rem a blanditiis reiciendis dolorum.</h2>
                    <Button className="px-10">Teste Grátis 7 Dias</Button>
                </div>
                <div className="hidden md:flex flex-col">
                    <img className="" src="/hero-image.svg" alt="Imagem" />
                    <div className="flex items-center gap-2">
                        <img src="/shape-1.svg" alt="" className="size-7" />
                        <p>descriçãozinha</p>
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}


export default HeroComponent;