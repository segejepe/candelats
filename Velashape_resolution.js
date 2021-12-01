function resolu(frm) {
 
    var resol = frm.selectpart.selectedIndex;
    

    switch( resol ){
       case 0:
         frm.resol.value = 'Resolution';
         break;
       case 1:
         frm.resol.value = '1. Ensure there is absolutely No Power to system (i.e. the “Syneron” LED bar is not illuminated or flashing). \n2. If logo is lit/flashing refer to "System Display Will Not Turn On"\n3. Try different Power Cord (any computer/monitor power cord will work) & different AC Outlet\n4. If display doesn’t power back on, send FSE.';
         break;
       case 2:
         frm.resol.value = '1. Have customer leave system Turned ON for as long as possible (this will allow a trickle charge to the ASUS tablet; however, this may take anywhere from 30min – 10hr), and Restart the system.\n2. If display doesn’t power back on, send FSE';
         break;
       case 3:
         frm.resol.value = '1. If outdated, send Software Upgrade Kit (USB Stick w/ Instruction)\n2. Inquire whether or not issue is ONLY occurring with one applicator, or both. This could be related to a particular applicator in which case the app should be replaced; however, IF problem occurs with both we should replace the footswitch.';
         break;
       case 4:
         frm.resol.value = '1. Check DATE stored in System Information (path=Options, Utilities, System Information)\n2. If the displayed Date is displaying year 1970 (“70”) or 2000 (“00”) – this indicates the CMOS 3v battery is low on Host Controller, and will need to be replaced\n3.If DATE is correct, check SW Version, and confirm PKG Version 5.23 is installed. If not, send SW Upgrade. \n4. Send FSE if issue persists.';
         break;
       case 5:
         frm.resol.value = '1. Displayed temperature on Applicator/System display is inaccurate. If the Apps temp. sensor circuit has an open or short in wiring, the temp will display 0ºC or 99ºC, respectively\n2. The temp sensor within the applicator may just be out of calibration.\n3. We allow for a +/-2ºC tolerance when testing/calibrating the App’s temp. sensor, but anything that is 5+ºC out of range will need to be replaced\n4. Replace applicator';
         break;
       case 6:
         frm.resol.value = '1. The Software will automatically turn off the Applicator OLED after 1 minute of non-use to protect the OLED screen, so ensure this is not what is occurring, otherwise replace the applicator in question. ';
         break;
       case 7:
         frm.resol.value = '1. Have customer check/replace both applicators filters and covers with new ones.\n2. Have customer check/replace filter in filter cup if it is damaged. NOTE: the filter cup should be empty with NO liquid. If there is liquid, the customer is using too much velaspray and this could be damaging the filters throught the system. Have them empty it. Enure filter cup is properly secured when reconnecting\n3. Have customer pulse and listen for vaccum leak where the Umblical cord connects to the system.\n4. Have customer try each applicator with settings: IR=0 RF=1 VAC=3. If message goes away, they are good to go. If issue continues with ONE applicator, replace that applicator. If issue still occurs with both apps possible umibiclal being defective.\n5. If umbilical is sent and issue continues there is a possible system leak.\n6. Send FSE';
         break;
       case 8:
         frm.resol.value = '1. This error appears when we’ve achieved adequate suction on patient’s skin, but there in an open somewhere in the RF Circuit.\n2. Check if Error occurs with BOTH applicators or one in particular. Install NEW replacealbe cover on applicator(s). If issue is isolated witho ne app repalce that app. If issue is with BOTH apps send umbilial cord. If new umbilical is having the same issue send FSE.';
         break;
       case 9:
         frm.resol.value = '1. Have customer disconnect/reconnect applicator & Restart the system.\n2. Cross reference with other applicator.\n3. If specific to only one app, replace the app.\n4. If BOTH apps, replace Umbilical Cord.\n5. If unresolved by Umbilical Cord, send FSE4.\n6. Ensure that handpiece and tip are detected. If the USB symbol on the top right hand corner is missing, its possible that the tablet is not communicating with the host controller. In this instance it is not a no tip issue but a communication problem.';
         break;
       case 10:
         frm.resol.value = '1. Install Brand New Disposable Cover/Tip. If defective cover is identified, replace the cover.\n2. Replace Applicator.\n3. Ensure that handpiece and tip are detected. If the USB symbol on the top right hand corner is missing, its possible that the tablet is not communicating with the host controller. In this instance it is not a no tip issue but a communication problem.';
         break;
       case 11:
         frm.resol.value = '1. Most of the time customers confuse not heating up with low or no suction. Always trouleshoot as if it is no suction first as the system wont emit any RF or IR when the vacuum is low. If vacuum is found good with no bad coupling or improve contact message then continue below.\n2. Inquire if this occurs with BOTH apps, or one particular applicator.\n3. Install BRAND NEW replaceable cover AND App filters & try again.\n4. Remove Filters entirely from App/Cover, and try again.\n5. Inspect copper connectors on the handpiece to look for dirt. Build up on the RF connectors can cause RF to not be transmitted.\n6. If RF is up vacuum is good, possible damaged/defective applicator.';
         break;
       case 12:
         frm.resol.value = '1. When the system is powered off via the main power switch in the rear, the system display (Tablet) should turn off 15 seconds later. If the tablet remains on:\n2 .Check the Date by entering Option/Utilities – The date will be displayed on the bottom line of the System Information screen.\n3. If the date displayed is the year 1970 or 2000, it is likely the CMOS battery on the Host Controller has low voltage, and needs to be replaced.\n4. Send FSE\n5. If the Date is accurate, we can adjust tablet settings to shut the display off automatically; see row below for more detailed informaiton on this process.';
         break;
       case 13:
         frm.resol.value = '1. Pull up OPTIONS tab\nPress UTILITIES icon\nPress SETTINGS tab\nPress SYSTEM SETTINGS tab\nEnter hard-coded PW:    J4DL32\nCheck the “Show Navigation Bar” checkbox\nPress the Clock in lower right corner\nPress the little flame icon to enable Performance Mode';
         break;
       case 14:
         frm.resol.value = '1. Vcontour App\n-Check the disposable covers – we’ve seen the clear gasket portion separate from the gray plastic, which allows the cover to fall off.\n-Replace Applicator, if covers are not at fault.\n2. Vsmooth App\n-Cover release buttons may be loose/bent, and allowing covers to fall off.\n-Replace Applicator.';
         break;
       case 15:
         frm.resol.value = '1. The RF Generator is operating above the allowable temperature threshold.\n2. Turn the system off & allow the RF Generator to cool down (≈30min)\n3. Send FSE';
         break;
       case 16:
         frm.resol.value = '1. We typically her this complaint after the system has been shipped to the customer, as the Vacuum Pump and/or it’s accompanying bracket have shifted, bent, or became loose in transportation of the device.\n2. FSE to check bracket and if the pump is stuck.\n3. Air filter that connects directly to the pump may be damaged or off causing louder noise.';
         break;
    }
    
    return true;
}