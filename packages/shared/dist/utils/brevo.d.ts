import { NewContact, MailContact, EmailToContact } from '../types/BrevoProps';
export declare const createContact: (submittedData: NewContact) => Promise<Response>;
export declare const sendEmail: (formData: MailContact, recaptchaToken?: string | null) => Promise<Response>;
export declare const sendEmailToContact: (formData: EmailToContact, recaptchaToken?: string | null) => Promise<Response>;
//# sourceMappingURL=brevo.d.ts.map