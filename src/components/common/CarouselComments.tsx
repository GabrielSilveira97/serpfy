import { useEffect, useState } from "react"
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
  {
    id: 1,
    title: "Sugar Geek Show transformou um blog gratuito em um negócio de seis dígitos",
    list: {
      listTitle: "Experimente você também",
      items: [
        "Descubra os temas que seus clientes realmente valorizam e gere conteúdos em instantes com ferramentas de escrita com IA.",
        "Revele as estratégias vencedoras dos concorrentes que você ainda não está aproveitando com o Domain Overview.",
        "Acompanhe suas posições nos mecanismos de busca com o Position Tracking e garanta que seu público sempre encontre você primeiro.",
      ],
    },
    comment: {
      quote:
        "O Serpfy tem tudo o que você precisa para SEO. Hoje, alcançamos 2,8 milhões de visualizações mensais e uma receita de seis dígitos.",
      author: {
        name: "Liz Marek",
        role: "Fundadora, Sugar Geek Show",
        avatar: "/photo-1.webp"
      },
    },
    imgPath: "/graph_1.svg",
  },
  {
    id: 2,
    title: "Transforme insights em resultados sem complicação",
    list: {
      listTitle: "Como o Serpfy ajuda",
      items: [
        "Analisa automaticamente o SEO do seu site e sugere melhorias claras.",
        "Mostra o que seus concorrentes estão fazendo para ranquear melhor.",
        "Acompanha a evolução das suas posições nos buscadores em tempo real.",
      ],
    },
    comment: {
      quote:
        "Depois de usar o Serpfy, tivemos um aumento consistente de tráfego orgânico e mais leads qualificados.",
      author: {
        name: "Aaron Dicks",
        role: "Editor chefe, Impression Digital",
        avatar:"/photo-2.webp"
      },
    },
    imgPath: "/graph_2.svg",
  },
]

export function CarouselComments() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)

    const handler = () => {
      setCurrent(api.selectedScrollSnap() + 1)
    }

    api.on("select", handler)

    return () => {
      api.off("select", handler)
    }
  }, [api])

  return (
    <div className="w-full">
      <Carousel setApi={setApi}>
        <div className="flex items-center gap-3 pt-2 md:pt-0">
          <CarouselPrevious className="static translate-y-0 bg-[#21e6a2] hover:bg-[#1cd591] text-[#16003b] border-0 size-10 rounded-full" />
          <span className="text-lg font-semibold">
            {current} / {cards.length}
          </span>
          <CarouselNext className="static translate-y-0 bg-[#21e6a2] hover:bg-[#1cd591] text-[#16003b] border-0 size-10 rounded-full" />
        </div>
        <CarouselContent className="w-full mt-8">
          {cards.map((card) => (
            <CarouselItem key={card.id}>
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex w-full justify-center px-0 md:px-4">
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 md:gap-14 w-full">
                    <div className="flex flex-col gap-6">
                      <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
                        {card.title}
                      </h1>
                      <div>
                        <h2 className="text-2xl font-semibold text-[#21e6a2] mb-4">
                          {card.list.listTitle}
                        </h2>
                        <ol className="flex flex-col gap-4">
                          {card.list.items.map((item, index) => (
                            <li key={index} className="flex gap-3 text-base md:text-lg">
                              <span className="font-semibold text-[#21e6a2]">
                                {index + 1}.
                              </span>
                              <span className="text-white">{item}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                      <Button
                        variant="outline"
                        className="text-lg font-semibold py-6 md:max-w-56 border-white/70 text-white/90 hover:text-white hover:border-white hover:bg-white/10"
                      >
                        Teste grátis
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 md:items-end">
                      <div className="bg-[#21e6a2] text-[#12083b] rounded-2xl px-7 pt-6 pb-10 md:mr-6 max-w-md w-full shadow-lg relative z-0">
                        <p className="text-xl md:text-2xl leading-snug">
                          &quot;{card.comment.quote}&quot;
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                          <Avatar className="size-12">
                            <AvatarImage src={card.comment.author.avatar} />
                            <AvatarFallback>LM</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold">
                              {card.comment.author.name}
                            </p>
                            <p className="text-sm">{card.comment.author.role}</p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block w-full max-w-md md:-mt-14 md:ml-auto relative md:pl-16 z-10">
                        <img
                          src={card.imgPath}
                          alt="Visitors overview graph"
                          className="w-full h-auto rounded-xl bg-white/5"
                        />
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
