function mainfaultpart(frm) {
 
    var part = frm.selectpart.selectedIndex;
    

    switch( part ){
       case 0:
         frm.part.value = 'Common Parts used to Resolve Fault';
         break;
       case 1:
         frm.part.value = '1. Power Cord - WR70480\n2. Power Supply - EC70960\n';
         break;
       case 2:
         frm.part.value = '1. Tablet Assy with SW, Velashape III - AS86704\n2. Harness, Asus Tablet Cable Rework - HR75301\n3. PCBA, Controller, Console, Velashape III - AS83191\n *MAY NEED TO CHECK FOR VERSION TYPE* ';
         break;
       case 3:
         frm.part.value = '1. Footswitch - AS85431';
         break;
       case 4:
         frm.part.value = '1. CR2032 3V Battery\n2. PCBA, Controller, Console, Velashape III - AS8319\n3. Tablet Assy with SW, Velashape III - AS86704\n4. *MAY NEED TO CHECK FOR VERSION TYPE* ';
         break;
       case 5:
         frm.part.value = '1. Replace Applicator';
         break;
       case 6:
         frm.part.value = '1. Replace Applicator';
         break;
       case 7:
         frm.part.value = '1. Send applicator if troubleshooting finds its isolated with one particular app.\n2. Send umbilical if issue continues with both apps - AS85457\nIf FSE is sent, send the following: Hybrid Connector with Harness, Console side, VelaShape III - AS83653';
         break;
       case 8:
         frm.part.value = '1. Send applicator if troubleshooting finds its isolated with one particular app.\n2. Send umbilical if issue continues with both apps - AS85457\n*If FSE is sent, send the following: \n3. PCBA RF Generator, VelaShape III - AS76321\n4. Harness, Chassis Fans, RF Cage Internal, VelaShape III - AS83722';
         break;
       case 9:
         frm.part.value = '1. Send applicator if troubleshooting finds its isolated with one particular app.\n2. Send umbilical if issue continues with both apps - AS85457\n*If FSE is sent, send the following:\n3. Hybrid Connector with Harness, Console side, VelaShape III - AS83653';
         break;
       case 10:
         frm.part.value = '1. Send applicator if troubleshooting finds its isolated with one particular app.';
         break;
       case 11:
         frm.part.value = '1. Send applicator Replace applicator  (Vsmooth/FG71171) (Vcontour/FG71011)';
         break;
       case 12:
         frm.part.value = '1. CR2032 3V Battery';
         break;
       case 13:
         frm.part.value = 'N/A';
         break;
       case 14:
         frm.part.value = '1. Replace applicator  (Vsmooth/FG71171) (Vcontour/FG71011)';
         break;
       case 15:
         frm.part.value = '1. PCBA RF Generator, VelaShape III - AS76321';
         break;
       case 16:
         frm.part.value = '1. Vacuum Pump Wired, 115VAC, Trns4m - AS83852\n2. Air Filter Assy, VelaShape III - AS83281';
         break;
      

    }
    
    return true;
}