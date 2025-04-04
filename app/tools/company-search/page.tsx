"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "../../components/page-header";
import { AnimatedBackground } from "../../components/animated-background";
import { searchCompany } from "../functions/company-search";
import { useLanguage } from "../../context/language-context";
import { Search, Building } from "lucide-react";

const content = {
  en: {
    title: "Company Name Search",
    description: "Check company registration status",
    inputLabel: "Enter Company Name",
    inputPlaceholder: "Enter company name",
    searchButton: "Search",
    searching: "Searching...",
    registrationNumber: "Registration Number:",
    status: "Status:",
    incorporationDate: "Incorporation Date:",
    registeredAddress: "Registered Address:"
  },
  zh: {
    title: "公司名稱查冊",
    description: "查詢公司註冊狀態",
    inputLabel: "輸入公司名稱",
    inputPlaceholder: "輸入公司名稱",
    searchButton: "查詢",
    searching: "正在搜尋...",
    registrationNumber: "註冊編號：",
    status: "公司狀態：",
    incorporationDate: "成立日期：",
    registeredAddress: "註冊地址："
  }
};

export default function CompanySearchPage() {
  const { language } = useLanguage();
  const currentContent = content[language];
  const [companyName, setCompanyName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!companyName.trim()) return;

    setIsSearching(true);
    try {
      const results = await searchCompany(companyName);
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
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
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{currentContent.inputLabel}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <Input
                  placeholder={currentContent.inputPlaceholder}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600"
                >
                  <Search className="h-4 w-4 mr-2" />
                  {currentContent.searchButton}
                </Button>
              </div>
            </CardContent>
          </Card>

          {searchResults.length > 0 && (
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {result.companyName}
                        </h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>{currentContent.registrationNumber} {result.registrationNumber}</p>
                          <p>{currentContent.status} {result.status}</p>
                          <p>{currentContent.incorporationDate} {result.incorporationDate}</p>
                          {result.registeredAddress && (
                            <p>{currentContent.registeredAddress} {result.registeredAddress}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {isSearching && (
            <div className="text-center py-8">
              <p>{currentContent.searching}</p>
            </div>
          )}
        </div>
      </div>
    </AnimatedBackground>
  );
}
