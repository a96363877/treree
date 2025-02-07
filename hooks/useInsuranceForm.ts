"use client"

import { useState, useEffect } from "react"
import { db } from "@/lib/firebase"
import { doc, setDoc, getDoc } from "firebase/firestore"

export interface InsuranceFormData {
  applicationId?: string
  step: number
  vehicleInfo?: {
    serialNumber: string
    idNumber: string
    birthDate: string
  }
  insuranceDetails?: {
    startDate: string
    price: number
  }
  coverageType?: "basic" | "comprehensive"
  paymentMethod?: string
  cardDetails?: {
    number: string
    expiry: string
    cvv: string
  }
}

export function useInsuranceForm(initialStep = 1) {
  const [formData, setFormData] = useState<InsuranceFormData>({ step: initialStep })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadSavedData = async () => {
      const savedId = localStorage.getItem("insuranceApplicationId")
      if (!savedId) return

      try {
        setLoading(true)
        const docRef = doc(db, "insuranceApplications", savedId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setFormData(docSnap.data() as InsuranceFormData)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    loadSavedData()
  }, [])

  const saveData = async (data: Partial<InsuranceFormData>) => {
    try {
      setLoading(true)
      setError(null)

      const newData = { ...formData, ...data }
      if (!newData.applicationId) {
        newData.applicationId = Date.now().toString(36) + Math.random().toString(36).substr(2)
        localStorage.setItem("insuranceApplicationId", newData.applicationId)
      }
      await setDoc(doc(db, "insuranceApplications", newData.applicationId), newData)
      setFormData(newData)

      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      return false
    } finally {
      setLoading(false)
    }
  }

  const submitApplication = async () => {
    if (!formData.applicationId) return

    try {
      setLoading(true)
      setError(null)

      await setDoc(
        doc(db, "insuranceApplications", formData.applicationId),
        { ...formData, status: "submitted", submittedAt: new Date() },
        { merge: true },
      )

      return true
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    formData,
    loading,
    error,
    saveData,
    submitApplication,
  }
}

