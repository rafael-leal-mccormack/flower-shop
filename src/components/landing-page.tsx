import AnimatedSection from "./animated-section";
import Link from "next/link";
import Gallery from "./gallery";
import Footer from "./footers";
import TestimonyCarousel from "./testimonial-carousel";
import { useTranslations } from "next-intl";
export default function LandingPage() {
  const t = useTranslations("Home");
  return (
    <>
      <AnimatedSection>
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {t("title")}
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">{t("desc")}</p>

        <Link className="pb-6 sm:pb-12" href={"/contact"}>
          <button className="m-4 border border-gray-400 rounded-2xl p-2">
            {t("contact")}
          </button>
        </Link>
      </AnimatedSection>
      <AnimatedSection>
        <Gallery></Gallery>
      </AnimatedSection>
      <AnimatedSection>
        <TestimonyCarousel></TestimonyCarousel>
      </AnimatedSection>
      <Footer></Footer>
    </>
  );
}
