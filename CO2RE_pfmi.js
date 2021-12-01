function mainfaultpart(frm) {
 
    var part = frm.selectpart.selectedIndex;
    

    switch( part ){
       case 0:
         frm.part.value = 'Common Parts used to Resolve Fault';
         break;
        case 1:
          frm.part.value = '1. Power Supply EC70270\n2. DC to DC Power Supply AS76041\n3. I/O Board AS76039\n4. CPU AS77683';
          break;
        case 2:
          frm.part.value = '1. Black Box/Scanner KT77203';
          break;
        case 3:
          frm.part.value = '1. Black Box/Scanner KT77203';
          break;
        case 4:
          frm.part.value = '1. Display AS76217\n2. I/O Board AS76039';
          break;
        case 5:
           frm.part.value = '1. Harness upgrade kit KT77961';
          break;
        case 6:
          frm.part.value = '1. Display AS76217\n2. CPU AS77683';
          break;
        case 7:
          frm.part.value = '1. Black Box/Scanner KT77203\n2. I/O Board AS76039';
          break;
        case 8:
          frm.part.value = '1. Power Supply EC70270\n2. DC to DC Power Supply AS76041\n3. I/O Board AS76039\n4. CPU AS77683';
          break;
        case 9:
          frm.part.value = '1. Thermosensor HR72421\n2. Laser Tube AS76001\n3. I/O Board AS76039';
        case 10:
         frm.part.value = '1. Laser Tube AS76001\n2. I/O Board AS76039\n3. CPU AS77683';
         break;
       case 11:
         frm.part.value = '1. E-stop Harness AS75981\n2. I/O Board AS76039';
         break;
       case 12:
         frm.part.value = '1. Footswitch AS76072\n2. Footswitch Harness HR72431';
         break;
       case 13:
         frm.part.value = '1. Interlock AS76232\n2. ONLY  if new interlock doesn’t work: AC Input Panel AS76163';
         break;
       case 14:
         frm.part.value = '1. Interlock AS76232\n2. Harness Key Switch to I/O AS75971';
         break;
       case 15:
         frm.part.value = '1. Footswitch AS76072\n2. Footswitch Harness HR72431';
         break;
       case 16:
         frm.part.value = '1. Black Box/Scanner KT77203\n2. I/O Board AS76039';
         break;
       case 17:
         frm.part.value = '1. Black Box/Scanner KT77203';
         break;
       case 18:
         frm.part.value = '1. Black Box/Scanner KT77203';
         break;
       case 19:
         frm.part.value = '1. Black Box/Scanner KT77203\n2. LESS LIKELY: Laser Tube AS76001';
         break;
       case 20:
         frm.part.value = '1. Black Box/Scanner KT77203';
         break;
       case 21:
         frm.part.value = '1. Black Box/Scanner KT77203\n2. Laser Tube AS76001';
         break;
       case 22:
         frm.part.value = '1. Black Box/Scanner KT77203';
         break;
       case 23:
         frm.part.value = '1. Black Box/Scanner KT77203\n2. I/O Board AS76039\n3. CPU AS77683';
         break;
       case 24:
         frm.part.value = '1. Laser Tube AS76001\n2. I/O Board AS76039\n3. CPU AS77683';
         break;
    }
    
    return true;
}