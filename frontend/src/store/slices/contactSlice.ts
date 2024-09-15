import { Email } from 'src/services/queries';
import { StateCreator } from 'zustand';

export interface IContactSlice {
  emailData: Email;
  setEmailData: (emailData: Email) => void;
  contactInfo: {
    phone: string;
    address: string;
    email: string;
  };
  captchaToken: string;
  setCaptchaToken: (captchaToken: string) => void;
  resetEmailData: () => void;
}

export const createContactSlice: StateCreator<IContactSlice> = (set) => ({
  emailData: { email: '', subject: '', message: '' },
  setEmailData: (emailData) => set({ emailData }),
  contactInfo: {
    phone: '+90 533 389 59 72',
    address: 'Beyazevler Mahallesi ,515.Sokak, No:36/2 Gaziemir - İZMİR',
    email: 'toravincinsaat@gmail.com',
  },
  captchaToken: '',
  setCaptchaToken: (captchaToken) => set({ captchaToken }),
  resetEmailData: () =>
    set({
      emailData: { email: '', subject: '', message: '' },
      captchaToken: '',
    }),
});
