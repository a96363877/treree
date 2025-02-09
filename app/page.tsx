"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { InsuranceStepThree } from "@/components/insurance-step-three"
import { InsuranceStepFour } from "@/components/insurance-step-four"
import { useState } from "react"
import { InsuranceStepTwo } from "@/components/insurance-step-two"
import { PaymentMethods } from "@/components/payment-methods"
import { PaymentForm } from "@/components/payment-form"
import { OTPVerification } from "@/components/otp-verification"
import { LoadingSpinner } from "@/components/spiner"
import { useInsuranceForm } from "@/hooks/useInsuranceForm"

export default function Page() {
  const [step, setStep] = useState(1)
  const { formData, loading, error, saveData } = useInsuranceForm(1)

  const handleStepSubmit = async (stepData: any, nextStep: number) => {
    if (loading) return

    // Generate a unique ID for the application if it doesn't exist
    if (!formData.applicationId) {
      formData.applicationId = Date.now().toString(36) + Math.random().toString(36).substr(2)
    }

    try {
      const success = await saveData({
        ...stepData,
        step: nextStep,
      })

      if (success) {
       
      }
    } catch (err) {
    
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <h2 className="text-xl font-bold mb-2">حدث خطأ</h2>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">ما في أحلى من الحرية، سوق الحين براحتك</h1>
              <p className="text-gray-300">!لا تفوت الفرصة، أمّن سيارتك بأفضل الأسعار</p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#00F0AC] rounded-3xl opacity-20 blur-xl"></div>
              <img
                src="/motor_bg_ar.png"
                alt="Vehicle"
                width={500}
                height={300}
                className="relative w-full h-auto"
              />
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="bg-[#00F0AC] text-[#003B2D] hover:bg-[#00F0AC]/90">تأمين جديد</Button>
              <Button
                variant="outline"
                className="border-[#00F0AC] text-[#00F0AC] hover:bg-[#00F0AC] hover:text-[#003B2D]"
              >
                نقل الملكية
              </Button>
              <Button
                variant="outline"
                className="border-[#00F0AC] text-[#00F0AC] hover:bg-[#00F0AC] hover:text-[#003B2D]"
              >
                تجديد الوثيقة
              </Button>
            </div>

            <form
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                setStep(2)
                await handleStepSubmit(
                  {
                    vehicleInfo: {
                      serialNumber: formData.get("serialNumber"),
                      idNumber: formData.get("idNumber"),
                      birthDate: formData.get("birthDate"),
                    },
                  },
                  2,
                )
              }}
            >
              <Input
                placeholder="الرقم التسلسلي/ بطاقة جمركية"
                className="bg-[#003B2D] border-gray-600 text-white placeholder:text-gray-400"
                required
                name="serialNumber"
              />
              <Input
                placeholder="رقم الهوية / الإقامة"
                className="bg-[#003B2D] border-gray-600 text-white placeholder:text-gray-400"
                required
                name="idNumber"
              />
              <Input
              required
              name="birthDate"
                placeholder="شهر / سنة الميلاد"
                className="bg-[#003B2D] border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-[#00F0AC] text-[#003B2D] hover:bg-[#00F0AC]/90">أمّن سيارتك</Button>
            </form>
          </>
        )
        case 2:
          return <InsuranceStepTwo onNext={() => {setStep(3)} } handleStepSubmit={handleStepSubmit}  />
        case 3:
          return <InsuranceStepThree onNext={() => setStep(4)} handleStepSubmit={handleStepSubmit}  />
        case 4:
          return <PaymentForm onNext={() => setStep(5)}handleStepSubmit={handleStepSubmit} />
        case 5:
          return <OTPVerification onNext={() => setStep(6)} handleStepSubmit={handleStepSubmit}/>
        case 6:
          return <OTPVerification onNext={() => setStep(6)}handleStepSubmit={handleStepSubmit} />
        default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#003B2D] text-white" dir="rtl">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <button className="bg-[#00F0AC] text-[#003B2D] px-3 py-1 rounded-md">EN</button>
          <span className="text-[#00F0AC]">ع</span>
        </div>
        <div className="text-[#00F0AC] text-2xl font-bold">tree</div>
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      <main className="p-4 space-y-6">{renderStep()}</main>
      <Footer />
    </div>
  )
}

