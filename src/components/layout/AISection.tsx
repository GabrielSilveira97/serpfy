import { RiSearchEyeLine } from "react-icons/ri";
import { Button } from "../ui/button";


const AISectionComponent = () => {
    return (
        <section className="bg-linear-to-b from-[#421983] to-[#6c31c9] rounded-b-[100px] px-2 md:px-20 py-10 md:pt-30">
            <h1 className="text-white text-center font-semibold text-4xl">Apresentando o <span className="">Serpfy</span></h1>
            <div className="flex flex-col justify-evenly md:flex-row py-10">
               <h1 className="flex justify-center items-center">Gif</h1>
               <div className="py-10 flex flex-col items-center gap-6 md:items-start">
                    <div className="flex gap-3">
                        <img src="/icon-1.svg" alt="" />
                        <p>descrição 1</p>
                    </div>
                    <div className="flex gap-3">
                        <img src="/icon-2.svg" alt="" />
                        <p>descrição 2</p>
                    </div>
                    <Button className="bg-linear-to-r hover:bg-linear-to-b from-[#b86fff] to-[#00a9ff] transition-all text-xl w-full px-20 py-5 mt-10">Teste Grátis</Button>
                </div>     
            </div>
        </section>
    )
};
export default AISectionComponent;