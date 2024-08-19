"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export default function AnimatedSection({image, float, children}: {image?: StaticImageData, float?: boolean, children?: any}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={{
        offscreen: {
          y: 300,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "tween",
            bounce: 0.4,
            duration: 0.8,
          },
        },
      }}
      viewport={{ once: true }}
      className={`h-fit w-full relative flex flex-col items-center`}
    >
      {children}
      {image ? <Image className={`${float ? 'sm:absolute sm:right-0 sm:top-0 sm:opacity-[50%]' : ''}`} src={image} alt="flowers"></Image> : ""}
    </motion.div>
  );
}
