import Image from "next/image"
import { Star } from "lucide-react"

interface InsuranceCompanyCardProps {
  onNext:any
  name: string
  logo: string
  rating: number
  benefits: string[]
  price: number
  type: string
}

export function InsuranceCompanyCard({onNext, name, logo, rating, benefits, price, type }: InsuranceCompanyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-4">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl mb-2">{type}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
        </div>
        <Image src={logo || "/placeholder.svg"} alt={name} width={120} height={40} className="h-10 w-auto" />
      </div>

      <div className="mb-6">
        <h4 className="text-lg mb-3">المنافع الإضافة</h4>
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <p key={index} className="text-sm text-gray-600">
              {benefit}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-600 mb-1">الإجمالي</div>
          <div className="text-2xl font-bold">{price} ريال</div>
        </div>
        <button className="bg-[#00693E] text-white px-6 py-2 rounded-md hover:bg-[#005432]" onClick={onNext}>إشتري الآن</button>
      </div>
    </div>
  )
}

