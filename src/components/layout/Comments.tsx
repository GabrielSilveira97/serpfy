import { CarouselComments } from "../common/CarouselComments"

const CommentsSectionComponent = () => {
  return (
    <section className="w-full bg-[#3b117a] text-white py-16 md:py-24 px-2 md:px-20">
      <div className="max-w-6xl mx-auto">
        <CarouselComments />
      </div>
    </section>
  )
}

export default CommentsSectionComponent