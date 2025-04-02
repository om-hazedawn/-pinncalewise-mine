"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "../../components/page-header";
import { AnimatedBackground } from "../../components/animated-background";
import { documentTemplates } from "../functions/document-templates";
import { FileText, Download } from "lucide-react";
import { useLanguage } from "../../context/language-context";

const content = {
  en: {
    title: "Document Templates",
    description: "Common business document templates",
    downloadError: "Download failed. Please try again later.",
    downloadButton: "Download Template",
  },
  zh: {
    title: "文件範本下載",
    description: "常用商業文件範本",
    downloadError: "下載失敗，請稍後再試",
    downloadButton: "下載範本",
  },
};

export default function DocumentTemplatesPage() {
  const { language } = useLanguage();
  const currentContent = content[language];

  const categories = Array.from(
    new Set(documentTemplates.map((template) => template.category[language]))
  );

  const handleDownload = async (template: any) => {
    try {
      const response = await fetch(template.fileUrl);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${template.name[language]}.${template.fileType}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
      alert(currentContent.downloadError);
    }
  };

  return (
    <AnimatedBackground variant="subtle">
      <div className="container mx-auto px-4 py-12">
        <div className="[&_*]:!text-gray-900">
          <PageHeader
            title={currentContent.title}
            description={currentContent.description}
            accent
          />
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documentTemplates
                  .filter(
                    (template) => template.category[language] === category
                  )
                  .map((template) => (
                    <Card key={template.id}>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle>{template.name[language]}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">
                          {template.description[language]}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {template.fileType.toUpperCase()}
                          </span>
                          <Button
                            onClick={() => handleDownload(template)}
                            className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            {currentContent.downloadButton}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}
