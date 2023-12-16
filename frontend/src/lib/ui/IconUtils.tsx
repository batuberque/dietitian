import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { TfiAlignJustify } from 'react-icons/tfi';
import { IoConstruct, IoCaretBackSharp, IoCaretForward } from 'react-icons/io5';
import { FaAddressCard } from 'react-icons/fa6';
import { ReactElement } from 'react';

export type IconType =
  | 'FaFacebookF'
  | 'FaInstagram'
  | 'FaTwitter'
  | 'BsFillTelephoneFill'
  | 'IoMdMail'
  | 'TfiAlignJustify'
  | 'IoConstruct'
  | 'IoCaretBackSharp'
  | 'IoCaretForward'
  | 'FaAddressCard';

export interface IconProps {
  iconType: IconType;
  sizeClass?: string;
}

export const renderIcon = ({
  iconType,
  sizeClass = 'text-base',
}: IconProps): ReactElement | null => {
  switch (iconType) {
    case 'FaFacebookF':
      return <FaFacebookF className={sizeClass} />;
    case 'FaInstagram':
      return <FaInstagram className={sizeClass} />;
    case 'FaTwitter':
      return <FaTwitter className={sizeClass} />;
    case 'BsFillTelephoneFill':
      return <BsFillTelephoneFill className={sizeClass} />;
    case 'IoMdMail':
      return <IoMdMail className={sizeClass} />;
    case 'TfiAlignJustify':
      return <TfiAlignJustify className={sizeClass} />;
    case 'IoConstruct':
      return <IoConstruct className={sizeClass} />;
    case 'IoCaretBackSharp':
      return <IoCaretBackSharp className={sizeClass} />;
    case 'IoCaretForward':
      return <IoCaretForward className={sizeClass} />;
    case 'FaAddressCard':
      return <FaAddressCard className={sizeClass} />;
    default:
      return null;
  }
};
