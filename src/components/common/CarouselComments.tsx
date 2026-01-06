import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const cards = [
  { id: 1, title: "titulo 1", list : {listTitle : "Teste você mesmo", items: ["frase 1", "frase 2", "frase 3"]}, comment : {quote: "Uma frase grande para utilizar de exemplo para testar a aplicação", author : {name: "Autor 1", role: "Editor"}}, imgPath: "/graph_1.svg" },
  { id: 2, title: "titulo 2", list : {listTitle : "Como fazer", items: ["frase 1", "frase 2", "frase 3"]}, comment : {quote: "Comentário 2", author : {name: "Autor 2", role: "Especialista em SEO"}}, imgPath: "/graph_2.svg" },
]

export function CarouselComments() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(1)

  const onSelect = () => {
    if (!api) return
    setCurrent(api.selectedScrollSnap() + 1)
  }

  if (api) {
    api.on("select", onSelect)
  }

  return (
    <div className="w-full px-2 md:px-20">
      <Carousel setApi={setApi}>
        <div className="flex items-center gap-2 px-5 pt-10">
          <CarouselPrevious className="static translate-y-0 bg-secondary border-0 text-background"/>
          <span className="">
            {current} / {cards.length}
          </span>
          <CarouselNext className="static translate-y-0 bg-secondary border-0 text-background" />
        </div>
        <CarouselContent className="w-full">
          {cards.map((card) => (
            <CarouselItem key={card.id}>
              <Card className="border-0 bg-background text-white">
                <CardContent className="flex items-center w-full justify-center px-6">
                  <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full">
                    <div className="flex flex-col gap-5">
                      <h1 className="text-3xl font-semibold">{card.title}</h1>
                      <ul className="flex flex-col gap-4">
                        <h1 className="text-2xl font-semibold text-secondary py-2 ">{card.list.listTitle}</h1>
                        {card.list.items.map((item, index) => {
                          return (
                            <li key={index} className="flex gap-3 items-center"><h1 className="text-secondary">{index + 1}.</h1> {item}</li>
                          )
                        })}
                      </ul>
                      <Button variant="outline" className="text-xl font-semibold py-6 md:max-w-56 hover:border-primary hover:bg-background text-white/80 hover:text-white border-white/80">Teste Grátis</Button>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-black bg-secondary rounded-lg px-7 pt-4 pb-16 flex flex-col justify-between gap-5">
                          <h1 className=" text-2xl">"{card.comment.quote}"</h1>
                          <div className="flex items-center gap-3">
                            <Avatar className="size-12">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                               <h2 className="text-sm font-semibold">{card.comment.author.name}</h2>
                               <h3 className="text-sm">{card.comment.author.role}</h3>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <img src={card.imgPath} alt=""/>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
