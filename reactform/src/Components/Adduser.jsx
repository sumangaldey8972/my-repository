import React, { useState } from 'react'


const initalForm = {
  name: "",
  address: "",
  age: "",
  department: "",
  salary: "",
  maritial_status: false
}

function Adduser({ getData }) {
  const [formData, setFormData] = useState(initalForm)


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    const valueToCheck = type == "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: valueToCheck
    })
  }

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     console.log(formData);
  //     try {
  //       const res = await fetch("http://localhost:8000/data", {
  //         method: "POST",
  //         body: JSON.stringify(formData),
  //         headers: {
  //           "Accept" : "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     getData(formData);
  //   // };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = fetch("http://localhost:8000/data", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:"Sd"
      })
    })
    // console.log(await res.json())

  }

  return (
    <div>
      <h2>ADD User From Here</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Enter name' name="name" value={formData.name} onChange={handleChange} /><br /><br />
        <input type="number" placeholder='Enter Age' name="age" value={formData.age} onChange={handleChange} /> <br /> <br />
        <input type="text" placeholder='Enter Address' name="address" value={formData.address} onChange={handleChange} /> <br /> <br />
        <select name="department" value={formData.department} defaultValue={formData.department} onChange={handleChange} >
          <option value="">Select Department</option>
          <option key="FrontEnd Developer">FrontEnd Developer</option>
          <option key="BackEnd Developer">BackEnd Developer</option>
        </select> <br /> <br />
        <input type="number" placeholder='Enter Salary' name="salary" value={formData.salary} onChange={handleChange} /> <br /> <br />
        <input type="checkbox" checked={formData.maritial_status} onChange={handleChange} name="maritial_status" /> <span>Maritual Status</span> <br /> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Adduser