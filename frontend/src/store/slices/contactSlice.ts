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
  resetEmailData: () =>
    set({ emailData: { email: '', subject: '', message: '' } }),
});
