"use client"

import { Hero } from "./components/hero"
import { Stats } from "./components/stats"
import { ProfessionalServices } from "./components/professional-services"
import { SecretaryServicesPricing } from "./components/secretary-services-pricing"
import { SecretaryPlans } from "./components/secretary-plans"
import { ContactSection } from "./components/contact-section"
import { useEffect } from "react"
import { useContactNavigation } from "./utils/contact"

export default function Page() {
  const { handleContactParams } = useContactNavigation();
  
  // Check for contact parameter in URL on load
  useEffect(() => {
    handleContactParams();
  }, []);
  
  return (
    <>
      <Hero />
      <Stats />
      <ProfessionalServices />
      {/* <SecretaryServicesPricing /> */}
      <SecretaryPlans />
      <ContactSection />
    </>
  )
}
