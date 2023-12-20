import { create } from 'zustand';
import { IContactSlice, createContactSlice } from './slices/contactSlice';
import {
  ImageSliderSlice,
  createImageSliderSlice,
} from './slices/imageSliderSlice';

const useStore = create<IContactSlice & ImageSliderSlice>()((...a) => ({
  ...createContactSlice(...a),
  ...createImageSliderSlice(...a),
}));

export default useStore;
