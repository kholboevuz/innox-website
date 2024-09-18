
import { FaUsers } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
export default function Stats() {
  return (
    <div className="mt-20 mb-20 flex flex-wrap justify-center items-center gap-11 ">
    {/* Comments */}
    <div
      
      className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
    >
      <div className="flex flex-row items-center justify-center gap-3">
      <FaUsers className="text-3xl text-white" />
        <span className="font-bold text-white text-4xl"> 30 </span>
      </div>
      <div className="mt-2 text-lg text-gray-400">Ishtirokchilar</div>
    </div>
    {/* Projects */}
    <div
    
      className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
    >
      <div className="flex flex-row items-center justify-center gap-3">
       <GoProjectRoadmap className="text-3xl text-white" />
       <span className="font-bold text-white text-4xl"> 45 </span>
      </div>
      <div className="mt-2 text-lg text-gray-400">Loyihalar</div>
    </div>
    {/* Projects */}
  
  </div>
  
  )
}
