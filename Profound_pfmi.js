function mainfaultpart(frm) {
 
    var part = frm.selectpart.selectedIndex;
    

    switch( part ){
       case 0:
         frm.part.value = 'Common Parts used to Resolve Fault';
         break;
       case 1:
         frm.part.value = '1. Handpiece - Dermal(FG70523) SubQ(FG71501)\n2. Cartridge - Dermal(KT76635) SubQ(KT76663)';
         break;
       case 2:
         frm.part.value = '1. Cartridge - Dermal(KT76635) SubQ(KT76663)\n2. Single DERM CTG AS77795';
         break;
       case 3:
         frm.part.value = '1. Cartridge - Dermal(KT76635) SubQ(KT76663)\n2. RF Channel Board (AS7726(x))\n3. RF Control Board (AS7727(x))\n4. RF Harness (HR7269(x))';
         break;
       case 4:
         frm.part.value = '1. Cartridge - Dermal(KT76635) SubQ(KT76663)';
         break;
       case 5:
         frm.part.value = 'N/A';
         break;
       case 6:
         frm.part.value = '1. Cartridge - Dermal(KT76635) SubQ(KT76663)';
         break;
       case 7:
         frm.part.value = '1. Handpiece - Dermal(FG70523) SubQ(FG71501)';
         break;
       case 8:
         frm.part.value = '1. Handpiece - Dermal(FG70523) SubQ(FG71501)';
         break;
       case 9:
         frm.part.value = '1. Handpiece - Dermal(FG70523) SubQ(FG71501)\n2. User Interface Printed Circuit Board Assembly (AS7726(x))';
         break;
       case 10:
         frm.part.value = '1. CR2032 3V Battery\n2. User Interface Printed Circuit Board Assembly (AS7726(x))';
         break;
       case 11:
         frm.part.value = '1. LCD and Touch-Screen Assembly (AS7761(x))\n2. I/O PCB (AS77282)';
         break;
       case 12:
         frm.part.value = '1. 24V Power Supply Module (EC7037(x))';
         break;

    }
    
    return true;
}