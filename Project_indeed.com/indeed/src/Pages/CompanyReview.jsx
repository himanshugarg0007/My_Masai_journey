import "./pages.css";
import companylist from "./companyDB.js";
export default function CompanyReview() {
  return (
    <div id="companyreviewMain">
      <h1 >Find great places to work</h1>
      <h3 >Get access to millions of company reviews</h3>
      <div id="findInput">
        <label htmlFor="companyname"> <p >Company name or job title</p>
          <input type="text" id="companyname" style={{ width: "300px", height: "30px", borderRadius: "10px" }} />
        </label>
        <button style={{ marginLeft: "10px", marginTop: "50px", borderRadius: "10px", paddingLeft: "20px", paddingRight: "20px", fontSize: "20px", backgroundColor: "#164081", color: "white", border: "none", fontWeight: "bolder", cursor: "pointer", height: "35px" }}>Find Companies</button>
      </div>
      <div style={{ marginTop: "30px" }}>
        <a href="" target="_blank" rel="noopener noreferrer">Do you want to search for salary?</a>
        <h1>Popular Companies</h1>
        <div id="popularcompanylist">
          {companylist.map((company) => (
            <div key={company.id}>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <img style={{ borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }} src={company.logo} width="40" alt={company.name} />
                <p style={{ fontWeight: "bolder" }}>{company.name}</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a style={{ fontSize: "14px" }} href="">Salaries</a>
                <a style={{ fontSize: "14px" }} href="">Questions</a>
                <a style={{ fontSize: "14px" }} href="">Open jobs</a>
              </div>
            </div>

          ))}
        </div>
        <h1>Compare working at</h1>
        
      </div>
    </div>
  )
}