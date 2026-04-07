import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, X } from "lucide-react";
import { z } from "zod";

import avatarImage from '@/assets/avatar.jpg';
import type { IUpdateUser, IUser } from "@/store/authStore";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

interface IProfileModal {
  setProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser,
  updateUser: ({ formData, setProfileModal }: IUpdateUser) => void;
  updateProfile: (formData: FormData) => void;
  loading: boolean;
  isUpdateProfile: boolean;
}

const profileSchema = z.object({
  username: z.string().min(1, 'username is required'),
  email: z.string().min(1, 'email is required'),
  phone: z.string().min(1, 'phone is required'),
});

type ProfileSchema = z.infer<typeof profileSchema>;

const ProfileModal = ({ setProfileModal, user, updateUser, loading, updateProfile, isUpdateProfile }: IProfileModal) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProfileSchema>({
    mode: 'onTouched',
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: user.username,
      email: user.email,
      phone: user.phone
    }
  });

  useEffect(() => {
    reset({
      username: user.username,
      email: user.email,
      phone: user.phone,
    });
  }, [user, reset]);

  const submitForm: SubmitHandler<ProfileSchema> = (formData) => {
    console.log('data', formData);
    updateUser({ formData, setProfileModal });
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error("Only image files are allowed");
      return;
    }

    const preview = URL.createObjectURL(file);
    setSelectedImg(preview);

    const formData = new FormData();
    formData.append("profileImage", file);

    updateProfile(formData);
  }

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-black/70 z-100">
      <div className="bg-white w-md p-6 rounded-xl space-y-4">
        <button onClick={() => setProfileModal(false)} className='block ml-auto cursor-pointer'> 
          <X size={20} className='text-[#252525]' />  
        </button>
        <div onClick={() => inputRef.current?.click()} className="size-20 bg-[#A1AEBF] overflow-hidden rounded-full mx-auto cursor-pointer flex justify-center items-center">
          <input onChange={handleImageUpload} ref={inputRef} type="file" accept="image/*" className="hidden" />
          {isUpdateProfile ? (
            <Loader className="animate-spin" />
          ) : (
            <img src={selectedImg || user.profileImage || avatarImage} className='w-full' alt="profile-image" />
          )}
        </div>
        <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-4'>
          <div className="input_field space-y-2">
            <label htmlFor="username" className={`block text-[#515151] font-medium ${errors.username ? 'text-red-500' : ''}`}> UserName </label>
            <input type="text" id='username' {...register('username')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.username ? 'border-red-500' : ''}`} />
          </div>
          <div className="input_field space-y-2">
            <label htmlFor="email" className={`block text-[#515151] font-medium ${errors.email ? 'text-red-500' : ''}`}> Email </label>
            <input type="email" id='email' {...register('email')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.email ? 'border-red-500' : ''}`} />
          </div>
          <div className="input_field space-y-2">
            <label htmlFor="phone" className={`block text-[#515151] font-medium ${errors.phone ? 'text-red-500' : ''}`}> Phone </label>
            <input type="tel" id='phone' {...register('phone')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.phone ? 'border-red-500' : ''}`} />
          </div>
          <button type="submit" className='bg-black text-white rounded-sm p-2 cursor-pointer'>
            {loading ? <Loader className="animate-spin mx-auto" /> : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProfileModal;
