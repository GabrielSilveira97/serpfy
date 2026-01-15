import { Button } from "../ui/button"

const CTASectionComponent = () => {
    return(
        <section className="px-2 md:px-20 flex flex-col justify-center items-center pt-20 gap-5  border-t-[0.5px] border-white/40 md:border-none ">   
            <h1 className="md:text-6xl text-4xl font-semibold text-center">Começe agora o aprimoramento de sua aplicação</h1>
            <h2 className="text-xl text-center">Experimente o Serpfy com 7 dias grátis, cancele a qualquer momento.</h2>
            <Button className="bg-primary py-6 px-20 text-xl mt-6">Teste Grátis</Button>
        </section>
    )
}


export default CTASectionComponent