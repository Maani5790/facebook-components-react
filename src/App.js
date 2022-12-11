import React from "react";
import "./App.css";
import FbPost from "./component/FbPost";

function App() {
  const post =[

    {
      title: "Today had lunch at Kolachi",
      date: new Date(),
      images: [
        "https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png",
        "https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png",
        "https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png",
        "https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png",
        "https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png",
      ],
  
      ProfilePic: "https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png",
      username: "Rehman",
    },

    {
      title: "Going To Party",
      date: new Date(),
      images: [
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        
      ],
  
      ProfilePic: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
      
      username: "Maani",
    },

    {
      title: "Today had dinner at defence",
      date: new Date(),
      images: [
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        
      ],
  
      ProfilePic: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
      
      username: "Maani",
    },{
      title: "Today had dinner at defence",
      date: new Date(),
      images: [
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        
      ],
  
      ProfilePic: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
      
      username: "Maani",
    },
    
    



  ] 

  


  
  


  return (
    <div className="App">
      <header className="App-header">
      {post.map(post =>{
        return <FbPost post={post} />
      })}
      </header>
    </div>
  );
}

export default App;
