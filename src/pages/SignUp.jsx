import React from 'react'
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"


export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [marketingEmails, setMarketingEmails] = useState(true)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-8 md:p-12 lg:p-16">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-[#333333] text-3xl font-medium">Welcome to Hope Connect</h1>
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-[#559268]"></div>
              <div className="w-6 h-6 rounded-full bg-[#4262e2]"></div>
            </div>
          </div>

          <p className="text-[#333333] mb-8">
            Already have an account?{" "}
            <a href="/login" className="text-[#333333] font-medium underline">
              Log in
            </a>
          </p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#333333] font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-[#666666] rounded-md focus:outline-none focus:ring-1 focus:ring-[#559268]"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="username" className="block text-[#333333] font-medium">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-4 py-3 border border-[#666666] rounded-md focus:outline-none focus:ring-1 focus:ring-[#559268]"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="block text-[#333333] font-medium">
                  Password
                </label>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-[#666666] flex items-center gap-1"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  Hide
                </button>
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border border-[#666666] rounded-md focus:outline-none focus:ring-1 focus:ring-[#559268]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#333333]">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#333333]"></div>
                <span>Use 8 or more characters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#333333]"></div>
                <span>One Uppercase character</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#333333]"></div>
                <span>One lowercase character</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#333333]"></div>
                <span>One special character</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#333333]"></div>
                <span>One number</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="marketing"
                checked={marketingEmails}
                onChange={(e) => setMarketingEmails(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-[#333333] focus:ring-[#559268]"
              />
              <label htmlFor="marketing" className="text-[#333333]">
                I want to receive emails about the product, feature updates, events, and marketing promotions.
              </label>
            </div>

            <p className="text-[#333333]">
              By creating an account, you agree to the{" "}
              <a href="/terms" className="text-[#333333] font-medium underline">
                Terms of use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-[#333333] font-medium underline">
                Privacy Policy.
              </a>
            </p>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#559268] text-white rounded-full font-medium hover:bg-[#4a8159] transition-colors"
            >
              Create an account
            </button>
          </form>

          <p className="text-[#333333] mt-8">
            Already have an account?{" "}
            <a href="/login" className="text-[#333333] font-medium underline">
              Log in
            </a>
          </p>
        </div>
      </div>
      <div className="hidden md:block bg-[#559268] flex-1"></div>
    </div>
  )
}
