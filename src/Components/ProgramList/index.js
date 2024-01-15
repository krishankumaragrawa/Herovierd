// ProgramList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgramList = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get('http://localhost:3001/programs');
        setPrograms(response.data);
      } catch (error) {
        console.error('Error fetching programs:', error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className="flex flex-col w-1/4 p-4 bg-gray-200">
      <h2 className="text-xl font-bold mb-4">Programs</h2>
      <ul>
        {programs.map((program) => (
          <li key={program.program_id} className="mb-2">
            {program.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramList;