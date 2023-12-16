import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Email, sendEmail } from '../../services/queries';
import translation from '../transition';
import emailValidationSchema from '../../lib/types/zod';
import { z } from 'zod';
import Modal from '../../lib/ui/modal';

const ContactUs: React.FC = () => {
  const [emailData, setEmailData] = useState<Email>({
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [showModal, setShowModal] = useState(false);

  const { mutate: sendEmailMutation } = useMutation<string, Error, Email>(
    sendEmail
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      emailValidationSchema.parse(emailData);
      sendEmailMutation(emailData, {
        onSuccess: () => {
          setShowModal(true);
        },
      });
      setFormErrors([]);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors(error.issues);
      }
    }
  };

  const findError = (fieldName: string) => {
    return formErrors.find((error) => error.path[0] === fieldName)?.message;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });

    if (formErrors.length > 0) {
      setFormErrors(
        formErrors.filter((error) => error.path[0] !== e.target.name)
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-20 space-y-4 px-4 md:px-6"
      >
        <h4 className="text-center text-2xl font-bold text-gray-700 mb-1 shadow-sm font-serif">
          İLETİŞİM
        </h4>
        <input
          type="email"
          name="email"
          value={emailData.email}
          onChange={handleChange}
          placeholder="Email'inizi Giriniz"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {findError('email') && (
          <div className="error-message">{findError('email')}</div>
        )}{' '}
        <input
          type="text"
          name="subject"
          value={emailData.subject}
          onChange={handleChange}
          placeholder="Konu Başlığı"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {findError('subject') && (
          <div className="error-message">{findError('subject')}</div>
        )}{' '}
        <textarea
          name="message"
          value={emailData.message}
          onChange={handleChange}
          placeholder="Mesaj Yazınız (Sağ alttan mesaj boyutunuzu büyültebilirsiniz)"
          className="w-full p-2 border border-gray-300 rounded-md"
        ></textarea>
        {findError('message') && (
          <div className="error-message">{findError('message')}</div>
        )}{' '}
        <button
          type="submit"
          className="w-full p-2 bg-gray-500 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          E-POSTA GÖNDER
        </button>
      </form>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>E-mail başarılı bir şekilde gönderildi.</p>
      </Modal>
    </>
  );
};

export default translation(ContactUs);
