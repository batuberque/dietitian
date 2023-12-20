import React, { useCallback, useEffect, useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import translation from '../transition';
import useStore from '../../store/useStore';
import { Email, sendEmail } from '../../services/queries';
import emailValidationSchema from '../../lib/validation/zod';
import { renderIcon } from '../../lib/ui/IconUtils';
import Modal from '../../lib/ui/modal';

const ContactUs: React.FC = () => {
  const { emailData, setEmailData, contactInfo } = useStore();

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const [showModal, setShowModal] = useState(false);

  const { mutate } = useMutation<string, Error, Email>(sendEmail);

  useEffect(() => {
    return () => {
      useStore.getState().resetEmailData();
    };
  }, []);

  const handleSubmitCallBack = useCallback(
    (e: React.FormEvent) => {
      console.log('data', emailData);
      e.preventDefault();
      try {
        emailValidationSchema.parse(emailData);
        mutate(emailData, {
          onSuccess: () => {
            setShowModal(true);
          },
          onError: () => {
            alert('E-mail gönderilirken bir hata oluştu!');
          },
        });
        setFormErrors([]);
      } catch (error) {
        if (error instanceof z.ZodError) {
          setFormErrors(error.issues);
        }
      }
    },
    [emailData, mutate]
  );

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
        onSubmit={handleSubmitCallBack}
        className="max-w-md mx-auto mt-20 space-y-4 px-4 md:px-6"
      >
        <h4 className="text-center text-2xl font-bold text-gray-700 mb-1 shadow-sm font-serif">
          BİZE ULAŞIN
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

      <div className="max-w-md mx-auto mt-10 space-y-4 px-4 md:px-6">
        <h4 className="text-center text-2xl font-bold text-gray-700 mb-1 shadow-sm font-serif">
          İLETİŞİM BİLGİLERİ
        </h4>
        <div className="bg-white p-4 border border-gray-300 rounded-md shadow-sm space-y-2">
          <a
            href={`tel:${contactInfo.phone}`}
            className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center"
          >
            {renderIcon({
              iconType: 'BsFillTelephoneFill',
              sizeClass: 'text-lg',
            })}
            <span className="ml-2">{contactInfo.phone}</span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              contactInfo.address
            )}`}
            className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderIcon({ iconType: 'FaAddressCard', sizeClass: 'text-3xl' })}
            <span className="ml-2">{contactInfo.address}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-gray-600 hover:text-gray-800 transition duration-300 flex items-center"
          >
            {renderIcon({ iconType: 'IoMdMail', sizeClass: 'text-2xl' })}
            <span className="ml-2">{contactInfo.email}</span>
          </a>
        </div>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>E-mail başarılı bir şekilde gönderildi.</p>
      </Modal>
    </>
  );
};

export default translation(ContactUs);
