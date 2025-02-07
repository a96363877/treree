"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { StepIndicator } from "./step-indicator"
import { Calendar } from "lucide-react"

export function InsuranceStepTwo({ onNext }: { onNext: () => void }) {
  const steps = [
    { number: 1, label: "البيانات الأساسية" },
    { number: 2, label: "بيانات التأمين" },
    { number: 3, label: "قائمة الأسعار" },
    { number: 4, label: "الملخص والدفع" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator currentStep={2} steps={steps} />

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault()
          onNext()
        }}
      >
        <div className="space-y-4">
          <div>
            <Label htmlFor="start-date">تاريخ بدأ الوثيقة</Label>
            <div className="relative">
              <Input id="start-date" type="text" placeholder="mm/dd/yyyy" className="pl-10" />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <Label htmlFor="purpose">الغرض من إستخدام السيارة</Label>
            <Select>
              <option value="">إختر</option>
              <option value="personal">شخصي</option>
              <option value="commercial">تجاري</option>
            </Select>
          </div>

          <div>
            <Label htmlFor="car-type">نوع السيارة</Label>
            <Input id="car-type" placeholder="اكتب نوع السيارة" />
          </div>

          <div>
            <Label htmlFor="car-value">القيمة التقديرية للسيارة</Label>
            <Input id="car-value" placeholder="اكتب القيمة التقديرية للمركبة" />
          </div>

          <div>
            <Label htmlFor="manufacture-year">سنة الصنع</Label>
            <Select id="manufacture-year">
              <option value="">إختر</option>
              {Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label>مكان الإصلاح</Label>
            <RadioGroup defaultValue="workshop" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="workshop" id="workshop" />
                <Label htmlFor="workshop">الورشة</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="agency" id="agency" />
                <Label htmlFor="agency">الوكالة</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#00693E] text-white hover:bg-[#005432]">
          التالي
        </Button>
      </form>
    </div>
  )
}

