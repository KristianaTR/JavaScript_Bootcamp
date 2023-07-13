import "./MainContentItem.css";
import Button from "../../reusableComponents/Button/Button";
//@ts-ignore
import SeeMoreIcon from "../../assets/more.png";
import { useState } from "react";

//this is a typescript-->
interface MainContentItemProps {
    title: string;
    text: string;
    image: string;
    id: string;
}

const MainContentItem = ({title, text, image, id}: MainContentItemProps) => {

    const [item, setItem]: any = useState("");
    console.log(item);
    return (
        <div className="MainContentItem">
            { item === id && (
                <img 
                    className="MainContentItemIcon" 
                    src="https://img.icons8.com/?size=512&id=1501&format=png" 
                    alt="icon_plus" 
                />
                )        
            }            
            <h1>{title}</h1>
            <p>{text ? text : "No text"}</p> 
            <img onClick={()=> console.log(`Item named: ${title} has been clicked`)} className="MainContentItemImage" src={image} alt="" />
            <Button 
                setItem={setItem}
                id={id}
                icon={SeeMoreIcon} 
                text="SEE MORE"
            />
            
        </div>
    )
}

export default MainContentItem;