import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, } from 'react-router-dom'
import EmployeeForm from '../Pages/EmployeeForm'
import EmployeeTable from '../Pages/EmployeeTable'



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<EmployeeForm />}/>
      <Route path='/AddEmployees' element={<EmployeeTable />} />
      </Route>
      
    )
)

function Navigation() {
  return (
<>
<RouterProvider router={router}/>
</>
)
}

export default Navigation