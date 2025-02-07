"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function InsuranceStepTwo({onNext}:any) {
  return (
    <div className="  bg-[#003B2D] text-[#00F0AC] rounded-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-green-100 ">قيمة التأمين وتاريخ بداية التأمين</h2>
      </div>

      <div className="space-y-6">

        <div className="relative">
          <label className="block text-sm text-gray-600 mb-1">تاريخ بداية التأمين</label>
          <div className="relative">
            <Input type="text" className="pr-10 border-gray-300" placeholder="اختر التاريخ" />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            <span className="text-sm">مستندات</span>
          </Button>
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            <span className="text-sm">اضافة سائق</span>
          </Button>
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            <span className="text-sm">تفاصيل التأمين</span>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button  variant="outline" className="border-gray-300">
            رجوع
          </Button>
          <Button onClick={onNext} className="bg-[#00F0AC]  hover:bg-[#00F0AD] text-white">اطلب التأمين</Button>
        </div>

        <div className="border-t pt-6 mt-6 text-center">
        <div className="text-[#00F0AC] text-4xl font-bold">tree</div>
         
        </div>
      </div>
    </div>
  )
}

