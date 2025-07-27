import { NewContact, MailContact, EmailToContact } from '../types/BrevoProps';
export declare const createContact: (submittedData: NewContact) => Promise<Response>;
export declare const sendEmail: (formData: MailContact) => Promise<Response>;
export declare const sendEmailToContact: (formData: EmailToContact) => Promise<Response>;
//# sourceMappingURL=brevo.d.ts.map