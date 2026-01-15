import { CarouselComments } from "../common/CarouselComments"

const CommentsSectionComponent = () => {
  return (
    <section className="w-full text-white px-5 md:px-20 py-6 ">
      <div className="max-w-6xl mx-auto">
        <CarouselComments />
      </div>
    </section>
  )
}

export default CommentsSectionComponent