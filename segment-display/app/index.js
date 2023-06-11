// import clock from "clock";
// import * as document from "document";
// import { preferences } from "user-settings";
import { HeartRateSensor } from "heart-rate";
import { FitFont } from 'fitfont'


import { me as appbit } from "appbit";
import { today } from "user-activity";



const hrLabel = new FitFont({ 
    id:'hr_label',
    font:'14_Segment_LED_170',
    halign: 'middle',
    valign: 'baseline',
    letterspacing: 0
})

const stepLabel = new FitFont({ 
    id:'step_label',
    font:'14_Segment_LED_100',
    halign: 'middle',
    valign: 'baseline',
    letterspacing: 0
})

var hrm = new HeartRateSensor();
hrm.onreading = function() {
    // console.log("Current heart rate: " + hrm.heartRate);
    // console.log("heartrate type: ", typeof hrm.heartRate);
    hrLabel.text = String("___" + hrm.heartRate).slice(-3);
}
hrm.start();


if (appbit.permissions.granted("access_activity")) {
//    console.log(today.adjusted.steps);
//    console.log("steps type: ", typeof today.adjusted.steps);
   stepLabel.text = String("_____" + today.adjusted.steps).slice(-5)
}