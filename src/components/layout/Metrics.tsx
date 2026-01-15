import { AnimatePresence, motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const MetricsSectionComponent = () => {

    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref}>
        {inView && 
        <AnimatePresence>
        <motion.section initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }} className="py-28  border-b-[0.5px] border-white/40 md:border-none">
            <h1 className="text-center md:text-6xl text-4xl font-semibold px-2 md:px-20">Plataformas do mundo inteiro confiam no Serpfy</h1>
            <ul className="flex flex-col md:flex-row justify-evenly gap-20 items-center pt-20 px-2 md:px-20">
                <motion.li initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }} >
                    <div className="flex flex-col items-center text-center relative">
                        <h1 className="text-6xl font-semibold">10M</h1>
                        <p className="pt-5 text-xl">Análises de SEO processadas com alta performance e escala.</p>
                        <img src="/shape-1.svg" alt="" className="absolute right-30 md:right-24 -top-2 size-11 -z-10" />
                    </div>
                </motion.li>
                <motion.li initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div className="flex flex-col items-center text-center relative">
                        <h1 className="text-6xl font-semibold">25</h1>
                        <p className="pt-5 text-xl">Indicadores técnicos e de conteúdo avaliados automaticamente.</p>
                        <img src="/shape-2.svg" alt="" className="absolute right-32 -top-2 size-11 -z-10" />
                    </div>
                    
                </motion.li>
                <motion.li initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}>
                    <div className="flex flex-col items-center text-center relative">
                        <h1 className="text-6xl font-semibold">35%</h1>
                        <p className="pt-5 text-xl">Aumento médio no desempenho de SEO após as recomendações aplicadas.</p>
                        <img src="/shape-3.svg" alt="" className="absolute right-30 md:right-36 -top-2 size-11 -z-10" />
                    </div>
                </motion.li>
            </ul>
        </motion.section>
        </AnimatePresence>
        }
        </div>
    )
}


export default MetricsSectionComponent;