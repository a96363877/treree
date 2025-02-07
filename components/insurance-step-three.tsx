"use client"

import { Button } from "@/components/ui/button"
import { Check, Car } from "lucide-react"

export function InsuranceStepThree({onNext}:any) {
  return (
    <div className=" rounded-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <span> نوع التأمين</span>
          <Car className="w-6 h-6" />
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <Button className="flex-1 bg-green-600 text-white hover:bg-blue-700">ضد الغير</Button>
          <Button className="flex-1" variant="outline">
            شامل
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">مزايا إضافية</h3>
          <div className="space-y-3">
            {[
              "تغطية المسؤولية المدنية تجاه الغير",
              "الحوادث الشخصية للسائق والركاب",
              "المساعدة على الطريق",
              "تغطية الكوارث الطبيعية",
              "خدمة المساعدة على الطريق",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center border-t pt-4">
          <div className="text-2xl font-bold">2000 ريال</div>
          <p className="text-sm text-gray-600">السعر شامل الضريبة</p>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1">
            رجوع
          </Button>
          <Button onClick={onNext}  className="flex-1  bg-green-500 text-white "onClick={onNext}>متابعة</Button>
        </div> 
      </div>
    </div>
  )
}

