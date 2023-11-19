import  Account  from '../Pages/Account'
import  CompanyReview  from '../Pages/CompanyReview'
import  Home  from '../Pages/Home'
import  Msg  from '../Pages/Msg'
import  Notification  from '../Pages/Notification'
import  SalaryGuide  from '../Pages/SalaryGuide'
import  EmpORpost  from '../Pages/EmpORpost'
import { Routes, Route } from 'react-router-dom'
import Login from "../Pages/Login";
export default function All_Routes (){
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/msg' element={<Msg/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/salaryguide' element={<SalaryGuide/>}/>
        <Route path='/companyreview' element={<CompanyReview/>}/>
        <Route path='/emporpost' element={<EmpORpost/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    
  )
}
