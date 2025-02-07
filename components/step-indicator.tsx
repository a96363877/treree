interface StepIndicatorProps {
  currentStep: number
  steps: {
    number: number
    label: string
  }[]
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="relative mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-col items-center relative z-10">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${
                  step.number === currentStep
                    ? "bg-[#00693E] text-white"
                    : step.number < currentStep
                      ? "bg-gray-300 text-gray-600"
                      : "bg-gray-300 text-gray-600"
                }`}
            >
              {step.number}
            </div>
            <span className="mt-2 text-sm text-center">{step.label}</span>
          </div>
        ))}
      </div>
      <div className="absolute top-4 left-0 right-0 h-[2px] bg-gray-200 -translate-y-1/2 z-0">
        <div
          className="h-full bg-[#00693E] transition-all duration-300"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

