function resolu(frm) {
 
    var resol = frm.selectpart.selectedIndex;
    

    switch( resol ){
       case 0:
         frm.resol.value = 'Resolution';
         break;
       case 1:
         frm.resol.value = '1. Check power cord and try different outlets\n2. Send FSE if problem persists\n3. NOTE: emergency stop button does NOT shut off the system, it simply stops the laser from firing and displays a message. ';
         break;
       case 2:
         frm.resol.value = '1. This happens when one of the galvos is not working in the black box or one of the x/y harness’s has a loose pin or loose harness\n2. FSE to be sent, nothhing the customer can do.\n3. Wiring should be checked and black box/scanner needs to be replaced if no wiring issues found';
         break;
       case 3:
         frm.resol.value = '1. Have cusomer check lens. There have been cases where they have this issue and the lens has fallen out of the housing. If confirmed send Lens before sending FSE\n2. Try different lens if client has other lens\n3. Send FSE if problems persists';
         break;
       case 4:
         frm.resol.value = '1. Nothing for the customer to do, touchscreen can only be calibrated by FSE or over the phone with Clinical  Trainer/Sales Rep by giving service password\n2. TN-00831 and TN-00861 go over touchscreen issues';
         break;
       case 5:
         frm.resol.value = '1. See TN00781 and send KT77961';
         break;
       case 6:
         frm.resol.value = '1. Screen freezes and touchscreen doesn’t respond\n2. CPU has fixed this issue in the past\n3. This issue is different than touchscreen not working';
         break;
       case 7:
         frm.resol.value = '1. There is a known software bug on all software versions where aiming beam can disappear\n2. This is fixed by having the customer go to Utilities(Gear button on 2.01.00 and higher software version). Change Aiming beam intensity. Hit home button and save prompt will come up\n3. If problem persists, send FSE';
         break;
       case 8:
         frm.resol.value = '1. Have customer try to reset power\n2. Problem persists-Send FSE';
         break;
       case 9:
         frm.resol.value ='1. Have customer try to reset power\n2. Try to reset parameters to fix error only if Sales Rep, Clinical Trainer, or FSE by giving service software key\n3. Problem persists-Send FSE';
         break;
       case 10:
         frm.resol.value = '1. This error can come up if system hasn’t been used in a while\n2. Have customer turn system off and on multiple times. Sometimes may take up to 10 resets\n3. See TN-00791 on this issue\n4. Send FSE if up to 10 resets don’t fix issue';
         break;
       case 11:
         frm.resol.value = '1. Turn button to the right\n2. Problem persists-Send FSE';
         break;
       case 12:
         frm.resol.value = '1. Have customer check pins on Foot switch Connector and Foot Switch\n2. Ensure that foot switch is plugged in all the way\n3. Notch on Foot Switch Harness has to be lined up before pushing into footswitch connector and turning to the right\n4. Send Footswitch first before FSE to see if issue is resolved';
         break;
       case 13:
         frm.resol.value ='1. Headphone jack or auxiliary cable can be plugged in and system can be used to see if problem is resolved\n2. If interlock is plugged in all the way and problem persists, try to send Interlock first or use Headphones/AUX\n3. Issue is usually a missing remote interlock. ';
         break;
       case 14:
         frm.resol.value ='1. If key is inserted and turned to the right, FSE will need to be sent\n2. Issue is usually a missing key.';
         break;
       case 15:
         frm.resol.value = '1. If pedal is stuck, foot switch will need to be replaced\n2. Have customer disconnect and reconnect the foot switch';
         break;
       case 16:
         frm.resol.value = '1. Have customer turn system off and back on\n2. If problem persists, send FSE';
         break;
       case 17:
          frm.resol.value = '1. Have client turn system off and remove ARM to move jumping lens\n2. If problem persist, send FSE';
          break;
       case 18:
          frm.resol.value ='1. Have client turn system off and remove ARM to move jumping lens\n2. If problem persist, send FSE';
          break;
       case 19:
          frm.resol.value ='1. Have customer try to reset power at least 10 times\n2. TN00811-Technical Note about error message stating loose thermopiles causing this error\n3. Send FSE if problem persists. Issue is almost always the black box\n4. FSE should first try to calibrate system to see if problem is resolved before replacing parts';
          break;
       case 20:
          frm.resol.value = '1. Have customer try to reset power at least 10 times\n2. Send FSE if problem persists';
          break;
       case 21:
          frm.resol.value = '1. Error may come up if system hasn’t been used for a while\n2. Have customer try to reset power at least 10 times\n3. Send FSE if problem persists\n4. FSE should first try to calibrate system to see if problem is resolved before replacing parts';
          break;
       case 22:
          frm.resol.value ='1. Have customer try to reset power at least 10 times\n2. Send FSE if problem persists';
          break;
       case 23:
          frm.resol.value ='1. Have customer try to reset power\n2. Send FSE if problem persists';
          break;
       case 24:
          frm.resol.value = '1. This error can come up if system hasn’t been used in a while\n2. Turn system off and on multiple times. Sometimes may take up to 10 resets\n3. See TN-00791 on this issue\n4. Send FSE if up to 10 resets don’t fix issue';
          break;


    }
    
    return true;
}