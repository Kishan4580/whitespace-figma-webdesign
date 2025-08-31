// import { Geist, Geist_Mono } from "next/font/google";
import  {inter} from "@/app/ui/fonts"
import "./globals.css";



export const metadata = {
  title: "My First Figma Design Website",
  description: "Created by Kishan Rajput with the help of Next.js framework of React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
