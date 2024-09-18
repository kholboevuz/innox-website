import video from "@/assets/video/video.mp4";
import { DialogAuth } from "@/components/Auth/DialogAuth";
import Faq from "@/components/Faq/Faq";
import Stats from "@/components/Stats/Stats";


export default function Home() {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="w-full md:w-[70%] m-auto mt-20  items-center ">
        <div className="items-center h-screen">
          <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
            <div className="max-w-2xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl text-white">
                Sirdaryo yoshlar texnoparki{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  InnoX Biznes inkubatsiya va akseleratsiya dasturi
                </span>{" "}
              </h1>
              <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                «INNO X» biznes-inkubatsiya dasturiga qatanashish uchun bizga o'z startup loyihangizni yuboring.
              </p>

              <br />
              <DialogAuth/>
            </div>
            <div>
              <video
                className="w-full md:w-80 border border-gray-200 rounded-lg dark:border-gray-700"
                autoPlay
                controls
                loop
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
           

          </div>
          <div className="max-lg:hidden">
          <Stats/>
          </div>
         
        </div>
      </div>
      <div className="md:w-[70%] m-auto max-lg:mt-5">
        <h1 className="text-5xl font-bold mb-10 text-center">Ko'p beriladigan savollar</h1>
        <Faq/>
      </div>
     
    
    </>
  );
}
