"use client"

import { Button } from "@/components/ui/button"
import { StepIndicator } from "./step-indicator"
import { InsuranceCompanyCard } from "./insurance-company-card"

export function InsuranceStepThree({ onNext }: { onNext: () => void }) {
  const steps = [
    { number: 1, label: "البيانات الأساسية" },
    { number: 2, label: "بيانات التأمين" },
    { number: 3, label: "قائمة الأسعار" },
    { number: 4, label: "الملخص والدفع" },
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator currentStep={3} steps={steps} />

      <div className="space-y-4">
        <div className="flex gap-2 mb-6">
          <Button variant="outline" className="flex-1 bg-[#00693E] text-white hover:bg-[#005432]">
            ضد الغير
          </Button>
          <Button variant="outline" className="flex-1 border-[#00693E] text-[#00693E]">
            شامل
          </Button>
        </div>

        <InsuranceCompanyCard
        onNext={onNext}
          name="Walaa"
          logo="/motor_bg_ar.png"
          rating={5}
          type="ضد الغير"
          benefits={[
            "تغطية شاملة حتى 10,000 ريال سعودي",
            "الحوادث الشخصية للسائق فقط",
            "الحوادث الشخصية للسائق والركاب",
          ]}
          price={521}
        />

        <InsuranceCompanyCard
        onNext={onNext}
          name="Tawuniya"
          logo="/motor_bg_ar.png"
          rating={4}
          type="ضد الغير"
          benefits={[
            "تغطية شاملة حتى 10,000 ريال سعودي",
            "الحوادث الشخصية للسائق فقط",
            "الحوادث الشخصية للسائق والركاب",
          ]}
          price={670}
        />
      </div>
    </div>
  )
}

