"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Share Transfer",
    description:
      "Share transfers occur for various reasons including business transfers, shareholding ratio changes, shareholder withdrawals, or addition of new shareholders.",
  },
  {
    title: "Accounting Services",
    description:
      "According to Hong Kong Companies Ordinance Cap. 622, limited companies must prepare annual financial statements and maintain relevant accounting records.",
  },
  {
    title: "Limited Company Tax Filing",
    description:
      "Newly established companies will receive a profits tax return within 18 months of establishment, which must be submitted with audit report and tax computation within 3 months.",
  },
]

export function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Other Professional Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button className="w-full">
                Apply for Service
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

