
const trustedOnes = [
    {
        id:1,
        name:"Google",
    },
    {
        id:2,
        name:"Microsoft"
    },
    {
        id:3,
        name:"Tesla"
    },
    {
        id:4,
        name:"Amazon"
    },
    {
        id:5,
        name:"Meta"
    }
]


const TrustedComponent = () => {
    return(
        <section className="px-2 py-20 lg:px-20 flex flex-col gap-4">
            <div className="flex justify-evenly items-center ">
                <div className="flex-1 h-px bg-amber-500 "/>
                <h1 className="px-6 lg:px-10">Confiado por</h1>
                <div  className="flex-1 h-px bg-amber-500"/>
            </div>
            <div className="flex justify-evenly flex-wrap">
                {trustedOnes.map((trusted) => {
                    return(
                        <h1 key={trusted.id} >{trusted.name}</h1>
                    )
                })}
            </div>
        </section>
    )
}

export default TrustedComponent;



