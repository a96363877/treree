"use client"

import { Button } from "@/components/ui/button"
import { Car } from "lucide-react"

export function InsuranceStepFour({ onNext }: { onNext: () => void }) {
  return (
    <div className="bg-white text-[#003B2D] rounded-lg p-6 max-w-md mx-auto">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-xl font-bold text-blue-600">الدفع</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Car className="w-6 h-6" />
              <span>مازدا - 2024</span>
            </div>
            <span className="text-gray-600">الرقم التسلسلي/الجمركي</span>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">تفاصيل التأمين كاملة</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600">الطرف الثالث</p>
                <p>رقم الهوية</p>
              </div>
              <div>
                <p className="text-gray-600">تفاصيل المركبة</p>
                <p>الجنسية السعودية</p>
              </div>
            </div>
          </div>
        </div>

        <Button onClick={onNext} className="w-full bg-blue-600 hover:bg-blue-700 text-white">إتمام عملية الدفع</Button>
      </div>
    </div>
  )
}

