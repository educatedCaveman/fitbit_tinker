// import clock from "clock";
// import * as document from "document";
// import { preferences } from "user-settings";
import { HeartRateSensor } from "heart-rate";
import { FitFont } from 'fitfont'


import { me as appbit } from "appbit";
import { today } from "user-activity";

function zeroPad(i) {
  if (i < 100) {
    i = "0" + i;
  }
  return i;
}


const hrBG = new FitFont({ 
    id:'hr_background',
    // font:'LED_Counter_7_170',
    font:'Repetition_Scrolling_170',
    halign: 'middle',
    valign: 'baseline',
    letterspacing: 0
})
hrBG.text = "███";

const stepBG = new FitFont({ 
    id:'step_bg',
    // font:'LED_Counter_7_100',
    font:'Repetition_Scrolling_100',
    halign: 'middle',
    valign: 'baseline',
    letterspacing: 0
})
stepBG.text = "█████";

const hrLabel = new FitFont({ 
    id:'hr_label',
    // font:'LED_Counter_7_170',
    font:'Repetition_Scrolling_170',
    halign: 'end',
    valign: 'baseline',
    letterspacing: 0
})

const stepLabel = new FitFont({ 
    id:'step_label',
    // font:'LED_Counter_7_100',
    font:'Repetition_Scrolling_100',
    halign: 'end',
    valign: 'baseline',
    letterspacing: 0
})

var hrm = new HeartRateSensor();
hrm.onreading = function() {
    // console.log("Current heart rate: " + hrm.heartRate);
    hrLabel.text = hrm.heartRate;
}
hrm.start();


if (appbit.permissions.granted("access_activity")) {
//    console.log(`${today.adjusted.steps} Steps`);
//    console.log("Current steps: " + today.adjusted.steps);
   stepLabel.text = today.adjusted.steps;
}