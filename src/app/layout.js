"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Montserrat, Caveat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/global.css";
import "./assets/css/global-responsiveness.css";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600", "700"],
});

function ScrollToTop({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return children;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>
        <ScrollToTop>
          {children}
        </ScrollToTop>
      </body>
    </html>
  );
}
