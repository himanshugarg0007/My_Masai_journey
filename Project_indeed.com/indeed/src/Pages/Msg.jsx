import "./msg.css";
export default function Msg() {
  return (
    <div id='message'>
      <div id="msghead" >
        <h2>Messages</h2>
        <select id="filter">
          <option value="inbox">Inbox</option>
          <option value="archived">Archived</option>
          <option value="spam">Spam</option>
        </select>
        <hr style={{ width: '100%', color: "gray" }} />
      </div>
      <div id="msgbody">
        <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <img style={{ width: '90px',margin:"auto" }} src="https://cdn-icons-png.flaticon.com/512/2665/2665038.png" alt="logo" />
          <h2>Welcome to Messages</h2>
          <p>When an employer contacts you,
            you will see messages here.</p>
          <button style={{borderRadius:"10px",height:"40px",fontSize:"16px",backgroundColor:"#164081",color:"white",border:"none"}}>Find jobs</button>
          <button style={{borderRadius:"10px",height:"40px",fontSize:"16px",backgroundColor:"white",color:"#164081",border:"1px solid #164081"}}>Upload your CV</button>
        </span>
      </div>
    </div>
  )
}