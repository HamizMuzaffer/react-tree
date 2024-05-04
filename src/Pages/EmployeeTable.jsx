import React, { useState,useEffect } from 'react'
import { getEmployee } from '../Config/FirebaseServices'
import Table from '../Components/Table/Table';

function EmployeeTable() {
const [employees,setEmployee] = useState(null)

useEffect(  () => 
  { ( async()=>{
    const getEmployees = await getEmployee();
    setEmployee(getEmployees)

})();
  },
[])


if (!employees) return console.log(null) 

  return (
  <>
  <div className='flex justify-center items-center mt-48 w-full'>
<div className=' flex justify-center items-center'>
 <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"/>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Position
                </th>
                <th scope="col" className="px-6 py-3">
                    Reporting
                </th>
                <th scope="col" className="px-6 py-3">
                    View
                </th>
            </tr>
            {
       employees.map((employee,idx)=>{
     return <Table {...employee} />
       })
            }
        </thead>
  <table/>
    
  </div>
  </div>
  </>
  )
  }

export default EmployeeTable