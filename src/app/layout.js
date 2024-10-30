
import {
  ClerkProvider,
  
} from '@clerk/nextjs'

import "./globals.css";
import {Outfit} from "next/font/google"



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const outfit = Outfit({
  subsets : ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={ outfit.className }
      >
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}
