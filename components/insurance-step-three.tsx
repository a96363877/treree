"use client"

import { Button } from "@/components/ui/button"
import { StepIndicator } from "./step-indicator"
import { InsuranceCompanyCard } from "./insurance-company-card"
import { useState } from "react"
const insuranceCompanies = [
  {id:1,
    name: "التعاونية للتأمين",
    logo: "/tawni.webp",
    rating: 5,
    type: "شامل",
    price: 6000,
    benefits: [
      "تغطية شاملة حتى 100,000 ريال سعودي",
      "الحوادث الشخصية للسائق والركاب",
      "تغطية ضد الحريق والسرقة"
    ]
  },
  {id:2,
    name: "العربية للتأمين التعاوني",
    logo: "/arabi.svg",
    rating: 4,
    type: "ضد الغير",
    price: 750,
    benefits: [
      "تغطية ضد أضرار الطرف الثالث",
      "الحوادث الشخصية للسائق فقط",
      "دعم قانوني في الحوادث"
    ]
  },
  {
    id:3,
    name: "ميدغلف للتأمين",
    logo: "/Medgulf.svg",
    rating: 4,
    type: "شامل",
    price: 5500,
    benefits: [
      "تغطية شاملة حتى 80,000 ريال سعودي",
      "الحوادث الشخصية للسائق والركاب",
      "تغطية الحريق والسرقة"
    ]
  },
  {
    id:4,
    name: "شركة أسيج للتأمين التعاوني",
    logo: "/Acig.svg",
    rating: 3,
    type: "ضد الغير",
    price: 680,
    benefits: [
      "تغطية ضد أضرار الطرف الثالث",
      "تغطية الحوادث الشخصية للسائق",
      "دعم قانوني للحوادث"
    ]
  },
  {
    id:5,
    name: "شركة سلامة للتأمين التعاوني",
    logo: "/Salama.svg",
    rating: 4,
    type: "شامل",
    price: 5900,
    benefits: [
      "تغطية شاملة حتى 90,000 ريال سعودي",
      "تغطية الحوادث الشخصية للسائق والركاب",
      "تغطية الأضرار الطبيعية"
    ]
  },
  {
    id:6,
    name: "إتحاد الخليج الأهلية للتأمين التعاوني",
    logo: "/ethad.svg",
    rating: 3,
    type: "ضد الغير",
    price: 720,
    benefits: [
      "تغطية ضد أضرار الطرف الثالث",
      "تغطية الحوادث الشخصية للسائق",
      "دعم قانوني للحوادث"
    ]
  },
  {
    id:7,
    name: "تكافل الراجحي",
    logo: "/rajhi.svg",
    rating: 5,
    type: "شامل",
    price: 6100,
    benefits: [
      "تغطية شاملة حتى 110,000 ريال سعودي",
      "الحوادث الشخصية للسائق والركاب",
      "تغطية الأضرار الطبيعية والحريق"
    ]
  },
  {id:8,
    name: "شركة بوبا العربية للتأمين التعاوني",
    logo: "/buba.svg",
    rating: 5,
    type: "شامل",
    price: 6200,
    benefits: [
      "تغطية شاملة حتى 120,000 ريال سعودي",
      "تغطية الحوادث الشخصية للسائق والركاب",
      "خدمة المساعدة على الطريق"
    ]
  },
  {
    id:10,
    name: "شركة الدرع العربي للتأمين",
    logo: "/deraa.svg",
    rating: 4,
    type: "شامل",
    price: 5800,
    benefits: [
      "تغطية شاملة حتى 95,000 ريال سعودي",
      "تغطية الحوادث الشخصية للسائق والركاب",
      "تغطية الحريق والسرقة"
    ]
  }
];



export function InsuranceStepThree({ onNext, handleStepSubmit }: { onNext: () => void, handleStepSubmit: any }) {
  const [typeInsurnce, setTypeInsurance] = useState('not')
  const steps = [
    { number: 1, label: "البيانات الأساسية" },
    { number: 2, label: "بيانات التأمين" },
    { number: 3, label: "قائمة الأسعار" },
    { number: 4, label: "الملخص والدفع" },
  ]
  const handleSelect = () => {
    handleStepSubmit(
      {
        nothing: {
          userInpage: "yes"
        },
      },
      4,
    )

    onNext()
  }
  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator currentStep={3} steps={steps} />

      <div className="space-y-4">
        <div className="flex gap-2 mb-6">
          <Button onClick={() => { setTypeInsurance('not') }} variant={typeInsurnce === 'not' ? "outline" : "default"} className="flex-1  text-white hover:bg-[#005432]">
            ضد الغير
          </Button>
          <Button onClick={() => { setTypeInsurance('full') }} variant={typeInsurnce === 'full' ? "outline" : "default"} className="flex-1  text-white hover:bg-[#005432]">
            شامل
          </Button>
        </div>
        {insuranceCompanies.map((i, index) =>
          <InsuranceCompanyCard
            key={index}
            handleSelect={handleSelect}
            name={i.name}
            logo={i.logo}
            rating={i.rating}
            type={i.type as "ضد الغير" | "شامل"}
            benefits={i.benefits}
            price={i.price!} id={""} vatPercentage={10} referenceNumber={""} startDate={""} endDate={""} />
        )}
      </div>
    </div>
  )
}

