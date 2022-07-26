import React, { useState, useContext, useEffect } from "react";
import "./Calender.css";
import { getMonth } from "./utils";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
function Calender() {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <div className="bg-white w-100vw  h-screen ">
            {showEventModal && <EventModal />}
            <div className="h-screen w-100vw  flex flex-col z-100">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currenMonth} />
                </div>
            </div>
        </div>
    );
}

export default Calender;