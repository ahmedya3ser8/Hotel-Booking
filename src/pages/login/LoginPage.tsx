import { useAuthStore } from "@/store/authStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, 'email is required').email('Invalid email address'),
  password: z.string().min(1, 'password is required')
});

type LoginSchema = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    mode: 'onTouched',
    resolver: zodResolver(loginSchema)
  });

  const submitHandler: SubmitHandler<LoginSchema> = (data) => {
    login(data, navigate);
  }
  return (
    <div className="pt-32 bg-[#E4EEF84F] pb-20">
      <div className="container">

        <div className="space-y-4 w-full lg:w-1/2 lg:mx-auto">

          <h2 className='text-2xl text-center text-[#252525] font-medium'>
            Login Your Account
          </h2>

          <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-4'>
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

            <button type="submit" className='bg-black text-white rounded-sm p-2 cursor-pointer'>
              {loading ? <Loader className="animate-spin mx-auto" /> : 'Login'}
            </button>
          </form>

          <p className='text-[#515151] text-center'>
            Don't have an account?
            <Link to='/register' className='text-[#252525] cursor-pointer font-medium transition duration-300 hover:underline'>
              Sign up
            </Link>
          </p>

        </div>

      </div>
    </div>
  )
}

export default LoginPage;
