"use client"

import { useInsurance } from "@/context/insurance-context"
import { Shield } from "lucide-react"

export function InsuranceBillPreview() {
  const { selectedCompany, calculateTotal } = useInsurance()
  const { subtotal, vat, total } = calculateTotal()

  if (!selectedCompany) {
    return null
  }

  return (
    <div className="bg-white rounded-lg">
      {/* Policy Details Header */}
      <div className="border-b">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">تفاصيل الوثيقة</h2>
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Policy Information */}
      <div className="p-6 bg-gray-50 rounded-lg m-4">
        <div className="grid grid-cols-2 gap-y-4">
          <div className="text-right">
            <span className="text-gray-600">نوع التأمين</span>
            <p>{selectedCompany.type}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">شركة التأمين</span>
            <p>{selectedCompany.name}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">تاريخ بدء الوثيقة</span>
            <p>{selectedCompany.startDate}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">الرقم المرجعي للتسعيرة</span>
            <p>{selectedCompany.referenceNumber}</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">تاريخ انتهاء الوثيقة</span>
            <p>{selectedCompany.endDate}</p>
          </div>
        </div>
      </div>

      {/* Price Details */}
      <div className="p-6 bg-blue-50 mx-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-600 mb-4">التفاصيل</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>المجموع الجزئي</span>
            <span>{subtotal} ر.س</span>
          </div>
          <div className="flex justify-between">
            <span>شامل ضريبة القيمة المضافة ({selectedCompany.vatPercentage}%)</span>
            <span>{vat} ر.س</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-bold">
            <span>المبلغ الإجمالي</span>
            <span className="text-blue-600">{total} ر.س</span>
          </div>
          <div className="text-sm text-gray-600 text-center">السعر بعد الخصم شامل الضرائب و الرسوم</div>
        </div>
      </div>
    </div>
  )
}

