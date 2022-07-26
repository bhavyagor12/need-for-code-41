import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
export default function Sidebar() {
  return (
    <div className="flex flex-col">
    <aside className="border p-2 w-30 flex flex-col">
      <CreateEventButton />
      {/* <SmallCalendar />
      <Labels /> */}
    </aside>
    </div>
  );
}
