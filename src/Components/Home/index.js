import React, { useState } from 'react';
import ProgramList from '../ProgramList';
import ProgramDetails from '../ProgramDetails';

function Home() {
  
  return (
    <div className="flex">
      <div className="w-1/4 p-4 bg-gray-200">
        <ProgramList />
      </div>
      <div className="w-3/4 p-4">
        <ProgramDetails />
      </div>
    </div>
  );
}

export default Home;
