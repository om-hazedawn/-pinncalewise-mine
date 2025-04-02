export interface DocumentTemplate {
  id: string;
  name: {
    en: string;
    zh: string;
  };
  category: {
    en: string;
    zh: string;
  };
  description: {
    en: string;
    zh: string;
  };
  fileUrl: string;
  fileType: 'docx' | 'pdf';
}

export const documentTemplates: DocumentTemplate[] = [
  {
    id: "board-resolution",
    name: {
      en: "Board Resolution",
      zh: "董事會決議"
    },
    category: {
      en: "Company Management",
      zh: "公司管理"
    },
    description: {
      en: "Standard board resolution template",
      zh: "標準董事會決議模板"
    },
    fileUrl: "/templates/board-resolution.docx",
    fileType: "docx"
  },
  {
    id: "employment-contract",
    name: {
      en: "Employment Contract",
      zh: "僱傭合約"
    },
    category: {
      en: "Human Resources",
      zh: "人力資源"
    },
    description: {
      en: "Standard employment contract template",
      zh: "標準僱傭合約模板"
    },
    fileUrl: "/templates/employment-contract.docx",
    fileType: "docx"
  }
];

export function getTemplateById(id: string): DocumentTemplate | undefined {
  return documentTemplates.find(template => template.id === id);
}

export function getTemplatesByCategory(category: string, language: 'en' | 'zh'): DocumentTemplate[] {
  return documentTemplates.filter(template => template.category[language] === category);
}
