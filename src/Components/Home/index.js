import React, { useState } from "react";
import ProgramList from "../ProgramList";
import ProgramDetails from "../ProgramDetails";

function Home() {
  const [programs, setPrograms] = useState([]);
  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-200">
        <ProgramList programs={programs} setPrograms={setPrograms} />
      </div>
      <div className="w-3/4 p-4">
        <ProgramDetails setPrograms={setPrograms} programs={programs} />
      </div>
    </div>
  );
}

export default Home;