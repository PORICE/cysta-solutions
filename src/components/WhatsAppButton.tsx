
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Hide when scrolling down on mobile, show when at bottom or scrolling up
        if (scrollY > 100 && scrollY < documentHeight - windowHeight - 200) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsVisible(true);
    }
  }, [isMobile]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254719400499", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-khaki text-smoky_black shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${isMobile ? "h-12 w-12" : "h-14 w-14 hover:scale-110"}`}
      aria-label="Contact via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${isMobile ? "h-6 w-6" : "h-7 w-7"}`}
      >
        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 13.5988 2.39453 15.1285 3.10386 16.4846L2.05371 21.1929C1.97811 21.5504 2.09573 21.9192 2.36325 22.1868C2.63077 22.4543 3.0018 22.5719 3.35931 22.4973L8.09826 21.4523C9.44911 22.1594 10.9798 22.5479 12.6011 22.5479C18.1241 22.5479 22.6012 18.0708 22.6012 12.5479C22.6012 6.48892 17.5739 2 12.001 2ZM12.001 3.67389C16.6393 3.67389 20.9274 7.37738 20.9274 12.5479C20.9274 17.1534 17.2066 20.8739 12.6011 20.8739C11.1572 20.8739 9.74778 20.4843 8.50289 19.8016C8.30077 19.6898 8.06267 19.654 7.83726 19.7019L3.91247 20.5864L4.78971 16.6881C4.83859 16.4633 4.8028 16.2242 4.68994 16.0214C4.00174 14.7652 3.67487 13.4172 3.67487 12C3.67487 7.3711 7.37206 3.67389 12.001 3.67389ZM8.08288 7.9939C7.91557 7.9939 7.64796 8.05387 7.42285 8.29782C7.19775 8.54176 6.5022 9.18608 6.5022 10.48C6.5022 11.774 7.44522 13.0221 7.57156 13.1954C7.69789 13.3687 9.3584 15.9312 11.8615 17.0103C13.9058 17.8896 14.3632 17.8726 14.8565 17.7891C15.3499 17.7056 16.4142 17.1454 16.6142 16.5342C16.8142 15.9229 16.8142 15.395 16.751 15.2899C16.6877 15.1847 16.5135 15.1262 16.252 15.001C15.9905 14.8758 14.7024 14.2336 14.4583 14.1502C14.2142 14.0667 14.04 14.0251 13.8658 14.2865C13.6916 14.548 13.1776 15.1373 13.0244 15.3115C12.8712 15.4857 12.7181 15.5064 12.4565 15.3813C12.195 15.2562 11.3562 14.9755 10.3577 14.0842C9.57096 13.3768 9.03434 12.5018 8.88115 12.2404C8.72797 11.9789 8.8645 11.837 8.9966 11.7073C9.11502 11.5912 9.2592 11.4044 9.39219 11.2512C9.52519 11.0981 9.56676 10.9899 9.65005 10.8157C9.73334 10.6414 9.69177 10.4883 9.62513 10.3632C9.55848 10.238 9.04046 8.93623 8.8333 8.41262C8.64854 7.93547 8.45478 7.9939 8.2927 7.9939H8.08288Z" />
      </svg>
    </button>
  );
}
