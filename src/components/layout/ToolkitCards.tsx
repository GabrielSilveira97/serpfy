import { CarouselDemo } from "../common/CarouselDemo"

const ToolkitCardsComponent = () => {
    return(
        <section className="flex flex-col justify-center items-center py-10 gap-16 border-t-[0.5px] border-white/40 md:border-none ">
            <h1 className="md:text-6xl text-4xl font-semibold text-center px-2 md:px-20">Selecione e Aplique a melhor ferramenta para sua aplicação</h1>
            <CarouselDemo/>
        </section>
    )
}

export default ToolkitCardsComponent