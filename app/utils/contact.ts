/**
 * Utility functions for handling contact actions
 */

import { useRouter } from "next/navigation";

/**
 * Opens the contact form section with optional pre-filled service
 * @param service - The service to pre-select in the contact form
 */
export const openContactForm = (service?: string) => {
  // If we're on the home page, scroll to the contact section
  if (window.location.pathname === '/' || window.location.pathname === '') {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // If a service was specified, pre-select it in the dropdown
      if (service) {
        setTimeout(() => {
          const serviceSelect = document.querySelector('[name="service"]') as HTMLSelectElement;
          if (serviceSelect) {
            // Map from service name to select value
            const serviceMapping: Record<string, string> = {
              "Company Secretary Service": "company-secretary",
              "公司秘書服務": "company-secretary",
              "Accounting Service": "accounting",
              "會計服務": "accounting",
              "Business Registration": "business-registration",
              "商業註冊": "business-registration",
              "Virtual Office": "virtual-office",
              "虛擬辦公室": "virtual-office"
            };
            
            const value = serviceMapping[service] || "other";
            
            // Trigger a change on the select element
            const event = new Event('change', { bubbles: true });
            serviceSelect.value = value;
            serviceSelect.dispatchEvent(event);
          }
        }, 800); // Give time for the form to load
      }
    }
  } else {
    // If we're not on the home page, navigate to the home page with a contact parameter
    window.location.href = `/?contact=true${service ? `&service=${encodeURIComponent(service)}` : ''}`;
  }
};

/**
 * Hook for handling contact form navigation
 * This should be used in the layout or page component to handle URL parameters
 */
export const useContactNavigation = () => {
  const router = useRouter();
  
  const handleContactParams = () => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const contact = urlParams.get('contact');
      const service = urlParams.get('service');
      
      if (contact === 'true') {
        // Remove the parameters from the URL
        router.replace('/', { scroll: false });
        
        // Wait for page to be fully loaded, then scroll to contact section
        setTimeout(() => {
          openContactForm(service || undefined);
        }, 500);
      }
    }
  };
  
  return { handleContactParams };
};
