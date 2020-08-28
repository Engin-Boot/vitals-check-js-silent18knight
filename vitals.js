function vitalsAreOk(bpm, spo2, respRate) {
    let isBpOk =  bpIsOk(bpm);
    let isVitalOk = spo2IsOk(spo2);
    let isRespRateOk = respRateIsOk(respRate);
     return isBpOk && isVitalOk && isRespRateOk;
 }
 

function bpIsOk(bpm) {
    if(bpm<70) {
        console.log('BP is low')
        return false;
    }
    else if(bpm > 150) {
        console.log('BP is High')
        return false;
    } 
    console.log('BP is normal');
    return true;    
}

function spo2IsOk(spo2) {
    if(spo2<90) {
        console.log('spo2 is not normal')
        return false;
    } 
    console.log('spo2 is normal');
    return true;    
}
function respRateIsOk(respRate) {
    if(respRate<30){
        console.log('respRate is low');
        return false;
    }
    else if(respRate > 95) {
        console.log('respRate is High')
        return false;
    } 
    console.log('respRate is normal');
    return true;    
}

module.exports={vitalsAreOk,bpIsOk,spo2IsOk,respRateIsOk};