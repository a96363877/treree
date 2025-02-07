"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Calendar, Lock } from "lucide-react"

export function PaymentForm({onNext}:any) {
  return (
    <div className="bg-white text-[#003B2D] rounded-lg p-6 max-w-md mx-auto">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-xl font-bold">تفاصيل البطاقة</h2>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="card-number">رقم البطاقة</Label>
            <div className="relative">
              <Input id="card-number" placeholder="0000 0000 0000 0000" className="pl-10 text-left ltr" />
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">تاريخ الانتهاء</Label>
              <div className="relative">
                <Input id="expiry" placeholder="MM/YY" className="pl-10 text-left ltr" />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv">رمز الأمان</Label>
              <div className="relative">
                <Input id="cvv" placeholder="CVV" className="pl-10 text-left ltr" />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <Button onClick={onNext}  className="w-full bg-green-600 text-white">دفع 1,004.4 ريال</Button>
      </form>
    </div>
  )
}

