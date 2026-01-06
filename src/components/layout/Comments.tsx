import { CarouselComments } from "../common/CarouselComments"

const CommentsSectionComponent = () => {
    return(
        <section className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-semibold text-center md:text-start">Encontre o caminho para o seu sucesso aqui</h1>
            <CarouselComments/>
        </section>
    )
}

export default CommentsSectionComponent