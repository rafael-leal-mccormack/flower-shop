"use client"
import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { setUserLocale } from "../services/locale";
import { Locale } from "../services/config";
import { useTransition } from "react";

export default function LanguageSelect() {
  const t = useTranslations("Language");
  const [isPending, startTransition] = useTransition();

  return (
    <Select onValueChange={(val: Locale) => {
      startTransition(() => {
        setUserLocale(val)
      })
    }}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder={t("lang")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">{t("en")}</SelectItem>
        <SelectItem value="es">{t("es")}</SelectItem>
      </SelectContent>
    </Select>
  );
}
