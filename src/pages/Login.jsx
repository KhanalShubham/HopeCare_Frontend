import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import child from "../assets/images/main.png"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Left side - Sign in form */}
      <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-16">
            <a href="/" className="flex items-center">
              <div className="relative w-12 h-12">
                <div className="absolute w-8 h-8 bg-[#4285f4] rounded-full left-0 top-0"></div>
                <div className="absolute w-8 h-8 bg-[#34a853] rounded-full right-0 bottom-0 opacity-80"></div>
              </div>
              <span className="text-3xl font-bold ml-2 text-[#111111]">HopeConnect</span>
            </a>
          </div>

          {/* Sign in form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-[#111111]">Log In</h1>
              <p className="mt-2 text-[#666666]">Log In for free to access to in any of our services</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-[#333333] mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 border border-[#a6a6a6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#559268]"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="block text-[#333333]">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="flex items-center text-[#333333]"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />} Hide
                  </button>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border border-[#a6a6a6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#559268]"
                />
                <p className="mt-1 text-sm text-[#666666]">
                  Use 8 or more characters with a mix of letters, numbers & symbols
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="w-4 h-4 border border-[#a6a6a6] rounded accent-[#559268]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-[#333333]">
                    Agree to our{" "}
                    <a href="/terms" className="text-[#333333] underline">
                      Terms of use
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-[#333333] underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              <div className="border border-[#a6a6a6] rounded-md p-4 flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="robot"
                    type="checkbox"
                    className="w-4 h-4 border border-[#a6a6a6] rounded accent-[#559268]"
                  />
                </div>
                <label htmlFor="robot" className="ml-3 text-sm text-[#333333]">
                  I&apos;m not a robot
                </label>
                <div className="ml-auto">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA"
                    width={40}
                    height={40}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#559268] text-white py-3 px-4 rounded-md hover:bg-[#4a8159] transition-colors"
              >
                Log In
              </button>

              <p className="text-center text-[#333333]">
                Don't  have an account?{" "}
                <a href="/login" className="text-[#559268]">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Green background with image */}
      <div className="hidden md:block md:flex-1 bg-[#559268] relative">
        <div className="absolute top-8 right-8">
          <a
            href="/signup"
            className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Sign Up
          </a>
        </div>
        <div>
        <div className="flex justify-center items-center h-full">
          <img src={child} alt="Child with toy" className="object-cover" />
        </div>
      </div>
      </div>
    </div>
  )
}
