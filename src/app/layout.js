import "./globals.css";

import { FriendProvider } from "./FriendContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="h-full">

      <body className="min-h-screen flex flex-col">

        <FriendProvider>

          {children}

        </FriendProvider>

        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1d5a46",
              color: "#fff",
              borderRadius: "12px",
              padding: "14px 18px",
            },
          }}
        />

      </body>
    </html>
  );
}