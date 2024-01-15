import React, { useState } from "react";
import axios from "axios";

function ProgramDetails({ programs, setPrograms }) {
  const [newProgram, setNewProgram] = useState({
    name: "",
    price: "",
    domain: "",
    program_type: "",
    registrations_status: false,
    description: "",
    placement_assurance: false,
    image_url: "",
    university_name: "",
    faculty_profile_url: "",
    learning_hours: 0,
    duration: "",
    certificate_diploma: "",
    eligibility_criteria: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setNewProgram({
      ...newProgram,
      [name]: inputValue,
    });
  };

  const addProgram = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/addprograms",
        newProgram
      );
      // Handle the response as needed
      console.log("Program added successfully:", response.data);
      setPrograms([...programs, response.data]);
      // You may want to update the UI or perform additional actions after successful addition
    } catch (error) {
      console.error(
        "Error adding program:",
        error.response?.data || error.message
      );
      // Handle errors or show user-friendly messages
      // You can access error details using error.response.data
    }
  };

  return (
    <div>
      <h1>ADD  NEW PROGRAM</h1>
      <form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Input Row */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProgram.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={newProgram.price}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="domain">Domain:</label>
          <input
            type="text"
            id="domain"
            name="domain"
            value={newProgram.domain}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="program_type">Program Type:</label>
          <input
            type="text"
            id="program_type"
            name="program_type"
            value={newProgram.program_type}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="registrations_status">Registrations Status:</label>
          <input
            type="checkbox"
            id="registrations_status"
            name="registrations_status"
            checked={newProgram.registrations_status}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newProgram.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="placement_assurance">Placement Assurance:</label>
          <input
            type="checkbox"
            id="placement_assurance"
            name="placement_assurance"
            checked={newProgram.placement_assurance}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={newProgram.image_url}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="university_name">University Name:</label>
          <input
            type="text"
            id="university_name"
            name="university_name"
            value={newProgram.university_name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="faculty_profile_url">Faculty Profile URL:</label>
          <input
            type="text"
            id="faculty_profile_url"
            name="faculty_profile_url"
            value={newProgram.faculty_profile_url}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="learning_hours">Learning Hours:</label>
          <input
            type="number"
            id="learning_hours"
            name="learning_hours"
            value={newProgram.learning_hours}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="duration">Duration:</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={newProgram.duration}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="certificate_diploma">Certificate/Diploma:</label>
          <input
            type="text"
            id="certificate_diploma"
            name="certificate_diploma"
            value={newProgram.certificate_diploma}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label htmlFor="eligibility_criteria">Eligibility Criteria:</label>
          <textarea
            id="eligibility_criteria"
            name="eligibility_criteria"
            value={newProgram.eligibility_criteria}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
</div>
<button
        type="button"
        onClick={addProgram}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4"
      >
        Add Program
      </button>

      </form>
    </div>
  );
}

export default ProgramDetails;