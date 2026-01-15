import { Button } from "../ui/button";
import { AnimatePresence, motion } from "motion/react";

const HeroComponent = () => {
    return(
        <AnimatePresence>
        <section className="md:h-screen flex flex-col px-2 md:px-20">
            <div className="flex justify-center md:justify-start items-center">
                <img src="logo.png" alt="logo" className="md:pt-5 py-8 w-[200px] md:w-[150px]" />
            </div>
            <div className="flex h-full justify-center md:justify-between items-center gap-10 w-full">
                <motion.div                         initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col items-center md:items-start gap-10 w-full md:w-auto">
                    <h1 

                        className="text-center md:text-start md:text-6xl text-4xl font-semibold"
                    >
                        <span className="text-secondary">Monitore e Aumente</span> seu SEO com precisão
                    </h1>
                    <h2 className="text-center md:text-start text-2xl">O SERPFY analisa seu site, coleta métricas essenciais e entrega um score claro de SEO para você otimizar o que realmente importa.</h2>
                    <Button className="px-20 py-7 text-xl rounded-lg">Teste Grátis 7 Dias</Button>
                </motion.div>
                <div className="hidden md:flex flex-col relative gap-10">
                    <motion.div className="relative inline-block "  initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }} >
                        <motion.div 
                            
                            className="absolute bg-secondary rounded-2xl"
                            style={{
                                width: '95%',
                                height: '140%',
                                clipPath: 'polygon(0% 15%, 100% 0%, 100% 100%, 0% 85%)',
                                zIndex: 0,
                                right: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                borderRadius: '1rem'
                            }}
                        />
                        <img className="relative z-10 block" src="/hero-image.svg" alt="Imagem" width={1000}/>
                    </motion.div>
                    <motion.div className="flex gap-2 items-center relative z-10" initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}>
                        <img src="/shape-1.svg" alt="" className="size-7" />
                        <p className="text-2xl"><span className="font-semibold">10M</span> de Usuários</p>
                    </motion.div>
                </div>
            </div>
        </section>
        </AnimatePresence>
    )
}


export default HeroComponent;