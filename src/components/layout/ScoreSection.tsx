
const scoreItems = [
    {
        id:1,
        title: "empresa 1",
        score: 5
    },
        {
        id:2,
        title: "empresa 2",
        score: 5
    },
        {
        id:3,
        title: "empresa 3",
        score: 5
    }
]


const ScoreSectionComponent = () => {
    return(
        <section className="flex flex-col justify-center items-center py-24 px-2 md:px-20">
            <div className="text-center">
                <h1 className="text-5xl font-semibold">Titulo da seção</h1>
                <h2 className="text-xl pt-4">Subtitulo</h2>
            </div>
            <div className="pt-10 flex flex-col md:flex-row gap-8 justify-between w-full">
                {scoreItems.map((item) => {
                    return(
                        <div key={item.id} className="flex flex-col items-center">
                            <h1>{item.title}</h1>
                            <h2>score: {item.score}</h2>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ScoreSectionComponent