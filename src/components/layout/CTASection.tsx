import { Button } from "../ui/button"

const CTASectionComponent = () => {
    return(
        <section className="px-2 md:px-20 flex flex-col justify-center items-center pt-28 gap-5">   
            <h1 className="text-5xl font-semibold">Titulo da Seção</h1>
            <h2 className="text-lg">Subtitulo da Seção</h2>
            <Button className="bg-primary py-6 px-20 text-xl mt-6">Teste Grátis</Button>
        </section>
    )
}


export default CTASectionComponent