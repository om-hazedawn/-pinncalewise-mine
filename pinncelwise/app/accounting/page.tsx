'use client'

import { ServiceHero } from '@/components/service-hero'
import { FeatureSection } from '@/components/feature-section'
import { ContactSection } from '@/components/contact-section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { AnimatedCounter } from '@/components/animated-counter'
import { ParallaxSection } from '@/components/parallax-section'
import { HoverCardEffect } from '@/components/hover-card-effect'
import { FloatingElements } from '@/components/floating-elements'
import { useRef } from 'react'

interface Props {
  params: {
    lang: string
  }
}

const content = {
  en: {
    hero: {
      title: "Professional Accounting Services",
      subtitle: "AC Accounting, established in 2013, has served over 3000 SMEs with professional accounting expertise"
    },
    stats: {
      clients: "Clients Served",
      experience: "Years Experience",
      support: "Professional Support"
    },
    about: "AC Accounting founder Adam Ho has over 15 years of professional accounting experience. He is a Fellow Member of the Association of Chartered Certified Accountants (FCCA), Fellow Member of the Taxation Institute of Hong Kong (FTIHK), and a Licensed Trust and Company Service Provider in Hong Kong (License No.: TC009660) / (Previous No. TC004835).",
    mainServices: [
      { title: 'Company Formation', items: ['Company Registration', 'Business Registration', 'Bank Account Opening'] },
      { title: 'Accounting Services', items: ['Bookkeeping', 'Financial Statements', 'Management Accounting'] },
      { title: 'Company Secretary', items: ['Compliance Services', 'Document Filing', 'Annual Returns'] },
      { title: 'Tax Services', items: ['Profits Tax Filing', 'Salaries Tax Filing', 'Property Tax Filing'] },
      { title: 'Audit Services', items: ['Statutory Audit', 'Special Audit', 'Due Diligence'] },
      { title: 'Trademark Registration', items: ['Trademark Application', 'Trademark Renewal', 'Trademark Transfer'] }
    ],
    additionalServices: [
      { title: 'Legal Services', items: ['Legal Consultation', 'Contract Review', 'Dispute Resolution'] },
      { title: 'Mortgage Referral', items: ['Mortgage Consultation', 'Rate Comparison', 'Loan Application'] },
      { title: 'SME Loans', items: ['Loan Assessment', 'Application Assistance', 'Repayment Planning'] },
      { title: 'Certified True Copies', items: ['Document Certification', 'Notary Services'] },
      { title: 'Corporate Email', items: ['Email Setup', 'Domain Registration', 'Technical Support'] },
      { title: 'Bank Account Opening', items: ['Bank Introduction', 'Opening Assistance', 'Document Preparation'] }
    ],
    sections: {
      mainServices: "Main Services",
      otherServices: "Other Business Support Services",
      whyUs: "Why Choose Us",
      reliability: {
        title: "Professional & Reliable",
        points: [
          "Reasonable pricing, focused on SME development",
          "Free consultation to understand statutory obligations"
        ]
      },
      efficiency: {
        title: "Efficient & Convenient",
        points: [
          "One-stop service to save costs and time",
          "Pre-deployment arrangement to save unnecessary tax"
        ]
      }
    },
    contact: {
      title: "Contact Us",
      description: "If you have any questions about AC Accounting's services, we're happy to help"
    }
  },
  zh: {
    hero: {
      title: "專業會計服務",
      subtitle: "毅思會計 (AC Accounting) 是一間專業會計公司，成立自2013年，服務超過3000間中小企"
    },
    stats: {
      clients: "服務企業",
      experience: "專業經驗",
      support: "專業支援"
    },
    about: "毅思會計創辦人 Adam Ho 有超過15年會計專業經驗，是特許公認會計師公會資深會員 (FCCA)，香港稅務學會資深會員 (FTIHK)，亦是香港信託及公司服務提供者持牌人 (牌照編號 : TC009660) / （先前編號 TC004835）。",
    mainServices: [
      { title: '開公司', items: ['公司註冊', '商業登記', '公司開戶'] },
      { title: '會計服務', items: ['帳目製作', '財務報表', '管理會計'] },
      { title: '公司秘書', items: ['合規服務', '文件存檔', '周年申報'] },
      { title: '報稅服務', items: ['利得稅申報', '薪俸稅申報', '物業稅申報'] },
      { title: '核數服務', items: ['法定審計', '特別審計', '盡職調查'] },
      { title: '商標註冊', items: ['商標申請', '商標續期', '商標轉讓'] }
    ],
    additionalServices: [
      { title: '法律服務', items: ['法律諮詢', '合約審閱', '爭議解決'] },
      { title: '按揭轉介', items: ['按揭諮詢', '利率比較', '貸款申請'] },
      { title: '中小企貸款', items: ['貸款評估', '申請協助', '還款計劃'] },
      { title: '經核證真實副本', items: ['文件核證', '公證服務'] },
      { title: '企業電郵', items: ['電郵設置', '域名註冊', '技術支援'] },
      { title: '銀行開戶', items: ['銀行介紹', '開戶協助', '文件準備'] }
    ],
    sections: {
      mainServices: "主要服務",
      otherServices: "其他商業支援服務",
      whyUs: "為何選擇我們",
      reliability: {
        title: "專業可靠",
        points: [
          "收費合理，專注中小企發展",
          "免費諮詢了解法定責任"
        ]
      },
      efficiency: {
        title: "快捷方便",
        points: [
          "一站式服務節省成本及時間",
          "預先部署安排節省不必要稅項"
        ]
      }
    },
    contact: {
      title: "聯絡我們",
      description: "如果您對毅思會計的服務有任何疑問，我們很樂意為您解答"
    }
  }
}

import { AccountingClientPage } from './client'

interface PageProps {
  params: Promise<{ lang: string }>
}

export default async function AccountingPage({ params }: PageProps) {
  const { lang } = await params
  return <AccountingClientPage lang={lang} />
}
