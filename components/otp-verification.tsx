"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function OTPVerification({ onNext }: { onNext: () => void; }) {
  const [otp, setOtp] = useState(["", "", "", ""])

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Move to next input if value is entered
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  return (
    <div className="bg-white text-[#003B2D] rounded-lg p-6 max-w-md mx-auto">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-xl font-bold">أدخل رمز التحقق</h2>
        <p className="text-gray-600">تم إرسال رمز التحقق إلى رقم الجوال المسجل</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center gap-4 dir-ltr">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-2xl"
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="link" className="text-blue-600">
            إعادة إرسال الرمز
          </Button>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">تأكيد</Button>
      </div>
    </div>
  )
}

