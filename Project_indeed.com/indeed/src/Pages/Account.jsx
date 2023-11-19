import "./account.css";
function Account(props) {
  return (
   <li className="dropdown-item">
     <img style={{width:"30px"}} src={props.image} />
     <a>{props.text}</a>
   </li>
  );
}

export default Account;