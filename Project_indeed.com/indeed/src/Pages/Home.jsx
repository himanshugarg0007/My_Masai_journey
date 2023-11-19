import Footer from '../Components/Footer'
import Job_feed from './Job_feed'
import { useContext, useState } from 'react'
import Recent_search from './Recent_search'
import "./pages.css";
import { LoginContext } from '../Context/LoginContext';
export default function Home() {
  let [showfeed, setShowfeed] = useState(false);
  let [showsearch, setShowsearch] = useState(false);
  let {login}= useContext(LoginContext);
  function handlefeed() {
    setShowfeed(true);
    setShowsearch(false);
  }
  function handlesearch() {
    setShowsearch(true);
    setShowfeed(false);
  }
  
  return (
    <>
      <div id='home'>
        <input type="text" placeholder="Job title, keyword or company" />
        <input type="text" placeholder='city, state code or "remote"'/>
        <button>Find job</button>
      </div>

      <div style={{ display: 'flex', gap: '100px', margin: "auto", marginTop: '20px', justifyContent: 'center' }}>
        <button className='jobbutton' onClick={handlefeed}>Job feed</button>
        <button className='jobbutton' onClick={handlesearch}>Recent search</button>
      </div>
      <br />
      <div className='job'>

        {login && showfeed && <Job_feed />}
        {login && showsearch && <Recent_search />}
      </div>

      <Footer />
    </>
  )
}