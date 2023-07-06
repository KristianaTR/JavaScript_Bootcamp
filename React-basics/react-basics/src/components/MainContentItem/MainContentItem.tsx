import "./MainContentItem.css";
import Button from "../../reusableComponents/Button/Button";
//@ts-ignore
import SeeMoreIcon from "../../assets/more.png";

//this is a typescript-->
interface MainContentItemProps {
    title: string;
    text: string;
    image: string;
}

const MainContentItem = ({title, text, image}: MainContentItemProps) => {

    return (
        <div className="MainContentItem">
            <h1>{title}</h1>
            <p>{text ? text : "No text"}</p> 
            <img className="MainContentItemImage" src={image} alt="" />
            <Button icon={SeeMoreIcon} text="SEE MORE"/>
            
        </div>
    )
}

export default MainContentItem;