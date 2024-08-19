"use server";
import { Resend } from "resend";
import { EmailTemplate } from "../components/resend/email-template";
import { redirect } from "next/navigation";

export async function SendEmail(formData: FormData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const email = process.env.HOST_EMAIL!;
  const businessName = process.env.BUSINESS_NAME;

  //required
  const firstName = formData.get("first-name")?.toString()!;
  const lastName = formData.get("last-name")?.toString()!;
  const sendEmail = formData.get("email")?.toString()!;
  const message = formData.get("message")?.toString()!;
  // optional
  const company = formData.get("company")?.toString() || "";
  const phoneNumber = formData.get("phone-number")?.toString() || "";

  try {
    const { data, error } = await resend.emails.send({
      from: `${company}<${email}>`,
      to: [email],
      subject: `(${company || [firstName, lastName].join(" ")}) is contacting you for information, ${businessName}`,
      react: EmailTemplate({ firstName: firstName, lastName: lastName, sendEmail: sendEmail, message: message, company: company, phoneNumber: phoneNumber  }),
    });

    if (error) {
      console.log(error)
      return redirect("/contact?error=true")
    }

  } catch (error) {
    console.log(error)
    return redirect("/contact?error=true");
  }
}
