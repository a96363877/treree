"use client"

import { useState, useEffect } from "react"
import { doc, setDoc, getDoc } from "firebase/firestore"
import { auth, db } from "../lib/firebase"

export interface InsuranceFormData {
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
      if (!auth.currentUser) return

      try {
        setLoading(true)
        const docRef = doc(db, "insuranceApplications", auth.currentUser.uid)
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
    if (!auth.currentUser) return

    try {
      setLoading(true)
      setError(null)

      const newData = { ...formData, ...data }
      await setDoc(doc(db, "insuranceApplications", auth.currentUser.uid), newData)
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
    if (!auth.currentUser) return

    try {
      setLoading(true)
      setError(null)

      // Update status to submitted
      await setDoc(
        doc(db, "insuranceApplications", auth.currentUser.uid),
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

