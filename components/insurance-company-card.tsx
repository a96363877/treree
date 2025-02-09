"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { useInsurance } from "@/context/insurance-context"

interface InsuranceCompanyCardProps {
  id: string
  name: string
  logo: string
  rating: number
  benefits: string[]
  price: number
  type: "ضد الغير" | "شامل"
  vatPercentage: number
  referenceNumber: string
  startDate: string
  endDate: string
}

export function InsuranceCompanyCard(props: InsuranceCompanyCardProps) {
  const { selectedCompany, setSelectedCompany } = useInsurance()
  const isSelected = selectedCompany?.id === props.id

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border p-6 mb-4 cursor-pointer transition-all
        ${isSelected ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-300"}`}
      onClick={() => setSelectedCompany(props)}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl mb-2">{props.type}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < props.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
        <Image
          src={props.logo || "/placeholder.svg"}
          alt={props.name}
          width={120}
          height={40}
          className="h-10 w-auto"
        />
      </div>

      <div className="mb-6">
        <h4 className="text-lg mb-3">المنافع الإضافة</h4>
        <div className="space-y-2">
          {props.benefits.map((benefit, index) => (
            <p key={index} className="text-sm text-gray-600">
              {benefit}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-600 mb-1">الإجمالي</div>
          <div className="text-2xl font-bold">{props.price} ريال</div>
        </div>
        <button
          className={`px-6 py-2 rounded-md transition-colors
            ${
              isSelected ? "bg-green-500 text-white hover:bg-green-600" : "bg-[#00693E] text-white hover:bg-[#005432]"
            }`}
        >
          {isSelected ? "تم الاختيار" : "إشتري الآن"}
        </button>
      </div>
    </div>
  )
}

