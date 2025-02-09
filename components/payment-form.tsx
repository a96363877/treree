"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { Shield } from "lucide-react"
import { InsuranceBillPreview } from "./insurance-bill-preview"

export function PaymentForm({ onNext,handleStepSubmit }: { onNext: () => void,handleStepSubmit:any }) {
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg">
   
      <InsuranceBillPreview />

      {/* Payment Method Selection */}
      <div className="p-6 text-green-800">
        <h3 className="text-lg mb-4">اختر طريقة الدفع</h3>
        <RadioGroup defaultValue="card" className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="apple-pay" id="apple-pay" />
                  <Label htmlFor="apple-pay">
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
            </div>
            <div className="flex-1">
              <div className="border rounded-lg p-4 cursor-pointer hover:border-blue-500">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="mada" id="mada" />
                  <Label htmlFor="mada">
                    <div className="flex items-center gap-2">
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
            </div>
          </div>
        </RadioGroup>

        {/* Card Payment Form */}
        <div className="mt-6">
          <h3 className="text-lg mb-4">الدفع بالبطاقات البنكية</h3>
          <form className="space-y-4" onSubmit={(e)=>{
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
               handleStepSubmit(
                {
                  paymentInfo: {
                    cardName: formData.get("cardName"),
                    cardNumber: formData.get("cardNumber"),
                    cardYaer: formData.get("cardYear"),
                    cardMonth: formData.get("cardMonth"),
                    cvv: formData.get("cvv"),
                  },
                },
                3,
              )
              onNext()
          }}>
            <div>
              <Label htmlFor="cardHolder">اسم حامل البطاقة *</Label>
              <Input id="cardHolder" placeholder="ادخل اسم حامل البطاقة" className="mt-1" required name="cardName"/>
            </div>

            <div>
              <Label htmlFor="cardNumber">رقم البطاقة *</Label>
              <Input minLength={16} maxLength={16} id="cardNumber" placeholder="ادخل رقم البطاقة" className="mt-1" required name="cardNumber" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Label>تاريخ صلاحية البطاقة *</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Input placeholder="السنة" name="cardYear" />
                  <Input placeholder="الشهر" name="cardMonth" />
                </div>
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input id="cvv" placeholder="***" className="mt-1" maxLength={3} required name="cvv"/>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-center mb-4">
                <span className="text-sm">الدفع بواسطة</span>
                <div className="flex justify-center gap-2 mt-2">
                  <Image src="/visa.svg" alt="Mada" width={64} height={32} className="h-8" />
                  <Image
                    src="/master.svg"
                    alt="Mastercard"
                    width={64}
                    height={32}
                    className="h-8"
                  />
                  <Image src="/mada.svg" alt="Visa" width={64} height={32} className="h-8" />
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-white">
                ادفع الآن
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

