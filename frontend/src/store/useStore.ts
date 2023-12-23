import { create } from 'zustand';
import { IContactSlice, createContactSlice } from './slices/contactSlice';
import {
  ImageSliderSlice,
  createImageSliderSlice,
} from './slices/imageSliderSlice';
import { ILoginSlice, createLoginSlice } from './slices/loginSlice';

const useStore = create<IContactSlice & ImageSliderSlice & ILoginSlice>()(
  (...a) => ({
    ...createContactSlice(...a),
    ...createImageSliderSlice(...a),
    ...createLoginSlice(...a),
  })
);

export default useStore;
