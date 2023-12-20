import { StateCreator } from 'zustand';

export interface ImageSliderSlice {
  currentIndex: number;
  isChanging: boolean;
  setCurrentIndex: (index: number) => void;
  setIsChanging: (changing: boolean) => void;
}

export const createImageSliderSlice: StateCreator<ImageSliderSlice> = (
  set
) => ({
  currentIndex: 0,
  isChanging: false,
  setCurrentIndex: (index) => set(() => ({ currentIndex: index })),
  setIsChanging: (changing) => set(() => ({ isChanging: changing })),
});
