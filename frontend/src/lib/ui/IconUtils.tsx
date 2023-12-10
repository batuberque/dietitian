import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export type IconType =
  | 'FaFacebookF'
  | 'FaInstagram'
  | 'FaTwitter'
  | 'BsFillTelephoneFill'
  | 'IoMdMail';

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
    default:
      return null;
  }
};
