
const scoreItems = [
    {
        id: 1,
        name: "Google",
        logo: "/google-logo.svg",
        score: 4.8,
        maxScore: 5,
    },
    {
        id: 2,
        name: "Tesla",
        logo: "/tesla-logo.svg",
        score: 4.6,
        maxScore: 5,
    },
    {
        id: 3,
        name: "Microsoft",
        logo: "/microsoft-logo.svg",
        score: 4.9,
        maxScore: 5,
    },
];


const ScoreSectionComponent = () => {
    return(
        <section className="flex flex-col justify-center items-center md:py-20 px-2 md:px-20 py-10 border-t-[0.5px] border-white/40 md:border-none">
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-semibold">Seu Marketing digital crescendo da melhor maneira</h1>
                <h2 className="text-2xl pt-6">Baseado em 6.300+ de análises de plataformas mundialmente conhecidas</h2>
            </div>
            <div className="pt-16 flex flex-col md:flex-row gap-8 justify-between w-full">
                {scoreItems.map((item) => {
                    return(
                        <div key={item.id} className="flex flex-col items-center gap-3">
                            <img
                                src={item.logo}
                                alt={item.name}
                                className="w-20"
                            />
                            <div className="relative flex items-center gap-1">
                                <div className="flex gap-1 text-gray-600">
                                    {Array.from({ length: item.maxScore }).map((_, index) => (
                                        <span key={index} className="text-4xl">
                                            ★
                                        </span>
                                    ))}
                                </div>

                                <div
                                    className="absolute left-0 top-0 flex gap-1 text-yellow-400 overflow-hidden"
                                    style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                                >
                                    {Array.from({ length: item.maxScore }).map((_, index) => (
                                        <span key={index} className="text-4xl">
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xl text-gray-400">
                                {item.score.toFixed(1)} de {item.maxScore}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ScoreSectionComponent