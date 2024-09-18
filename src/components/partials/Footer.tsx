import logo from "@/assets/image/logo/logo.png";

export default function Footer() {
  return (
    <footer className="rounded-lg shadow bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-16" alt=" Logo" />
            <span className="self-center text-lg font-bold  whitespace-nowrap text-white grid grid-cols-1 gap-x-4">
              <p>SIRDARYO YOSHLAR</p>
              <p>TEXNOPARKI</p>
            </span>
          </div>
         
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-400">
          © {new Date().getFullYear()}{" "}
         
            Sirdaryo yoshlar texnoparki
       
          .Barcha huquqlar himoyalangan
        </span>
      </div>
    </footer>
  );
}
