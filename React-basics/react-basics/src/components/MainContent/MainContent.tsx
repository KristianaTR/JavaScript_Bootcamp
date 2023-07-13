import "./MainContent.css";
import MainContentItem from "../MainContentItem/MainContentItem";

const MainContent = () => {
  return (
    <div className="MainContent">
      <MainContentItem 
        title='Cool cat' 
        text='text 1 lorem lorem lorem' 
        image="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSGUCQ28-h_UPi-YHJcWhj5vxcZx1uJYa_5C93Z7HDgrrRgS90rSWGQm_NxP05pivGLEHKwL715Y3orEyU"
        id= '1'
      />
      <MainContentItem 
        title='Lusija' 
        text='text 2 lorem lorem lorem' 
        image="https://d10cwkh5vigpd0.cloudfront.net/wp-content/uploads/2022/12/lina-angelov-Ah_QC2v2alE-unsplash-1200x960.jpg"
        id= '2'
      />
      <MainContentItem 
        title='Cracker' 
        text='text 3 lorem lorem lorem' 
        image="https://images.ctfassets.net/cnu0m8re1exe/jmlLabf8AlF5p7MDfMTe4/1d1ecc3344ab5695381fe7fd6b17b404/shutterstock_1834094695.jpg"
        id= '3'
      />     
    </div>
  )
}

export default MainContent