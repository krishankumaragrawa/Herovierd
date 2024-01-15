import axios from 'axios';
import React, { Fragment, useState } from 'react';

function Update({item}) {
    console.log(item);
    const [updatedProgram, setUpdatedProgram] = useState({
        name: item.name,
        price: item.price,
        domain: item.domain,
        program_type: item.program_type,
        registrations_status: item.registrations_status,
        descriptions: item.descriptions,
        placement_assurance: item.placement_assurance,
        image_url: item.image_url,
        university_name: item.university_name,
        faculty_profile_url: item.faculty_profile_url,
        learning_hours: item.learning_hours,
        duration: item.duration,
        certificate_diploma: item.certificate_diploma,
        eligibility_criteria: item.eligibility_criteria,
      });
   
    
      const updateProgram = async (e) => {
        e.preventDefault();
        try {
            
          const response = await axios.put(
            `http://localhost:3001/programs/${item.program_id}`,
            updatedProgram
          );
          console.log(response.data.message);
          // You can handle the response as needed
        } catch (error) {
          console.error("Error updating program:", error);
        }
      };
  return (
    <Fragment>
    
<button type="button" class="btn btn-primary" data-toggle="modal"  data-target={`#id${item.program_id}`}>
  Update
</button>


<div class="modal" id={`id${item.program_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

     
      <div class="modal-header">
        <h4 class="modal-title">Program name</h4>
        <button type="button" class="close" data-dismiss="modal">
            &times;
            </button>
      </div>

   
      <div class="modal-body">
      <label>Name:</label>
        <input
          type="text"
          name="name"
          value={updatedProgram.name}
          onChange={(e) => setUpdatedProgram(e.target.value)}
        />
        <label>Domain:</label>
  <input
  type="text"
  name="domain"
  value={updatedProgram.domain}
  onChange={(e) => setUpdatedProgram(e.target.value)}
 />

<label>Program Type:</label>
<input
  type="text"
  name="program_type"
  value={updatedProgram.program_type}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Registrations Status:</label>
<input
  type="text"
  name="registrations_status"
  value={updatedProgram.registrations_status}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Descriptions:</label>
<input
  type="text"
  name="descriptions"
  value={updatedProgram.descriptions}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Placement Assurance:</label>
<input
  type="text"
  name="placement_assurance"
  value={updatedProgram.placement_assurance}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Image URL:</label>
<input
  type="text"
  name="image_url"
  value={updatedProgram.image_url}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>University Name:</label>
<input
  type="text"
  name="university_name"
  value={updatedProgram.university_name}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>
<label>Faculty Profile URL:</label>
<input
  type="text"
  name="faculty_profile_url"
  value={updatedProgram.faculty_profile_url}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Learning Hours:</label>
<input
  type="text"
  name="learning_hours"
  value={updatedProgram.learning_hours}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Duration:</label>
<input
  type="text"
  name="duration"
  value={updatedProgram.duration}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Certificate/Diploma:</label>
<input
  type="text"
  name="certificate_diploma"
  value={updatedProgram.certificate_diploma}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>

<label>Eligibility Criteria:</label>
<input
  type="text"
  name="eligibility_criteria"
  value={updatedProgram.eligibility_criteria}
  onChange={(e) => setUpdatedProgram(e.target.value)}
/>  
      </div>

      
      <div class="modal-footer">
      <button type="button" class="btn btn-danger"  data-dismiss="modal"  onClick={(e) => updateProgram(e)}>
  Edit
</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

    </Fragment>
  )
}

export default Update
