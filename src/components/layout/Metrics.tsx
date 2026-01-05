const MetricsSectionComponent = () => {
    return (
        <section className="py-20">
            <h1 className="text-center text-5xl font-semibold">Metrics Section Component</h1>
            <ul className="flex flex-col md:flex-row justify-evenly gap-20 items-center py-16">
                <li>
                    <div className="flex flex-col items-center relative">
                        <h1 className="text-5xl font-semibold">10M</h1>
                        <p>descrição</p>
                        <img src="/shape-1.svg" alt="" className="absolute -right-5 -top-5 size-11 -z-10" />
                    </div>
                </li>
                <li>
                    <div className="flex flex-col items-center relative">
                        <h1 className="text-5xl font-semibold">25</h1>
                        <p>descrição</p>
                        <img src="/shape-2.svg" alt="" className="absolute -right-5 -top-5 size-11 -z-10" />
                    </div>
                    
                </li>
                <li>
                    <div className="flex flex-col items-center relative">
                        <h1 className="text-5xl font-semibold">35%</h1>
                        <p>descrição</p>
                        <img src="/shape-3.svg" alt="" className="absolute -right-4 -top-4 size-11 -z-10" />
                    </div>
                </li>
            </ul>
        </section>
    )
}


export default MetricsSectionComponent;