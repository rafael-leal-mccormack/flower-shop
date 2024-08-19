import { PropsWithChildren } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FlowerLogo from "public/pngtree-natural-flower-logo-png-image_4135636.jpg";
import LanguageSelect from "@components/language-selector";
import Link from "next/link";

export default function LandingLayout(props: PropsWithChildren) {
  const t = useTranslations("Home");

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image className="w-16 h-16" src={FlowerLogo} alt="Logo"></Image>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <LanguageSelect></LanguageSelect>
            {/* {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
            {item.name}
          </a>
        ))} */}
          </div>
          <div className="hidden flex-col items-end lg:flex lg:flex-1 lg:justify-end">
            <p>(305) - 306 - 3000</p>
            <p>1234 nw 12th ave</p>
            <p>Hialeah, FL</p>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3bfa78] to-[#ff4242] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-3xl py-12">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* <Chip>
          Announcing our next round of funding.{" "}
          <a href="#" className="font-semibold text-indigo-600">
            <span aria-hidden="true" className="absolute inset-0" />
            Read more <span aria-hidden="true">&rarr;</span>
          </a>
        </Chip> */}
          </div>
          <div className="text-center">
            {props.children}
          </div>
        </div>
        <div>
          {/* <Testimonial></Testimonial>
      <Footer></Footer> */}
        </div>
      </div>
    </div>
  );
}
