'use client'

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Info } from 'lucide-react'

export function PaymentMethods({onNext}:any) {
  return (
    <div className="bg-white text-[#003B2D] rounded-lg p-6 max-w-md mx-auto">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-xl font-bold">اختر طريقة الدفع</h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between text-sm mb-4">
            <span>المجموع</span>
            <span className="text-xl font-bold">1,004.4 ريال</span>
          </div>

          <RadioGroup defaultValue="tabby" className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="tabby" id="tabby" />
                <Label htmlFor="tabby" className="flex-1">
                  <div className="flex justify-between items-center">
                    <span>تابي - الدفع بالتقسيط</span>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                </Label>
              </div>
              <div className="mt-2 text-sm text-gray-600 pr-8">
                قسّم مبلغ 1,004.4 ريال على 4 دفعات شهرية بقيمة 251.1 ريال
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="mada" id="mada" />
                <Label htmlFor="mada" className="flex-1">
                  <div className="flex justify-between items-center">
                    <span>مدى</span>
                    <img src="/mada.svg?height=24&width=60" alt="Mada" className="h-6" />
                  </div>
                </Label>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-[#FFF8F0]">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="apple-pay" id="apple-pay" />
                <Label htmlFor="apple-pay" className="flex-1">
                  <div className="flex justify-between items-center">
                    <span>Apple Pay</span>
                    <img src="/appay.svg?height=24&width=60" alt="Apple Pay" className="h-6" />
                  </div>
                </Label>
              </div>
            </div>

     
          </RadioGroup>
        </div>

        <Button onClick={onNext}   className="w-full bg-green-600 text-white">
          متابعة
        </Button>
      </div>
    </div>
  )
}
