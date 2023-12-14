import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { TfiAlignJustify } from 'react-icons/tfi';
import { IoConstruct } from 'react-icons/io5';

export type IconType =
  | 'FaFacebookF'
  | 'FaInstagram'
  | 'FaTwitter'
  | 'BsFillTelephoneFill'
  | 'IoMdMail'
  | 'TfiAlignJustify'
  | 'IoConstruct';

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
    case 'IoConstruct':
      return <IoConstruct />;
    default:
      return null;
  }
};
