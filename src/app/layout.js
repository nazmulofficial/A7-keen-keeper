import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "KeenKeeper",
  description: "Friend relationship tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
   
          {children}

        <Toaster />
      </body>
    </html>
  );
}