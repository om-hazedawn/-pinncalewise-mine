"use client"

import { Hero } from "./components/hero"
import { Stats } from "./components/stats"
import { ProfessionalServices } from "./components/professional-services"
import { SecretaryServicesPricing } from "./components/secretary-services-pricing"
import { SecretaryPlans } from "./components/secretary-plans"

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <ProfessionalServices />
      {/* <SecretaryServicesPricing /> */}
      <SecretaryPlans />
    </>
  )
}

