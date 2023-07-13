import "./TopBar.css";
import Button from "../../reusableComponents/Button/Button";
//@ts-ignore
import LoginIcon from "../../assets/login.png";
//@ts-ignore
import RegisterIcon from "../../assets/register.png";
import { useState } from "react";

const Topbar = () => {
  const [topbarItem, setTopbarItem] = useState("");
  console.log(topbarItem);
  return (
    <div className="Topbar">
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
      <Button 
        id='topbar-home' 
        setItem={setTopbarItem} 
        text="HOME"
      />
      <Button 
        id='topbar-products' 
        setItem={setTopbarItem} 
        text="PRODUCTS"
      />
      <Button 
        id='topbar-login'  
        setItem={setTopbarItem} 
        buttonColor="green" 
        icon={LoginIcon} 
        text="LOGIN"
      />
      <Button 
        id='topbar-register' 
        setItem={setTopbarItem} 
        buttonColor="green" 
        icon={RegisterIcon} 
        text="REGISTER"
      />
    </div>
  )
}

export default Topbar