"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface InsuranceCompany {
  id: string
  name: string
  logo: string
  type: "ضد الغير" | "شامل"
  rating: number
  benefits: string[]
  price: number
  vatPercentage: number
  referenceNumber: string
  startDate: string
  endDate: string
}

interface InsuranceContextType {
  selectedCompany: InsuranceCompany | null
  setSelectedCompany: (company: InsuranceCompany | null) => void
  calculateTotal: () => {
    subtotal: number
    vat: number
    total: number
  }
}

const InsuranceContext = createContext<InsuranceContextType | undefined>(undefined)

export function InsuranceProvider({ children }: { children: ReactNode }) {
  const [selectedCompany, setSelectedCompany] = useState<InsuranceCompany | null>(null)

  const calculateTotal = () => {
    if (!selectedCompany) {
      return {
        subtotal: 0,
        vat: 0,
        total: 0,
      }
    }

    const subtotal = selectedCompany.price
    const vat = (subtotal * selectedCompany.vatPercentage) / 100
    const total = subtotal + vat

    return {
      subtotal,
      vat,
      total,
    }
  }

  return (
    <InsuranceContext.Provider
      value={{
        selectedCompany,
        setSelectedCompany,
        calculateTotal,
      }}
    >
      {children}
    </InsuranceContext.Provider>
  )
}

export function useInsurance() {
  const context = useContext(InsuranceContext)
  if (context === undefined) {
    throw new Error("useInsurance must be used within an InsuranceProvider")
  }
  return context
}

