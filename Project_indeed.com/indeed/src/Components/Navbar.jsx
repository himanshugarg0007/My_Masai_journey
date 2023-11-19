import { Link } from 'react-router-dom'
import './navbar.css'
import { useContext, useState } from 'react'
import { LoginContext } from '../Context/LoginContext'
import Account from '../Pages/Account';
export default function Navbar() {
  const { login, setlogin } = useContext(LoginContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <div id='navbar'>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img style={{ width: '30px' }} src="https://cdn.icon-icons.com/icons2/2389/PNG/512/indeed_logo_icon_145170.png" alt="" />
            <h1 style={{ color: 'blue', fontSize: '30px' }}>Indeed</h1>
            <img style={{ width: '50px' }} src="https://c03.s3.indeed.com/dist/header/ukraine_support.7ad2b5d444bc427dbc5d.png" alt="logo" />

          </span>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginLeft: 'px' }}>
            <Link to='/'>Home</Link>
            <Link to='/companyreview'>CompanyReview</Link>
            <Link to='/salaryguide'>SalaryGuide</Link>
          </div>

        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {
            login ? <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Link to='/msg'><img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/24/filled-chat.png" alt="filled-chat" /></Link>
              <Link to='/notification'><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/appointment-reminders.png" alt="appointment-reminders" /></Link>
              <div>
                <div className='menu-trigger'>
                  <button onClick={() => setShow(!show)} style={{ border: "none", background: "none",cursor:"pointer" }}><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/user.png" alt="user" /> </button>

                </div>
                <div className='dropdown-menu'>
                  {show && <ul>
                    <Account image={"https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"} text={"Profile"} />
                    <Account image={"https://png.pngtree.com/element_our/20190523/ourmid/pngtree-red-promotion-price-tag-image_1082174.jpg"} text={"MY job"} />
                    <Account image={"https://static.thenounproject.com/png/105576-200.png"} text={"My review"} />
                    <Account image={"https://cdn-icons-png.flaticon.com/512/3524/3524659.png"} text={"Setting"} />
                    <Account image={"https://icons.veryicon.com/png/o/internet--web/beijing-ui-gallery/help-center-2.png"} text={"Help center"} />
                    <hr />
                    <p style={{ textAlign: "center", fontSize: "12px" }}>© 2023 Indeed - Cookies - Privacy - Terms - Privacy Centre - Accessibility at Indeed</p>
                    <button onClick={() => setlogin(false)} style={{ borderRadius: "10px", height: "40px", fontSize: "16px", backgroundColor: "white", color: "#164081", border: "1px solid #164081", width: "100%",cursor:"pointer" }}>Sign out</button>
                  </ul>}


                </div>
              </div>




            </div> : <div>
              <Link style={{ color: 'blue' }} to='/login'>Sign in</Link>
            </div>
          }

          <div style={{}}>|</div>
          <div>
            <Link to='/emporpost'>Employers / Post Job</Link>
          </div>
        </div>


      </div>
      <hr />
    </>
  )
}
