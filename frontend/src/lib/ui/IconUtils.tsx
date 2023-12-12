import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { TfiAlignJustify } from 'react-icons/tfi';

export type IconType =
  | 'FaFacebookF'
  | 'FaInstagram'
  | 'FaTwitter'
  | 'BsFillTelephoneFill'
  | 'IoMdMail'
  | 'TfiAlignJustify';

export const renderIcon = (iconType: IconType) => {
  switch (iconType) {
    case 'FaFacebookF':
      return <FaFacebookF />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaTwitter':
      return <FaTwitter />;
    case 'BsFillTelephoneFill':
      return <BsFillTelephoneFill />;
    case 'IoMdMail':
      return <IoMdMail />;
    case 'TfiAlignJustify':
      return <TfiAlignJustify />;
    default:
      return null;
  }
};
