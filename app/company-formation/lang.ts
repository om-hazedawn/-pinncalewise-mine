import { Language } from "../types/language";

type CompanyFormationTranslations = {
  pageTitle: string;
  registrationServices: {
    title: string;
    description: string;
    benefits: {
      fast: string;
      professional: string;
      oneStop: string;
      reasonable: string;
    };
    applyButton: string;
  };
  requiredDocuments: {
    title: string;
    list: {
      identity: string;
      address: string;
      companyName: string;
      registrationAddress: string;
      businessNature: string;
      secretaryId: string;
    };
  };
  registrationProcess: {
    title: string;
    steps: {
      submitDocuments: string;
      verifyInfo: string;
      submitRegistry: string;
      collectDocuments: string;
    };
  };
  secretaryServices: {
    title: string;
    requirements: {
      title: string;
      description: string;
      list: {
        hongKongAddress: string;
        idCard: string;
        corporateBody: string;
        compliance: string;
      };
    };
    ourServices: {
      title: string;
      description: string;
      list: {
        address: string;
        documents: string;
        annualReturns: string;
        records: string;
        advice: string;
      };
      learnMoreButton: string;
    };
  };
  whyChooseUs: {
    title: string;
    reasons: {
      professional: {
        title: string;
        description: string;
      };
      convenient: {
        title: string;
        description: string;
      };
      costEffective: {
        title: string;
        description: string;
      };
    };
  };
};

export const companyFormationTranslations: Record<Language, CompanyFormationTranslations> = {
  zh: {
    pageTitle: "開公司",
    registrationServices: {
      title: "香港公司註冊服務",
      description: "我們提供專業的香港公司註冊服務，協助您快速成立有限公司。",
      benefits: {
        fast: "✓ 快速處理，1-3個工作天完成",
        professional: "✓ 專業建議及指導",
        oneStop: "✓ 一站式服務",
        reasonable: "✓ 合理收費",
      },
      applyButton: "立即申請",
    },
    requiredDocuments: {
      title: "所需文件",
      list: {
        identity: "1. 董事及股東身份證/護照副本",
        address: "2. 董事及股東住址證明",
        companyName: "3. 公司名稱（中英文）",
        registrationAddress: "4. 公司註冊地址",
        businessNature: "5. 業務性質",
        secretaryId: "6. 公司秘書身份證副本",
      },
    },
    registrationProcess: {
      title: "註冊流程",
      steps: {
        submitDocuments: "提交所需文件",
        verifyInfo: "核實資料",
        submitRegistry: "提交公司註冊處",
        collectDocuments: "領取公司文件",
      },
    },
    secretaryServices: {
      title: "公司秘書服務",
      requirements: {
        title: "公司秘書要求",
        description: "根據香港《公司條例》，每間有限公司必須委任一位公司秘書。",
        list: {
          hongKongAddress: "• 公司秘書必須有香港常用地址",
          idCard: "• 需要提供身份證副本",
          corporateBody: "• 如為法人團體，需要提供註冊證書",
          compliance: "• 負責確保公司遵守法定要求",
        },
      },
      ourServices: {
        title: "我們的公司秘書服務",
        description: "選擇我們作為您的公司秘書，為您提供專業可靠的服務：",
        list: {
          address: "✓ 提供香港本地地址作為公司秘書地址",
          documents: "✓ 處理法定文件及通知",
          annualReturns: "✓ 按時提交周年申報表",
          records: "✓ 維護公司重要記錄",
          advice: "✓ 提供專業建議，確保公司合規營運",
        },
        learnMoreButton: "了解更多",
      },
    },
    whyChooseUs: {
      title: "為何選擇我們的公司秘書服務？",
      reasons: {
        professional: {
          title: "專業可靠",
          description: "我們的秘書團隊擁有豐富經驗，熟悉香港公司法例及合規要求。",
        },
        convenient: {
          title: "便捷無憂",
          description: "無需自行處理繁複的法律文件，我們將妥善管理所有秘書事務。",
        },
        costEffective: {
          title: "成本效益",
          description: "比聘請全職秘書更經濟實惠，按您需要提供靈活服務。",
        },
      },
    },
  },
  en: {
    pageTitle: "Company Formation",
    registrationServices: {
      title: "Hong Kong Company Registration Services",
      description: "We provide professional Hong Kong company registration services to help you quickly establish a limited company.",
      benefits: {
        fast: "✓ Fast processing, completed in 1-3 working days",
        professional: "✓ Professional advice and guidance",
        oneStop: "✓ One-stop service",
        reasonable: "✓ Reasonable fees",
      },
      applyButton: "Apply Now",
    },
    requiredDocuments: {
      title: "Required Documents",
      list: {
        identity: "1. Copy of directors' and shareholders' ID/passport",
        address: "2. Proof of directors' and shareholders' residential address",
        companyName: "3. Company name (Chinese and English)",
        registrationAddress: "4. Company registration address",
        businessNature: "5. Business nature",
        secretaryId: "6. Copy of company secretary's ID card",
      },
    },
    registrationProcess: {
      title: "Registration Process",
      steps: {
        submitDocuments: "Submit required documents",
        verifyInfo: "Verify information",
        submitRegistry: "Submit to Companies Registry",
        collectDocuments: "Collect company documents",
      },
    },
    secretaryServices: {
      title: "Company Secretary Services",
      requirements: {
        title: "Company Secretary Requirements",
        description: "According to the Hong Kong Companies Ordinance, every limited company must appoint a company secretary.",
        list: {
          hongKongAddress: "• Company secretary must have a Hong Kong address",
          idCard: "• Must provide a copy of ID card",
          corporateBody: "• If a corporate body, must provide registration certificate",
          compliance: "• Responsible for ensuring company compliance with statutory requirements",
        },
      },
      ourServices: {
        title: "Our Company Secretary Services",
        description: "Choose us as your company secretary for professional and reliable services:",
        list: {
          address: "✓ Provide a local Hong Kong address as company secretary address",
          documents: "✓ Handle statutory documents and notices",
          annualReturns: "✓ Timely submission of annual returns",
          records: "✓ Maintain important company records",
          advice: "✓ Provide professional advice to ensure company compliance",
        },
        learnMoreButton: "Learn More",
      },
    },
    whyChooseUs: {
      title: "Why Choose Our Company Secretary Services?",
      reasons: {
        professional: {
          title: "Professional & Reliable",
          description: "Our secretary team has extensive experience and is familiar with Hong Kong company laws and compliance requirements.",
        },
        convenient: {
          title: "Convenient & Worry-free",
          description: "No need to handle complex legal documents yourself; we will properly manage all secretarial matters.",
        },
        costEffective: {
          title: "Cost-effective",
          description: "More economical than hiring a full-time secretary, providing flexible services according to your needs.",
        },
      },
    },
  },
};
