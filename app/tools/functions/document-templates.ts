export interface DocumentTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  language: 'en' | 'zh';
  fileUrl: string;
  fileType: 'docx' | 'pdf';
}

export const documentTemplates: DocumentTemplate[] = [
  {
    id: "board-resolution",
    name: "董事會決議",
    category: "公司管理",
    description: "標準董事會決議模板",
    language: "zh",
    fileUrl: "/templates/board-resolution.docx",
    fileType: "docx"
  },
  {
    id: "employment-contract",
    name: "僱傭合約",
    category: "人力資源",
    description: "標準僱傭合約模板",
    language: "zh",
    fileUrl: "/templates/employment-contract.docx",
    fileType: "docx"
  }
];

export function getTemplateById(id: string): DocumentTemplate | undefined {
  return documentTemplates.find(template => template.id === id);
}

export function getTemplatesByCategory(category: string): DocumentTemplate[] {
  return documentTemplates.filter(template => template.category === category);
}
