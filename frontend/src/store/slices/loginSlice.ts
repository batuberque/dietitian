import { StateCreator } from 'zustand';

export interface ILoginSlice {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export const createLoginSlice: StateCreator<ILoginSlice> = (set) => ({
  username: '',
  password: '',
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
});
