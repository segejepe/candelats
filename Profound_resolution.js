function resolu(frm) {
 
    var resol = frm.selectpart.selectedIndex;
    

    switch( resol ){
       case 0:
         frm.resol.value = 'Resolution';
         break;
       case 1:
         frm.resol.value = '1. Take off cartrdige\n2. Manually extract and retract the needles\n3. Place cartridge back on\n4. If problemm persists, send a replacement handpiece.';
         break;
       case 2:
         frm.resol.value = '1. Visually have customer check the needles for bent or missing needles.\n2. Bent and missing needles that occur during treatment are due to customer*s poor technique. We do NOT replace cartridges for this. Customer gets 2 replacements within 30 days of their most recent training.\n3. Disconnect and reconnet cartridge.\n4. If message continues replace cartridge.';
         break;
       case 3:
         frm.resol.value = '1. Have customer replace cartridge with a new cartridge.\n2. If problem persist with a  new cartridge its possible that a pair of needles is not detecting the impedance/resistance.\n3. Bent and missing needles that occur during treatment are due to customer*s poor technique. We do NOT replace cartridges for this. Customer gets 2 replacements within 30 days of their most recent training.';
         break;
       case 4:
         frm.resol.value = '1. Disconnect and reconnect the cartridge.\n2. Replace cartridge.';
         break;
       case 5:
         frm.resol.value = '1. Cool down the room.\n2. Disconnect and reconnect the handpiece.';
         break;
       case 6:
         frm.resol.value = '1. There is a failure of the cold junction or the cartridge was just removed from a cold environment and needs to warm up to ambient temperature before being used.\n2. Tell customer to warm up or let the cartridge set to room temp before reconnecting.';
         break;
       case 7:
         frm.resol.value = '1. Disconnect and reconnect the handpiece.\n2. Allow for homing sequence to be performed.\n3. If error continues replace the handpiece.';
         break;
       case 8:
         frm.resol.value = '1. Disconnect the cartridge.\n2. Disconnect the handpiece.\n3. Reconnect the handpiece and allow for homing sequence to be performed.\n4. If error continues, replace the handpiece.';
         break;
       case 9:
         frm.resol.value ='1. Remove cartridge and handpiece from the system.\n2. Inspect for obstructions.\n3. Allow system to perform homing sequence.\n4. If message keeps reappearing, replace the handpiece.';
         break;
       case 10:
         frm.resol.value = '1. Set the time and date to current time and date.\n2. Shut system down and unplug for 90 seconds.\n3. Power system back up and if problem corrected then no further action.\n4. If problem occurs, replace battery.';
         break;
       case 11:
         frm.resol.value = '1. If possible, have customer select settings and try to calibrate the touch screen.\n2. If unable to select the settings button, the touch screen needs to be replaced.';
         break;
       case 12:
         frm.resol.value = '1. Turn the system off and back on.\n2. Replace power supply.';
         break;
    }
    
    return true;
}