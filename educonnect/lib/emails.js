import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

/*
 [
    {
        to: "info@gmail.com",
        subject: "It is great",
        message: "ndkkdjfjd djfkldjfjdkl"
    },
    {
        to: "info@gmail.com",
        subject: "It is great",
        message: "ndkkdjfjd djfkldjfjdkl"
    }
 ]
*/

export const sendEmails = async (emailInfo) => {
    if (!emailInfo) return null;

    const response = await Promise.allSettled(
        emailInfo.map(async (data) => {
          if (data.to && data.message && data.subject) {
            const to = data.to;
            const subject = data.subject;
            const message = data.message;

            const sentInfo = await resend.emails.send({
              from: "noreply@noreply.tapascript.io",
              to: to,
              subject: subject,
              react: EmailTemplate({ message }),
            });
            return sentInfo;
          } else {
            new Promise((reject) => {
              return reject(
                new Error(`Couldn't send email, please check the ${JSON.stringify(data)}.`)
              );
            });
          }
        })
      );
    return response;
};
