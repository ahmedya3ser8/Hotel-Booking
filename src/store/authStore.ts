import { isAxiosError } from 'axios'; 
import { create } from 'zustand';

import { axiosInstance } from '@/lib/axios';
import toast from 'react-hot-toast';
import type { NavigateFunction } from 'react-router-dom';

export interface User {
  data: IUser;
  message: string;
  success: boolean;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  phone: string;
  profileImage: string | null;
  role: string;
  createdAt: string
  updatedAt: string
}

export interface ISignUp { 
  username: string; 
  email: string; 
  password: string; 
  phone: string; 
}

export interface ILogin { 
  email: string; 
  password: string; 
}

export interface IUpdateUser {
  formData: { 
    username: string; 
    email: string; 
    phone: string; 
  };
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUpdatePassword {
  formData: { 
    currentPassword: string; 
    newPassword: string; 
    confirmNewPassword: string;
  };
  setChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
}


interface AuthState {
  user: IUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  initialized: boolean;
  isUpdateProfile: boolean;

  singup: (formData: ISignUp, navigate: NavigateFunction) => Promise<void>;
  login: (formData: ILogin, navigate: NavigateFunction) => Promise<void>;
  logout: (navigate: NavigateFunction) => void;
  checkAuth: () => void;

  updateUser: ({ formData, setProfileModal }: IUpdateUser) =>  Promise<void>;
  updateProfile: (formData: FormData) =>  Promise<void>;
  updatePassword: ({ formData, setChangePasswordModal }: IUpdatePassword) =>  Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  isAuthenticated: false,
  initialized: false,
  isUpdateProfile: false,

  singup: async (formData, navigate) => {
    console.log('singup', formData);
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post<User>('/auth/signup', formData);
      console.log(data);
      toast.success(data.message);
      set({ user: data.data, isAuthenticated: true, loading: false });
      navigate('/login');
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
        console.log(err.response?.data.message);
      }
      set({ loading: false });
    }
  },

  login: async (formData, navigate) => {
    console.log('login', formData);
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post<User>('/auth/login', formData);
      console.log(data);
      toast.success(data.message);
      set({ user: data.data, isAuthenticated: true, loading: false });
      navigate('/');
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
        console.log(err.response?.data.message);
      }
      set({ loading: false });
    }
  },

  logout: async (navigate) => {
    console.log('logout');
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post<User>('/auth/logout');
      console.log(data);
      toast.success(data.message);
      set({ user: null, isAuthenticated: false, loading: false });
      navigate('/login');
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
        console.log(err.response?.data.message);
      }
      set({ loading: false });
    }
  },

  checkAuth: async () => {
    console.log('checkAuth');
    try {
      set({ loading: true });
      const { data } = await axiosInstance.get<User>('/users/getMe');
      set({ user: data.data, isAuthenticated: true, loading: false, initialized: true });
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
        console.log(err.response?.data.message);
      }
      set({ user: null, isAuthenticated: false, loading: false, initialized: true });
    }
  },

  updateUser: async ({ formData, setProfileModal }) => {
    console.log('formData', formData);
    try {
      set({ loading: true });
      const { data } = await axiosInstance.patch<User>('/users/updateMe', formData);
      console.log(data);
      toast.success(data.message);
      set({ user: data.data, loading: false });
      setProfileModal(false);
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
        console.log(err.response?.data.message);
      }
      set({ loading: false });
    }
  },

  updateProfile: async (formData) => {
    console.log('formData', formData);
    try {
      set({ isUpdateProfile: true });
      const { data } = await axiosInstance.patch<User>('/users/updateProfile', formData);
      console.log(data);
      toast.success(data.message);
      set({ user: data.data, isUpdateProfile: false });
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
        console.log(err.response?.data.message);
      }
      set({ isUpdateProfile: false });
    }
  },

  updatePassword: async ({ formData, setChangePasswordModal}) => {
    console.log('formData', formData);
    try {
      set({ loading: true });
      const { data } = await axiosInstance.patch<User>('/users/changeMyPassword', formData);
      console.log(data);
      toast.success(data.message);
      set({ user: data.data, loading: false });
      setChangePasswordModal(false);
    } catch (err) {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.errors[0].msg || err.response?.data.message);
        console.log(err.response?.data.errors[0].msg || err.response?.data.message);
      }
      set({ loading: false });
    }
  },
}));
