import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <div >
    <button 
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center text-center shadow-md hover:shadow-2xl"
    >
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center">
      <div><img src={plusImg} alt="create_event" className="w-7 h-7" /></div>
      
      <div><h1 className="pl-3 pr-7  text-center  text-white"> Create</h1></div>
      </div>
      </div>
    </button>
    </div>
  );
}
