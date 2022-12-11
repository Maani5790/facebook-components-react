import FbImageLibrary from 'react-fb-image-grid'
export default function FbPost(props){
    const {title, date ,images , username, ProfilePic} = props.post


    // const images = [
    //     'https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png',
    //     'https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png',
    //     'https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png',
    //     'https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png',
    //     'https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png',
    //     'https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png',
    //     'https://pbs.twimg.com/media/Etow5MkVcAAWo3t.png',
        // "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR9REHdy5OOzjQe-F_ed6RCHlTYaPwLSENDzIon44-66mHqr-o7XUpX1-H2a6Z7yOphPmRSumLK1u1GKBo",
        
        

    // ]
    return (
    

            <div style={{background: 'white', width:'500px', border:'1px solid black'}}>
            <img style={{borderRadius : '50%'}} width='40' height='40' src={(ProfilePic)} /> 

            <p style={{color: 'black'}}>{username}</p>
            <p style={{color: 'black'}}>{JSON.stringify(new Date())}</p>


            <p style={{color: 'black'}}>{title}</p>
            
            <div style={{width:'100%'}}>
            <FbImageLibrary images={images}/>


            </div>

        </div>
    )
}




