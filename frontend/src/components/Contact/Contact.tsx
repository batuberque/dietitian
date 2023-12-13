import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Email, sendEmail } from '../../services/queries';
import translation from '../transition';

const ContactUs: React.FC = () => {
  const [emailData, setEmailData] = useState<Email>({
    email: '',
    subject: '',
    message: '',
  });
  const { mutate: sendEmailMutation } = useMutation<string, Error, Email>(
    sendEmail
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmailMutation(emailData, {
      onSuccess: () => {
        alert('E-mail başarılı bir şekilde gönderildi.');
      },
    });
    console.log('eeeee', emailData);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-20 space-y-4"
      >
        <input
          type="email"
          name="email"
          value={emailData.email}
          onChange={handleChange}
          placeholder="Email'inizi Giriniz"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="subject"
          value={emailData.subject}
          onChange={handleChange}
          placeholder="Konu Başlığı"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="message"
          value={emailData.message}
          onChange={handleChange}
          placeholder="Mesaj Yazınız (Sağ alttan mesaj boyutunuzu büyültebilirsiniz)"
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          E-POSTA GÖNDER
        </button>
      </form>
    </>
  );
};

export default translation(ContactUs);
