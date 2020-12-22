import React from 'react';

const YogaCard = (poseInfo)=> {
    return(
        <div>
            <h1>{poseInfo.poseInfo.term}</h1>
            <img src={poseInfo.poseInfo.preview_url}/>
        </div>
        
    );
}
export default YogaCard;