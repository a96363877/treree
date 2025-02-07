"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Image from "next/image"
import { Shield } from "lucide-react"

export function PaymentForm({ onNext }: { onNext: () => void; }) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg">
      {/* Policy Details Header */}
      <div className="border-b">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">تفاصيل الوثيقة</h2>
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
      </div>

      {/* Policy Information */}
      <div className="p-6 bg-gray-50 rounded-lg text-green-800 m-4">
        <div className="grid grid-cols-2 gap-y-4">
          <div className="text-right">
            <span className="text-gray-600">نوع التأمين</span>
            <p>ضد الغير</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">شركة التأمين</span>
            <p>ولاء للتأمين التعاوني</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">تاريخ بدء الوثيقة</span>
            <p>2025-01-28</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">الرقم المرجعي للتسعيرة</span>
            <p>1643877167</p>
          </div>
          <div className="text-right">
            <span className="text-gray-600">تاريخ انتهاء الوثيقة</span>
            <p>2026-02-07</p>
          </div>
        </div>
      </div>

      {/* Price Details */}
      <div className="p-6 bg-blue-50 mx-4  text-green-900 rounded-lg">
        <h3 className="text-lg font-semibold text-green-600 mb-4">التفاصيل</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>المجموع الجزئي</span>
            <span>521 ر.س</span>
          </div>
          <div className="flex justify-between">
            <span>شامل ضريبة القيمة المضافة (15.00%)</span>
            <span>0.00 ر.س</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-bold">
            <span>المبلغ الإجمالي</span>
            <span className="text-green-600">468.9 ر.س</span>
          </div>
          <div className="text-sm text-gray-600 text-center">السعر بعد الخصم شامل الضرائب و الرسوم</div>
        </div>
      </div>

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
          <form className="space-y-4">
            <div>
              <Label htmlFor="cardHolder">اسم حامل البطاقة *</Label>
              <Input id="cardHolder" placeholder="ادخل اسم حامل البطاقة" className="mt-1" required />
            </div>

            <div>
              <Label htmlFor="cardNumber">رقم البطاقة *</Label>
              <Input id="cardNumber" placeholder="ادخل رقم البطاقة" className="mt-1" required />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Label>تاريخ صلاحية البطاقة *</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Input placeholder="السنة" />
                  <Input placeholder="الشهر" />
                </div>
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input id="cvv" placeholder="***" className="mt-1" maxLength={3} required />
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

