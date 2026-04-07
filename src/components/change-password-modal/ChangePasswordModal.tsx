import type { IUpdatePassword } from "@/store/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, X } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

interface IChangePasswordModal {
  setChangePasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
  updatePassword: ({ formData, setChangePasswordModal }: IUpdatePassword) => void;
  loading: boolean;
}

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current Password is required'),
  newPassword: z.string().min(1, 'New password is required').regex(/^[A-Z][a-z0-9@#$]{7,}$/, 'New Password must start with uppercase and be at least 8 characters'),
  confirmNewPassword: z.string().min(1, 'Confirm New password is required')
}).refine((input) => input.newPassword === input.confirmNewPassword, { path: ['confirmPassword'], message: 'newPassword and confirmPassword not match' });

type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

const ChangePasswordModal = ({ setChangePasswordModal, updatePassword, loading }: IChangePasswordModal) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordSchema>({
    mode: 'onTouched',
    resolver: zodResolver(changePasswordSchema)
  });

  const submitForm: SubmitHandler<ChangePasswordSchema> = (formData) => {
    console.log('data', formData);
    updatePassword({ formData, setChangePasswordModal });
  }
  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-black/70 z-100">
      <div className="bg-white w-md p-6 rounded-xl space-y-4">
        <button onClick={() => setChangePasswordModal(false)} className='block ml-auto cursor-pointer'> 
          <X size={20} className='text-[#252525]' />  
        </button>
        <form onSubmit={handleSubmit(submitForm)} className='flex flex-col gap-4'>
          <div className="input_field space-y-2">
            <label htmlFor="currentPassword" className={`block text-[#515151] font-medium ${errors.currentPassword ? 'text-red-500' : ''}`}> Current Password </label>
            <input type="password" id='currentPassword' {...register('currentPassword')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.currentPassword ? 'border-red-500' : ''}`} />
          </div>
          <div className="input_field space-y-2">
            <label htmlFor="newPassword" className={`block text-[#515151] font-medium ${errors.newPassword ? 'text-red-500' : ''}`}> New Password </label>
            <input type="password" id='newPassword' {...register('newPassword')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.newPassword ? 'border-red-500' : ''}`} />
          </div>
          <div className="input_field space-y-2">
            <label htmlFor="confirmNewPassword" className={`block text-[#515151] font-medium ${errors.confirmNewPassword ? 'text-red-500' : ''}`}> Confirm Password </label>
            <input type="password" id='confirmNewPassword' {...register('confirmNewPassword')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.confirmNewPassword ? 'border-red-500' : ''}`} />
          </div>
          <button type="submit" className='bg-black text-white rounded-sm p-2 cursor-pointer'>
            {loading ? <Loader className="animate-spin mx-auto" /> : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordModal;
