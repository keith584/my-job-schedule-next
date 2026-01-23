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


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
