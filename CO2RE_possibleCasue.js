function possible_cause(frm) {
 
    var posc = frm.selectpart.selectedIndex;
    

    switch( posc ){
       case 0:
         frm.posc.value = 'Possible Casue';
         break;
       case 1:
         frm.posc.value = '1. Damaged/defective power supply';
         break;
       case 2:
         frm.posc.value = '1. Bad black box\n2. Loose or bad wiring';
         break;
       case 3:
         frm.posc.value = '1. Bad black box';
         break;
       case 4:
         frm.posc.value = '1. Bad touch screen\n2. I/O is not saving the touch screen parameters';
         break;
       case 5:
         frm.posc.value = '1. Harness upgrade needed';
         break;
       case 6:
         frm.posc.value = '1. Display is defective\n2. CPU is defective';
         break;
       case 7:
         frm.posc.value = '1. Software bug\n2. Damaged black box ';
         break;
       case 8:
         frm.posc.value = '1. Error stating the Power Supply is not supplying the correct voltage to I/O';
         break;
       case 9:
         frm.posc.value = '1. Error stating the thermosensor on laser module is not reading the correct temperature';
         break;
       case 10:
         frm.posc.value = '1. No Laser energy is being emitted from Laser Tube';
         break;
       case 11:
         frm.posc.value = '1. Emergency Button is stuck';
         break;
       case 12:
         frm.posc.value = '1. Error stating Foot Switch is not connected';
         break;
       case 13:
         frm.posc.value = '1. Error stating that the interlock is not connected';
         break;
       case 14:
         frm.posc.value = '1. Error stating that the key is not turned to the right. Key is another interlock on system';
         break;
       case 15:
         frm.posc.value = '1. Error states that foot switch pedal is stuck or in depressed position.';
         break;
       case 16:
         frm.posc.value = '1. Shutter is not working correctly';
         break;
       case 17:
         frm.posc.value = '1. Error stating that jumping lens did not retract';
         break;
       case 18:
         frm.posc.value = '1. Error stating that jumping lens did not open properly';
         break;
       case 19:
         frm.posc.value = '1. Error comes up because initialization of CW Laser Power reading is not within 20 percent of previously saved calibration on low end\n2. Error may come up if system hasn’t been used for a while';
         break;
       case 20:
         frm.posc.value = '1. Error comes up because initialization of CW Laser Power reading is not within 20 percent of previously saved calibration on high end';
         break;
       case 21:
         frm.posc.value = '1. Error comes up because initialization of Pulsed Laser Power reading is not within 20 percent of previously saved calibration on low end';
         break;
       case 22:
         frm.posc.value = '1. Error comes up because initialization of Pulsed Laser Power reading is not within 20 percent of previously saved calibration on high end';
         break;
       case 23:
         frm.posc.value = '1. Error means that there is no saved calibration data';
         break;
       case 24:
         frm.posc.value = '1. No Laser energy is being emitted from Laser Tube';
         break;
    }
    
    return true;
}