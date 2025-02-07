"use client"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function InsuranceStepFive() {
  return (
    <div className="bg-white text-[#003B2D] rounded-lg p-6 max-w-md mx-auto">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-xl font-bold">تفاصيل الدفع</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>القسط الأساسي</span>
            <span>1,078.26 ريال</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>خصم عبر الإنترنت</span>
            <span className="text-green-500">92.04 ريال</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>خصم عدم وجود مطالبات</span>
            <span className="text-green-500">107.83 ريال</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>ضريبة القيمة المضافة</span>
            <span>126.01 ريال</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">المجموع</span>
            <span className="text-xl font-bold">1,004.4 ريال</span>
          </div>
        </div>

        <RadioGroup defaultValue="apple-pay" className="space-y-4">
          <div className="flex items-center space-x-2 border rounded-lg p-4">
            <RadioGroupItem value="apple-pay" id="apple-pay" />
            <Label htmlFor="apple-pay">Apple Pay</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-lg p-4">
            <RadioGroupItem value="mada" id="mada" />
            <Label htmlFor="mada">مدى</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-lg p-4">
            <RadioGroupItem value="credit" id="credit" />
            <Label htmlFor="credit">سداد</Label>
          </div>
        </RadioGroup>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">إتمام الدفع</Button>
      </div>
    </div>
  )
}

