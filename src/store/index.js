import create from 'zustand';

export const useStore = create((set) => ({
    user: false,
    setUser: (user) => set({ user: user }),
}));
