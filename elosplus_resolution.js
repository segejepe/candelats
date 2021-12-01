function resolu(frm) {

  var resol = frm.selectpart.selectedIndex;


  switch (resol) {
    case 0:
      frm.resol.value = 'Resolution';
      break;
    case 1:
      frm.resol.value = '1. Have customer check if the power button light is lit.\n2. Have customer ensure the e-stop is not pressed in. (Twist to unlock)\n3. Have customer check another power outlet/power cord.\n4. Check the main fuses of inlet and 12v PS.';
      break;
    case 2:
      frm.resol.value = '1. Check to see if power button light is lit.\n2. If it is lit then the display is bad and needs to be replaced.\n3. Have customer unscrew the display nut and disconnnect then reconnect the display';
      break;
    case 3:
      frm.resol.value = '1. Ask customer when the sound is not audbile to narrow down the root cause.\n2. FSE to replace the board.';
      break;
    case 4:
      frm.resol.value = '1. Have customer unscrew the display nut, disconnect, and reconnect the display. (Do this while the system is powered off)\n2. FSE to reinstall softare to resolve the issue.\n3. If issue continues, replaced display. ';
      break;
    case 5:
      frm.resol.value = '1. Narrow down if issue with with the Laser side or the IPL side.\n2. Have customer try another applicator on the side it is occuring with.\n3. If issue is with one particular applicator, repalce the applciator.\n4. If issue is with one particular side, send that side harnes';
      break;
    case 6:
      frm.resol.value = '1. FSE to replace the RTC board -> IPL Driver -> Capacitor Switch Card.';
      break;
    case 7:
      frm.resol.value = '1. Have customer disconnect app and try again.\n2. Usually Charger board';
      break;
    case 8:
      frm.resol.value = '1. Have customer try another IPL applicator if possible.\n2. If issue continues with all IPL applicators, we need to send FSE along with boards.\n3. If error happens with ID 42 Low RF, 42V Card is not supplying 42V or RF card is causing current feedback';
      break;
    case 9:
      frm.resol.value = '1. Have customer open rear panel by lossening all 4 knobs. Take off fan guard. Have client pull back the honecomb mesh that COULD be blocking the fan.\n2. FSE to replace defective fan or defective adaptor board.';
      break;
    case 10:
      frm.resol.value = '1. Have customer open rear panel by lossening all 4 knobs. Take off fan guard. Have client pull back the honecomb mesh that COULD be blocking the fan.\n2. FSE to replace defective fan or defective adaptor board.';
      break;
    case 11:
      frm.resol.value = '1. FSE to replace the bottom fan or check for loose wire.';
      break;
    case 12:
      frm.resol.value = '1. Have customer try different applicator on the same side to see if it’s the applicator or system.\n2. If issue is happening on all IPL apps, FSE to replace/repair components.\n3. Adaptor board may not be sending TEC voltage.\n4. IPL Harness may be damaged/loose.';
      break;
    case 13:
      frm.resol.value = '1. Have customer try different applicator on the same side to see if it*s the appilcator or system.\n2. If issue is happening on all LASER apps, FSE to replace/repair components.\n3. Adaptor board may not be sending TEC voltage.\n4. LASER Harness may be damaged/loose.';
      break;
    case 14:
      frm.resol.value = '1. Have customer try a different laser applicator if possible.\n2. With the system off, have customer check the Diode stack of the applicator to look for burn spots.\n3. FSE to check HV lines on system and applicator.';
      break;
    case 15:
      frm.resol.value = '1. Have customer try a different laser applicator if possible.\n2. With the system off, have customer check the Diode stack of the applicator to look for burn spots.\n3. FSE to check HV lines on system and applicator.';
      break;
    case 16:
      frm.resol.value = '1. Water flows out of deionizer filter. If filter gets clogged, can cause this error-AS14804 WATER FILTER WILL CAUSE THIS ERROR MOST OF THE TIME-Client can install this themselves\n2 .Can remove water filter and use system to see if error persists. If not send FSE.\n3. Try different IPL applicator- If only one applicator, send applicator. If not send FSE.';
      break;
    case 17:
      frm.resol.value = '1. Water flows out of deionizer filter. If filter gets clogged, can cause this error-AS14804 WATER FILTER WILL CAUSE THIS ERROR MOST OF THE TIME-Client can install this themselves\n2 .Can remove water filter and use system to see if error persists. If not send FSE.\n3. Try different LASER applicator- If only one applicator, send applicator. If not send FSE.';
      break;
    case 18:
      frm.resol.value = '1. Remote Interlock located above power entry\n2. Check to see if Interlock is loose and reconnect.\n3. If Interlock is missing, can send Interlock to client to attach themselves\n4. If Interlock base is broken, send FSE ';
      break;
    case 19:
      frm.resol.value = '1. FSE to replace capacitor switch card.';
      break;
    case 20:
      frm.resol.value = '1. Try different laser applicator if possible\n2. Check HV lines on system and applicator\n3. Check Diode stack of applicator-If Diode stack looks burnt on applicator-replace applicator';
      break;
    case 21:
      frm.resol.value = '1. If message is intermittently coming up, check room temperature and water level in bottle\n2. Also remove Rear panel to ensure that there is no dust covering fan guards\n3. IPL applicators, DSL, and Motif LHR cool in 60 seconds\n4. Sublime and Motif Vantage Applicators cool in 90 seconds\n5. Error will be a faulty applicator most of the time. Replace applicator';
      break;
    case 22:
      frm.resol.value = '1. IPL Driver will attempt to Ignite Lamp 3 times\n2. After 3 attempts, error message comes up\n3. Try Different IPL Applicator(Sublime will not get this message as it has an IR bulb\n4. Send applicator if another IPL applicator works\n5. Send FSE if multiple IPL Applicators give error';
      break;
    case 23:
      frm.resol.value = '1. Have customer Check Water Level in bottle\n2. Try disconnecting and reconnecting applicator\n3. Try different applicator in same line\n4. One applicator gives error, send applicator\n5. Multiple Applicators give error, send FSE';
      break;
    case 24:
      frm.resol.value = '1. Fan Guards may be dusty or fan was installed incorrectly\n2. Check fan guards.\n3. Replace RTC';
      break;
    case 25:
      frm.resol.value = '1. Allow time for skin temperature to cool\n2. If problem persists, try another applicator\n3. Send FSE if multiple applicators giving error';
      break;
    case 26:
      frm.resol.value = '1. If error is consistent, turn system off and remove one applicator\n2. Error will not state which specific applicator is causing problem\n3. Have customer disconnect and reconnect the display.';
      break;
    case 27:
      frm.resol.value = '1. Error may be Intermittent\n2. Send FSE';
      break;
    case 28:
      frm.resol.value = '1. If tip is fully connected, most likely a defective tip\n2. If multiple tips giving issue, send Sublative RF Applicator';
      break;
    case 29:
      frm.resol.value = '1. Data saved in RTC\n2. Send FSE';
      break;
    case 30:
      frm.resol.value = '1. Data saved in RTC\n2. Send FSE';
      break;
    case 31:
      frm.resol.value = '1. Error can happen in password screen or while IPL Lamp is igniting\n2. If occurs while IPL Lamp is igniting, try sending replacement IPL applicator first\n3. IF error is happening in the password screen or during a treatment, problem will be in system or display\n4. Have customer disconnect and reconnect the dispaly.\n5. Send FSE ';
      break;
    case 32:
      frm.resol.value = '1. Press ok and press ready to continue the treatment';
      break;
    case 33:
      frm.resol.value = '1. Replace Applicator if under warranty\n2. Client must buy another applicator if not under warranty. This error message is unable to be repaired out of warranty-Client will have to purchase another applicator';
      break;
    case 34:
      frm.resol.value = '1. Have client drain system of water and add fresh distilled water\n2. Problem persists, send FSE';
      break;
    case 35:
      frm.resol.value = '1. 50% of time, RTC is causing this error\n2. Send FSE\n3. If error comes up with ID 6 Simmer Failure, it will be 42V Card or RF Card(Due to current feedback)\n4. FSE should always try to re-calibrate RF before trying to repair system';
      break;
    case 36:
      frm.resol.value = '1. Send FSE';
      break;
    case 37:
      frm.resol.value = '1. Check Water Level in bottle\n2. Ensure treatment room is cool. If treatment room is hot, can cause error\n3. Check Fan Guards in back of system. If Fan Guards are dusty, have client clean off dust and try again\n4. Try disconnecting and reconnecting applicator\n5. Try different applicator in same line\n6. Multiple Applicators give error, send FSE. If just one applicator, send applicator.';
      break;
    case 38:
      frm.resol.value = '1. Send Replacement Foot Switch first as client can still use trigger button on applicator\n2. Footswitch part number is AS84653\n3. Problem persists, send FSE';
      break;
    case 39:
      frm.resol.value = '1. Send Replacement Foot Switch first as client can still use trigger button on applicator\n2. Footswitch part number is AS84653\n3. Problem persists, send FSE';
      break;

  }

  return true;
}