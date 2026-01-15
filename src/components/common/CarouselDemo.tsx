import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"


export const cards = [
  {
    logoPath: "/i_1.svg",
    title: "Tráfego & Mercado",
    items: [
      "item 1",
      "item 2",
      "item 3"
    ],
    image: "/graph-front_2.webp",
    buttonText: "Teste Tráfego & Mercado"
  },
  {
    logoPath: "/i_2.svg",
    title: "Social",
    items: [
      "item 1",
      "item 2",
      "item 3"
    ],
    image: "/graph-front_1.webp",
    buttonText: "Teste Social"
  },
  {
    logoPath: "/i_3.svg",
    title: "Local",
    items: [
      "item 1",
      "item 2",
      "item 3"
    ],
    image: "/graph-front_3.webp",
    buttonText: "Teste Local"
  },
  {
    logoPath: "/i_4.svg",
    title: "Conteúdo",
    items: [
      "item 1",
      "item 2",
      "item 3"
    ],
    image: "/graph-front_4.webp",
    buttonText: "Teste Conteúdo"
  },
  {
    logoPath: "/i_5.svg",
    title: "Visibilidade IA",
    items: [
      "item 1",
      "item 2",
      "item 3"
    ],
    image: "/graph-back_6.webp",
    buttonText: "Teste IA"
  }
]

export function CarouselDemo() {
  return (
    <div className="relative w-full px-5">
      <div className="absolute left-0 -top-4 -bottom-4 w-10 md:w-20 bg-gradient-to-r from-background via-background/40 to-transparent  z-20 pointer-events-none" />
      
      <div className="absolute right-0 -top-4 -bottom-4 w-10 md:w-20 bg-gradient-to-l from-background via-background/40 to-transparent  z-20 pointer-events-none" />
      
      <Carousel className="w-full">
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index} className="md:basis-1/3 md:px-5">
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square flex-col">
                    <div className="w-full flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-2">
                        <img 
                          src={card.logoPath} 
                          alt={`Logo ${card.title}`}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain"
                          loading="eager"
                        />
                        <h1 className="text-2xl font-semibold">{card.title}</h1>
                      </div>
                      <ul className="list-disc px-5 flex flex-col gap-4 py-3">
                        {card.items.map((item, index) => {
                          return (
                            <li key={index}>{item}</li>
                          )
                        })}

                      </ul>
                      <div className="flex justify-center items-center w-full h-[200px] md:h-[240px] overflow-hidden rounded-lg bg-muted/20">
                        <img 
                          src={card.image} 
                          alt={`Gráfico ${card.title}`} 
                          loading="lazy"
                          className="w-full h-full object-contain shadow-lg transition-transform duration-300 hover:scale-105" 
                        />
                      </div>
                      <Button className="w-full py-6 text-xl font-semibold mt-auto">{card.buttonText}</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious
          className="absolute hidden md:flex left-2 top-1/2 size-10 -translate-y-1/2 z-30"
        />
        <CarouselNext
          className="absolute hidden md:flex right-2 top-1/2 size-10 -translate-y-1/2 z-30"
        />
      </Carousel>
    </div>
  )
}