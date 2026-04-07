import { useAuthStore } from "@/store/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const registerSchema = z.object({
  username: z.string().min(5, 'username should be at least 5 characters'),
  email: z.string().min(1, 'email is required').email('Invalid email address'),
  password: z.string().min(1, 'password is required').regex(/^[A-Z][a-z0-9@#$]{7,}$/, 'Password must start with uppercase and be at least 8 characters'),
  phone: z.string().min(1, 'phone is required').regex(/^01[0125][0-9]{8}$/, 'Phone must start with 010, 011, 012, or 015 and be 11 digits')
});

type RegisterSchema = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const navigate = useNavigate();
  const { singup, loading } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
    mode: 'onTouched',
    resolver: zodResolver(registerSchema)
  });

  const submitHandler: SubmitHandler<RegisterSchema> = (data) => {
    singup(data, navigate);
  }
  return (
    <div className="pt-32 bg-[#E4EEF84F] pb-20">
      <div className="container">

        <div className="space-y-4 w-full lg:w-1/2 lg:mx-auto">

          <h2 className='text-2xl text-center text-[#252525] font-medium'>
            Register New Account
          </h2>

          <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
            <div className="input_field space-y-2">
              <label htmlFor="username" className={`block text-[#515151] font-medium ${errors.username ? 'text-red-500' : ''}`}> User Name </label>
              <input type="text" id='username' {...register('username')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.username ? 'border-red-500' : ''}`} />
            </div>

            <div className="input_field space-y-2">
              <label htmlFor="email" className={`block text-[#515151] font-medium ${errors.email ? 'text-red-500' : ''}`}> Email </label>
              <input type="email" id='email' {...register('email')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.email ? 'border-red-500' : ''}`} />
            </div>

            <div className="input_field space-y-2">
              <label htmlFor="password" className={`block text-[#515151] font-medium ${errors.password ? 'text-red-500' : ''}`}> Password </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id='password' {...register('password')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.password ? 'border-red-500' : ''}`} />
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="input_field space-y-2">
              <label htmlFor="phone" className={`block text-[#515151] font-medium ${errors.phone ? 'text-red-500' : ''}`}> Phone </label>
              <input type="tel" id='phone' {...register('phone')} className={`w-full p-2 border border-[#D9D9D9] outline-none rounded-sm ${errors.phone ? 'border-red-500' : ''}`} />
            </div>  

            <button type="submit" className='bg-black text-white rounded-sm p-2 cursor-pointer'>
              {loading ? <Loader className="animate-spin mx-auto" /> : 'Register'}
            </button>
          </form>

          <p className='text-[#515151] text-center'>
            Already have an account?
            <Link to='/login' className='text-[#252525] cursor-pointer font-medium transition duration-300 hover:underline'>
              Sign in
            </Link>
          </p>

        </div>

      </div>
    </div>
  )
}

export default RegisterPage;
