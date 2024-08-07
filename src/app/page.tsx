import Image from "next/image";
import LandingPage from "../components/landing-page";
import FlowerLogo from "../../public/pngtree-natural-flower-logo-png-image_4135636.jpg";
export default function Home() {
  return (
    <div>
      <nav className="bg-white z-20 sticky top-0 min-h-16 sm:min-h-24 border-b-1 border-gray-300 border-b flex justify-center items-center">
        <Image className="w-16 h-16" src={FlowerLogo} alt="Logo"></Image>
        <h5 className="mb-0 pr-8">Giannis flowers</h5>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between py-4 sm:p-24">
        <LandingPage></LandingPage>
      </main>
    </div>
  );
}
