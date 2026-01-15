const MetricsSectionComponent = () => {
    return (
        <section className="py-20">
            <h1 className="text-center text-5xl font-semibold">Metrics Section Component</h1>
            <ul className="flex flex-col md:flex-row justify-evenly gap-20 items-center py-16">
                <li>
                    <div className="flex flex-col items-center text-center relative">
                        <h1 className="text-6xl font-semibold">10M</h1>
                        <p className="pt-5 text-lg font-semibold">Análises de SEO processadas com alta performance e escala.</p>
                        <img src="/shape-1.svg" alt="" className="absolute right-30 md:right-24 -top-2 size-11 -z-10" />
                    </div>
                </li>
                <li>
                    <div className="flex flex-col items-center text-center relative">
                        <h1 className="text-6xl font-semibold">25</h1>
                        <p className="pt-5 text-lg font-semibold">Indicadores técnicos e de conteúdo avaliados automaticamente.</p>
                        <img src="/shape-2.svg" alt="" className="absolute right-32 -top-2 size-11 -z-10" />
                    </div>
                    
                </li>
                <li>
                    <div className="flex flex-col items-center text-center relative">
                        <h1 className="text-6xl font-semibold">35%</h1>
                        <p className="pt-5 text-lg font-semibold">Aumento médio no desempenho de SEO após as recomendações aplicadas.</p>
                        <img src="/shape-3.svg" alt="" className="absolute right-30 md:right-36 -top-2 size-11 -z-10" />
                    </div>
                </li>
            </ul>
        </section>
    )
}


export default MetricsSectionComponent;