// remover enternal server error use bleow dns
// when its need 
  // import dns from 'node:dns';
  // dns.setServers(['8.8.8.8' , '8.8.4.4'])


import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
    weight: ["400", "600", "700"],

});


export const metadata = {
  title: "dragon news -",
  description: "Best news portal in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
       data-theme = 'light'
      className={` ${poppins.className} h-full antialiased`}
    >
      <body className={`  min-h-full flex flex-col`}>
        {children}
        </body>
    </html>
  );
}
