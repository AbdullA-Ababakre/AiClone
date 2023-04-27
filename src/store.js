import { create } from "zustand";

export const useStore = create((set) => ({
    isLoggedIn: false,
    logIn: () => set((state) => ({ isLoggedIn: state.isLoggedIn = true })),
    notLogIn: () => set((state) => ({ isLoggedIn: state.isLoggedIn = false })),
}));