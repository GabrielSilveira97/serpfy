    import { Button } from "../ui/button";


const AISectionComponent = () => {
    return (
        <section className="bg-linear-to-b from-[#421983] to-[#6c31c9] rounded-b-[100px] px-2 md:px-20 py-10 md:pt-30">
            <h1 className="text-white text-center font-semibold text-5xl">Apresentando o <span className="text-[#00a9ff] font-bold">Serpfy</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10">
               <h1 className="flex justify-center items-center">Gif</h1>
               <div className="py-10 flex flex-col items-center gap-6 md:items-start">
                    <div className="flex gap-3">
                        <img src="/icon-1.svg" alt="" />
                        <section>
                            <h1 className="font-bold">SEO com Inteligência Artificial</h1>
                            <p>Análise automática do nível de SEO da sua aplicação, com detecção rápida de problemas e oportunidades.</p>
                        </section>
                    </div>
                    <div className="flex gap-3">
                        <img src="/icon-2.svg" alt="" />
                        <section>
                            <h1 className="font-bold">Insights Ações Direcionadas</h1>
                            <p>A IA prioriza melhorias de maior impacto para otimizar o ranqueamento com eficiência.</p>
                        </section>
                    </div>
                    <Button className="bg-linear-to-r hover:bg-linear-to-b from-[#b86fff] to-[#00a9ff] transition-all text-xl w-full px-20 py-5 mt-10">Teste Grátis</Button>
                </div>     
            </div>
        </section>
    )
};
export default AISectionComponent;