function possible_cause(frm) {
 
    var posc = frm.selectpart.selectedIndex;
    

    switch( posc ){
       case 0:
         frm.posc.value = 'Possible Casue';
         break;
       case 1:
         frm.posc.value = '1. Needles are retracted immediately after deployment\n2. Optical sensors misalignment within the handpiece.';
         break;
       case 2:
         frm.posc.value = '1. Initial temperature checks or temperature elevation is off 5 times in a row for the same pair.\n2. Pairs are deactivated when they arent consistent.\n3. Other pairs are still active.';
         break;
       case 3:
         frm.posc.value = '1. The impedance of the same pair fail to be within the acceptable zone for more 10 times in a row.';
         break;
       case 4:
         frm.posc.value = '1. There is an intermittent connection between the handpiece and cartridge.';
         break;
       case 5:
         frm.posc.value = '1. The ambient temperature is measured inside the cartridge.\n2. The measured ambient temperature is higher than 35degrees C.';
         break;
       case 6:
         frm.posc.value = '1. The cold junction is measureing a very low temperature.';
         break;
       case 7:
         frm.posc.value = '1. Indicates that the position sensors have failed.\n2. This error can also be seen while performing tratments.';
         break;
       case 8:
         frm.posc.value = '1. There was an error in the state of the handpiece*s optical switches.\n2. Position of the sled is off.';
         break;
       case 9:
         frm.posc.value = '1. Motor has jammed/Failed.\n2. The user attached the cartridge when the needles were already deployed.';
         break;
       case 10:
         frm.posc.value = '1. Real time clock is not remembering its setting.';
         break;
       case 11:
         frm.posc.value = '1. Touch screen is out of calibration and needs to be calibrated.';
         break;
       case 12:
         frm.posc.value = '1. The hardware power suppy ok signal indicates one or more of the power supplise are not operating within the specificed limits.';
         break;
    }
    
    return true;
}