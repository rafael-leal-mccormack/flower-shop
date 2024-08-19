import Image from "next/image";
import Flowers1 from "public/flowers1.jpg";
import Flowers2 from "public/flowers2.jpg";
import Flowers3 from "public/flowers3.jpg";
import Flowers4 from "public/flowers4.jpg";
import Party1 from "public/party1.jpg";
import Party2 from "public/party2.jpg";
import Wedding1 from "public/wedding1.jpg";
import Wedding2 from "public/wedding2.jpg";
import Wedding3 from "public/wedding3.jpg";
import Wedding4 from "public/wedding4.jpg";
import Wedding5 from "public/wedding5.jpg";
export default function Gallery() {
  const imageList = [
    Flowers1,
    Flowers2,
    Flowers3,
    Flowers4,
    Party1,
    Party2,
    Wedding1,
    Wedding2,
    Wedding3,
    Wedding4,
    Wedding5,
  ];
  return (
    <div className="flex flex-wrap flex-row gap-2 sm:gap-6 justify-center object-cover">
      {imageList.map((image, index) => {
        return (
          <Image
            key={index}
            src={image}
            alt="Flowers"
            className="w-40 h-40 sm:w-80 sm:h-80 object-cover"
          ></Image>
        );
      })}
    </div>
  );
}
