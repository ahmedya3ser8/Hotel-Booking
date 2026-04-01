import { useEffect } from "react";
import { X } from "lucide-react";

import registerImage from '@assets/register.png';
import type { AuthMode } from "@/utils/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface IAuthModal {
  mode: AuthMode;
  onClose: () => void;
  setMode: React.Dispatch<React.SetStateAction<AuthMode>>;
}

const registerSchema = z.object({
  username: z.string().min(5, 'username should be at least 5 characters'),
  email: z.string().min(1, 'email is required').email('Invalid email address'),
  password: z.string().min(1, 'password is required').regex(/^[A-Z][a-z0-9@#$]{7,}$/, 'Password must start with uppercase and be at least 8 characters'),
  phone: z.string().min(1, 'phone is required').regex(/^01[0125][0-9]{8}$/, 'Phone must start with 010, 011, 012, or 015 and be 11 digits')
});

const loginSchema = z.object({
  email: z.string().min(1, 'email is required').email('Invalid email address'),
  password: z.string().min(1, 'password is required')
});

type RegisterSchema = z.infer<typeof registerSchema>;
type LoginSchema = z.infer<typeof loginSchema>;
type FormValues = RegisterSchema | LoginSchema;

const AuthModal = ({ mode, onClose, setMode }: IAuthModal) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
    mode: 'onTouched',
    resolver: zodResolver(mode === 'register' ? registerSchema : loginSchema)
  });

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    if (mode === 'register') {
      console.log('register', data);
    } else if (mode === 'login') {
      console.log('login', data);
    }
  } 

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    }
  }, []);

  useEffect(() => {
    reset();
  }, [mode, reset]);

  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-black/70 z-100">
      <div className="flex bg-white w-xs sm:w-md md:w-xl lg:w-3xl xl:w-4xl rounded-xl">

        <div className="image hidden lg:block lg:w-1/2">
          <img src={registerImage} className='w-full h-full object-cover rounded-s-xl' alt="auth-image" />
        </div>

        <div className="col w-full lg:w-1/2 p-6 space-y-4">

          <button onClick={onClose} className='block ml-auto cursor-pointer'> 
            <X size={20} className='text-[#252525]' />  
          </button>

          <h2 className='text-2xl text-center text-[#252525] font-medium'>
            {mode === 'register' ? 'Register Your Hotel' : 'Login Your Hotel'}
          </h2>

          <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
            {mode === 'register' && (
              <div className="input_field space-y-2">
                <label htmlFor="username" className={`block text-[#515151] font-medium ${errors?.username ? 'text-red-500' : ''}`}> User Name </label>
                <input type="text" id='username' {...register('username')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.username ? 'border-red-500' : ''}`} />
              </div>
            )}
            <div className="input_field space-y-2">
              <label htmlFor="email" className={`block text-[#515151] font-medium ${errors.email ? 'text-red-500' : ''}`}> Email </label>
              <input type="email" id='email' {...register('email')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.email ? 'border-red-500' : ''}`} />
            </div>
            <div className="input_field space-y-2">
              <label htmlFor="password" className={`block text-[#515151] font-medium ${errors.password ? 'text-red-500' : ''}`}> Password </label>
              <input type="password" id='password' {...register('password')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.password ? 'border-red-500' : ''}`} />
            </div>
            {mode === 'register' && (
              <div className="input_field space-y-2">
                <label htmlFor="phone" className={`block text-[#515151] font-medium ${errors?.phone ? 'text-red-500' : ''}`}> Phone </label>
                <input type="tel" id='phone' {...register('phone')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.phone ? 'border-red-500' : ''}`} />
              </div>  
            )}
            <button type="submit" className='bg-black text-white rounded-sm p-2 cursor-pointer'>
              {mode === 'register' ? 'Register' : 'Login'}
            </button>
          </form>

          <p className='text-[#515151] text-center'>
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')} 
              className='text-[#252525] cursor-pointer font-medium transition duration-300 hover:underline'
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>

        </div>

      </div>
    </div>
  )
}

export default AuthModal;
