import { useTranslations } from "next-intl";
import LandingPage from "@components/landing-page";

export default function Example() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations("Home");

  return (
    <>
      <h5 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
        {process.env.COMPANY_NAME} + Logo here
      </h5>

      <LandingPage></LandingPage>
    </>
  );
}
