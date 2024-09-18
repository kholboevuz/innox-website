import logo from "@/assets/image/logo/logo.png"
import { DialogAuth } from "../Auth/DialogAuth"



export default function Navbar() {
  
  return (
    <nav className="bg-blue-950  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div
      
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src={logo}
          className="h-16"
          alt=" Logo"
        />
        <span className="self-center text-lg font-bold  whitespace-nowrap text-white grid grid-cols-1 gap-x-4">
         <p className="max-lg:text-sm">SIRDARYO YOSHLAR</p>
         <p className="max-lg:text-sm">TEXNOPARKI</p>
        </span>
      </div>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
       <DialogAuth/>
      </div>
    </div>
  </nav>
  
  )
}
