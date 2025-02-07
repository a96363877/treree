"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { StepIndicator } from "./step-indicator"

export function PaymentMethods({ onNext }: { onNext: () => void }) {
  const steps = [
    { number: 1, label: "البيانات الأساسية" },
    { number: 2, label: "بيانات التأمين" },
    { number: 3, label: "قائمة الأسعار" },
    { number: 4, label: "الملخص والدفع" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator currentStep={4} steps={steps} />

      <div className="bg-white text-[#003B2D] rounded-lg p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">تفاصيل الوثيقة</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">نوع التأمين</span>
              <p>ضد الغير</p>
            </div>
            <div>
              <span className="text-gray-600">شركة التأمين</span>
              <p>ولاء للتأمين التعاوني</p>
            </div>
            <div>
              <span className="text-gray-600">تاريخ بدء الوثيقة</span>
              <p>2025-01-28</p>
            </div>
            <div>
              <span className="text-gray-600">الرقم المرجعي للتسعيرة</span>
              <p>1643877167</p>
            </div>
            <div>
              <span className="text-gray-600">تاريخ انتهاء الوثيقة</span>
              <p>2026-02-07</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4">التفاصيل</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>المجموع الجزئي</span>
              <span>521 ر.س</span>
            </div>
            <div className="flex justify-between">
              <span>شامل ضريبة القيمة المضافة (15.00%)</span>
              <span>0.00 ر.س</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>المبلغ الإجمالي</span>
              <span className="text-[#00693E]">468.9 ر.س</span>
            </div>
          </div>
        </div>

        <div >
          <h3 className="text-lg font-bold mb-4">اختر طريقة الدفع</h3>
          <RadioGroup defaultValue="apple-pay" className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center" dir="rtl">
                <RadioGroupItem value="apple-pay" id="apple-pay" />
                <Label htmlFor="apple-pay" className="mr-2">
                  <Image
                    src="/appay.svg"
                    alt="Apple Pay"
                    width={64}
                    height={32}
                    className="h-8"
                  />
                </Label>
              </div>
            </div>

            <div className="border rounded-lg p-4"  dir="rtl">
              <div className="flex items-center">
                <RadioGroupItem value="mada" id="mada" />
                <Label htmlFor="mada" className="mr-2">
                  <div className="flex gap-2">
                    <Image
                      src="/mada.svg"
                      alt="Mada"
                      width={64}
                      height={32}
                      className="h-8"
                    />
                 
                  </div>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

