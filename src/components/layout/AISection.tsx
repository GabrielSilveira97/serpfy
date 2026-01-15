import { Button } from "../ui/button";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";



const AISectionComponent = () => {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref}>
        {inView &&         
        <AnimatePresence>
        <motion.section initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="bg-linear-to-b from-[#421983] to-[#6c31c9] rounded-b-[100px] px-2 md:px-20 py-10 md:pt-30 border-t-[0.5px] border-white/40 md:border-none">
            <h1 className="text-white text-center font-semibold md:text-6xl text-4xl">Apresentando o <span className="text-[#00a9ff] font-bold">Serpfy</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-10 px-2">
                <img src="/hero-image.svg" alt="Imagem" width={1000} className="rounded-xl"/>
            <div className="py-10 flex flex-col items-center gap-6 md:items-start">
                    <div className="flex gap-3">
                        <img src="/icon-1.svg" alt="" />
                        <section>
                            <h1 className="font-bold text-xl">SEO com Inteligência Artificial</h1>
                            <p>Análise automática do nível de SEO da sua aplicação, com detecção rápida de problemas e oportunidades.</p>
                        </section>
                    </div>
                    <div className="flex gap-3">
                        <img src="/icon-2.svg" alt="" />
                        <section>
                            <h1 className="font-bold text-xl">Insights Ações Direcionadas</h1>
                            <p>A IA prioriza melhorias de maior impacto para otimizar o ranqueamento com eficiência.</p>
                        </section>
                    </div>
                    <Button className="bg-linear-to-r hover:bg-linear-to-b from-[#b86fff] to-[#00a9ff] transition-all text-xl w-full px-20 py-5 mt-10">Teste Grátis</Button>
                </div>     
            </div>
        </motion.section>
        </AnimatePresence> }    

        </div>
    )
};
export default AISectionComponent;