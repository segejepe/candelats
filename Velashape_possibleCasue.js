function possible_cause(frm) {
 
    var posc = frm.selectpart.selectedIndex;
    

    switch( posc ){
       case 0:
         frm.posc.value = 'Possible Casue';
         break;
       case 1:
         frm.posc.value = '1. Bad power cord\n2. Bad power supply\n3. *Low tablet battery will still flicker the LED bar or display low battery* ';
         break;
       case 2:
         frm.posc.value = '1. The system display is a tablet, and has an internal battery that needs to be adequately charged in order to turn on. When insufficient charge is present the Syneron LED logo beneath the system display will be illuminated or will flash & tablet will be blank.\n2. Loss of communication with  host controller.\n3. Defective tablet';
         break;
       case 3:
         frm.posc.value = '1. Check Software Version, anything below Package Version 5.23 may experience this issue. \n2. Software\n3. Footswitch\n4. Applicator';
         break;
       case 4:
         frm.posc.value = '1. Low CMOS Battery Voltage on Host Controller\n2. Software is Outdated\n3. Electronic problem w/ system (HC, Tablet, PS, etc)';
         break;
       case 5:
         frm.posc.value = '1. Defective Applicator, replace Applicator';
         break;
       case 6:
         frm.posc.value = '1. Defective Applicator OLED, replace Applicator.';
         break;
       case 7:
         frm.posc.value = '1. Applicator has clogged filters, or defective replaceable cover.\n2. Umbilical Cord is faulty and leaking air\n3. System Filter Cup not properly sealed\n4. Vacuum Leak @ System Hybrid Connector';
         break;
       case 8:
         frm.posc.value = '1. Defective Replaceable Cover\n2. Defective Applicator\n3. Defective Umbilical Hose (if BOTH apps)\n4. Defective RF Generator/System Wiring';
         break;
       case 9:
         frm.posc.value = '1. Poor Connection between System/App\n2. Defective Umbilical Cord\n3. Defective Applicator\n4. Damaged Hybrid Connector on System';
         break;
       case 10:
         frm.posc.value = '1. Defective Cover/Tip\n2. Defective Applicator (1-WIRE contacts stuck in depressed position)\n3. Incompatible SW Versions (GUI & HC SW)';
         break;
       case 11:
         frm.posc.value = '1. Low Suction (Refer back to low or no suction for troubleshooting)\n2. Defective Umbilical (if occurring w/ both)\n3. Vacuum Leak on the system';
         break;
       case 12:
         frm.posc.value = '1. CMOS 3V battery is dead causing the system to not keep its settings.\n2. Customer should NOT be turning the system off with the button on the top of the system.';
         break;
       case 13:
         frm.posc.value = 'Turning this setting on causes the system to automatically shut off after 15 seconds when the MAIN PLUG is turned off in the back of the system. Customer should NOT be turning the system off with the button on the top of the system.';
         break;
       case 14:
         frm.posc.value = '1. This is more prevalent with the Vcontour App, but can happen with the Vsmooth as well. ';
         break;
       case 15:
         frm.posc.value = '1. RF Cooling Fans are not operating\n2. The RF Generator is Defective';
         break;
       case 16:
         frm.posc.value = '1. Shifted Vacuum Pump causing vibration\n2. Loose/bent Omega Pump Supports\n3. Loud Vacuum Pump';
         break;
    }
    
    return true;
}