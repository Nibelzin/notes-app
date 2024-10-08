import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: 'Dinamic Notes',
  description: 'Developed by Luan Santos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col justify-between">
        <Header></Header>
        <div className="p-10 h-full overflow-y-auto bg-slate-50 dark:bg-zinc-900 transition-colors">
          <Toaster position="top-right" containerStyle={{top:70, right:50}}/>
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
