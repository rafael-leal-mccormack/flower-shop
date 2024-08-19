import { useTranslations } from "next-intl";
import { TestimonialList } from "../lib/testimonial-list";
import Testimonial from "./testimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function TestimonyCarousel() {
  const t = useTranslations("Home")
  return (
    <>
      <h4 className="mt-24">{t("reviews")}</h4>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {TestimonialList.map((review) => {
            return (
              <CarouselItem key={review.reviewerName}>
                <Testimonial
                  review={review.review}
                  reviewerName={review.reviewerName}
                ></Testimonial>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
