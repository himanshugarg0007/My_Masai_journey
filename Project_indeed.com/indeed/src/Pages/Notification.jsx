
export default function Notification(){
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"10px",marginTop:"200px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", height:"400px",width:"70%",borderRadius:"10px",margin:"auto",padding:"50px"}}>
      <img style={{width:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTHij2DtbVhXtUcNTxjBtDSXhsxrqrD2uL8wNfVDAJNZ0k32r7fpLC7YfwycrHS4KDcg&usqp=CAU" alt="logo" />
      <h2>Nothing right now. Check back later!</h2>
      <p>This is where we’ll notify you about your job applications and other useful information to help you with your job search.</p>
      <button style={{borderRadius:"10px",width:"250px",height:"40px",fontSize:"16px",backgroundColor:"#164081",color:"white",border:"none",padding:"5px"}}>Find job</button>
    </div>
  )
}