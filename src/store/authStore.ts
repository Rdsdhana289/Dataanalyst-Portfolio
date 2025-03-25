import { create } from 'zustand';
import { AuthState } from '../types';

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: (username: string, password: string) => {
    if (username === 'Dhanasekar' && password === 'Dhana@123') {
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },
  logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;