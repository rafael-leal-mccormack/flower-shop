"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const t = useTranslations("Contact");
  const { data } = useFormStatus();
  const router = useRouter();
  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data]);
  return (
    <button
      type="submit"
      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {t("submit")}
    </button>
  );
}
