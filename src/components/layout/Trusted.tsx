
const trustedOnes = [
    {
        id:1,
        name:"Google",
        image:"/google-logo.svg"
    },
    {
        id:2,
        name:"Microsoft",
        image:"/microsoft-logo.svg"
    },
    {
        id:3,
        name:"Tesla",
        image:"/tesla-logo.svg"
    },
    {
        id:4,
        name:"Amazon",
        image:"/amazon-logo.svg"
    },
    {
        id:5,
        name:"Meta",
        image:"/meta-logo.svg"
    }
]


const TrustedComponent = () => {
    return(
        <section className="px-2 py-20 lg:px-20 flex flex-col gap-8 text-white/60">
            <div className="flex justify-evenly items-center ">
                <div className="flex-1 h-px bg-accent/60"/>
                <h1 className="px-6 lg:px-10 font-semibold">Confiado por</h1>
                <div  className="flex-1 h-px bg-accent/60"/>
            </div>
            <div className="flex justify-evenly flex-wrap-2">
                {trustedOnes.map((trusted) => {
                    return(
                        <img key={trusted.id} src={trusted.image} width={50} className="drop-shadow-xl" alt={trusted.name} />
                    )
                })}
            </div>
        </section>
    )
}

export default TrustedComponent;



