import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assessment",
  description: "Assessment Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex w-full  bg-slate-100 gap-8 `}>
        <div className=" w-[15%] bg-white h-screen">
          <Sidebar />
        </div>
        <div className=" w-[85%] bg-white">{children}</div>
      </body>
    </html>
  );
}
