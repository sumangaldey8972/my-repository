import React, { useEffect, useState } from 'react'
import Adduser from './Adduser';

function GetUser() {
    const [data, setData] = useState([]);

    useEffect(()=>{
      getData();
    }, [])

    const getData=()=>{
      fetch("http://localhost:8000/data").then((res)=>{
        res.json().then((resp)=>{
          // console.log(resp)
          setData(resp)
        }).catch((err)=>{
          console.log(err)
        })
      })
    }



  return (
    <div>
        <h2>USERS</h2>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Address</td>
              <td>Department</td>
              <td>Salary</td>
              <td>maritial Status</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item)=>
              <tr key={item.id} >
                <td> {item.name} </td>
                <td> {item.age} </td>
                <td> {item.address} </td>
                <td> {item.department} </td>
                <td> {item.salary} </td>
                <td> {item.maritial_status ? "Married" : "Not Married"} </td>
              </tr>
              )
            }
          </tbody>
        </table>

        <Adduser getData={getData} />
    </div>
  )
}

export default GetUser