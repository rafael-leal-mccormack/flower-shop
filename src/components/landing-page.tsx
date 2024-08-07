import AnimatedSection from "./animated-section";
import Image1 from "../../public/flowers1.jpg";
import Image2 from "../../public/flowers2.jpg";
import Image3 from "../../public/flowers3.jpg";
import Image4 from "../../public/facebook-Linked_Image___Emily+Clack+Photography.jpg";
export default function LandingPage() {
  return (
    <>
      <AnimatedSection float image={Image1}>
        <h2 className="m-4 sm:max-w-64 sm:z-10 relative font-medium">
          Fast, beautiful flowers and set up at a great cost!
        </h2>

        <button className="m-4 border border-gray-400 rounded-2xl p-2">Contact us</button>
      </AnimatedSection>
      <AnimatedSection image={Image2}></AnimatedSection>
      <AnimatedSection image={Image3}></AnimatedSection>
      <AnimatedSection image={Image4}></AnimatedSection>
    </>
  );
}
