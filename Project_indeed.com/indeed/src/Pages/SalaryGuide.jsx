import "./pages.css";
import Industry from "./Industry";
export default function SalaryGuide(){
  return (
    <>
      <div id="salaryguideMain">
        <h1>Find career you will love</h1>
        <p>Explore which careers have the highest satisfaction, best salaries and more</p>
        <div id="salaryInp">
          <p style={{ fontWeight: "bolder" }}>What</p>
          <label htmlFor="what">
            <input type="text" id="what" />
          </label>
           <p style={{ fontWeight: "bolder" }}>Where</p>
          <label htmlFor="where">
            <input type="text" id="where" />
          </label>
          <button>Search</button>
        </div>
        
      </div>
      <div id="salaryguideMain2">
        <h2>Browse top-paying jobs by industry</h2>
        <select style={{ width: "300px", height: "30px", borderRadius: "10px" }} name="industry" id="industry">
          <option value="all industries">All Industries</option>
          <option value="agriculture, Fishing & Forestry">Agriculture, Fishing & Forestry</option>
          <option value="architecture & Engineering">Architecture & Engineering</option>
          <option value="Business Management">Business Management, Administrative & Customer Support</option>
          <option value="Cleaning & Grounds Maintenence">Cleaning & Grounds Maintenence</option>
          <option value="Community & Social Services">Community & Social Services</option>
          <option value="Construction & Extraction">Construction & Extraction</option>
          <option value="Education & Accounting">Education & Accounting</option>
          <option value="Food & Beverage">Food & Beverage</option>
          <option value="Healthcare">Healthcare</option>
        </select>
        <div id="industrylist">
          {
          Industry.map((industry) => (
            <div key={industry.id}>
              <h3>{industry.name}</h3>
              <h3 style={{ color: "#164081" }}>Average salary ₹ {industry.AverageSalary} per Year </h3>
              <a style={{textDecoration:"underline"}} href="none">Job openings</a>
            </div>
            
          ))
        }
        </div>
      </div>
      
    </>
  )
}