import "./TopBar.css";
import Button from "../../reusableComponents/Button/Button";
//@ts-ignore
import LoginIcon from "../../assets/login.png";
//@ts-ignore
import RegisterIcon from "../../assets/register.png";

const Topbar = () => {
  return (
    <div className="Topbar">
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
      <Button text="HOME"/>
      <Button text="PRODUCTS"/>
      <Button buttonColor="green" icon={LoginIcon} text="LOGIN"/>
      <Button buttonColor="green" icon={RegisterIcon} text="REGISTER"/>
    </div>
  )
}

export default Topbar