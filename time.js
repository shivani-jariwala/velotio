const smallerAngle = (hours,minutes) => {

    //angle made by each hour hand = 360/12 = 30 degree
    hDegree = 30*hours; //hour hand angle

    //nearest hour hand angle from zero 
    if(hDegree < 180) {
        hDifference = hDegree;
    }else{
        hDifference = 360 - hDegree;
    }

    //angle made by minute hand 360/60 = 6
    mDegree = 6 * minutes; //minute hand angle
    
    //nearest minute hand angle from zero
    if(mDegree < 180 ){
        mDifference = mDegree;
    }else{
        mDifference = 360 - mDegree;
    }

    if(hours >= 6 && minutes >= 30 || hours < 6 && minutes < 30 ){
        //for cases when both hour and minutes hand are on same side
        return Math.abs(hDifference-mDifference);   
    }else{
        difference = hDifference + mDifference;
        if(difference > 180){
            //for cases when both hour and minutes hand are on different side and smallest angle
            return 360 - difference;
        }else{
            //for cases when both hour and minutes hand are on different side 
            return difference;
        }
        
    } 
}
console.log(smallerAngle(6,21));