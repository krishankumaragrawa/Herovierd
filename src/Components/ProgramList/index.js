import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "./update";

const ProgramList = ({ programs, setPrograms }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Delete program function
  const deleteProgram = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/programs/${id}`);
      setPrograms(programs.filter((program) => program.program_id !== id));
    } catch (error) {
      console.error("Error deleting program:", error);
    }
  };

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/programs");
        setPrograms(response.data);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  const filteredPrograms = programs.filter((program) =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
    <h1 className="text-2xl font-bold mb-4">Programms</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by program name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>View Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {filteredPrograms.map((item) => (
          
            <tr key={item.program_id}>
              <td>{item.name}</td>
              <td>{item && <Update item={item} />}</td>
              <td>
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => deleteProgram(item.program_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

export default ProgramList;
