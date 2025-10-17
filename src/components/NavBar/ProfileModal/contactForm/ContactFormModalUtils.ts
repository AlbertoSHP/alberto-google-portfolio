import type { Namespace, TFunction } from "i18next";
import * as Yup from "yup";

export type ContactFormSchema = Yup.InferType<ReturnType<typeof contactFormSchema>>;

export const contactFormSchema = (
  t: TFunction<Namespace, undefined>,
) => {
  return Yup.object().shape({
    email: Yup.string().email(t("contactForm.validation.emailInvalid")).required(t("contactForm.validation.emailRequired")),
    message: Yup.string().required(t("contactForm.validation.messageRequired")),
  });
};

export const getInitialValues = () => {
    return {
        email: '',
        message: ''
    };
};