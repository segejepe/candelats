function mainfaultpart(frm) {

  var part = frm.selectpart.selectedIndex;


  switch (part) {
    case 0:
      frm.part.value = 'Common Parts used to Resolve Fault';
      break;
    case 1:
      frm.part.value = '1. 12V PS (AS961805)\n2. PFC Board (AS74863)\n3. Power Switch (EE70760 )\n4. Power Cord in rare cases (WR71810)\n5. RTC (FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463)';
      break;
    case 2:
      frm.part.value = '1.  Display (AS78734)';
      break;
    case 3:
      frm.part.value = '1.  Display (AS78734)\n2. RTC-(FG70531US-AS76715,    FG70532US/FG70533/FG70534-AS84463)';
      break;
    case 4:
      frm.part.value = '1.  Display (AS78734)\n2 .RTC-(FG70531US-AS76715,    FG70532US/FG70533/FG70534-AS84463)';
      break;
    case 5:
      frm.part.value = '1.  Send bad applicator before sending FSE IF issue is isolated with the handpiece. If customer doesn’t have another HP to cross reference with, send the HP first. Worst case scenario they call back stating that applicator is doing the same thing.\n2. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622 \n3. Bad RF Card-AS78295\n4. Harnesses for Version 1: FG70531US-IPL(HR73654) Laser (HR73663)\n5. Harnesses for Version 2/3/4: FG70532US/FG70533/FG70534-IPL (HR75591) Laser (HR75581)';
      break;
    case 6:
      frm.part.value = '1.  RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463)\n2 . IPL Driver-AS61573\n3. Capacitor Switch Card-AS78601 ';
      break;
    case 7:
      frm.part.value = '1. Defective HV Charger-AS61785\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463)';
      break;
    case 8:
      frm.part.value = '1. Send bad applicator before sending FSE IF issue is isolated with the handpiece. If customer doesn’t have another HP to cross reference with, send the HP first. Worst case scenario they call back stating that applicator is doing the same thing\n2. Defective IPL Driver-AS61573\n3. Defective 42V Power Supply-AS61791\n4. Defective RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463)\n5. Defective RF Card-AS78295';
      break;
    case 9:
      frm.part.value = '1. Defective Fan-AS79402\n2. Honeycomb blocking fan-FSE Check-Use plier to pull back\n3. Loose wire/connector\n4. Defective Adaptor Board-Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622';
      break;
    case 10:
      frm.part.value = '1. Defective Fan-AS79402\n2. Honeycomb blocking fan-FSE Check-Use plier to pull back\n3. Loose wire/connector\n4. Defective Adaptor Board-Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622';
      break;
    case 11:
      frm.part.value = '1.  Display (AS78734)\n2. Defective Bottom Fan-AS79391\n3. Loose wire/connector\n4. Object blocking fan';
      break;
    case 12:
      frm.part.value = '1.  If no other IPL applicator is avaibale to test, send applicator before sending FSE.  Worst case scenario they call back stating that applicator is doing the same thing\n2 . Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n3. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n4. Ribbon Cable between RTC and Adapter-HR75801 for FG70532US/FG70533/FG70534\n5. Harnesses for version 1: FG70531US-IPL(HR73654\n6. Harnesses for Version 2/3/4: FG70532US/FG70533/FG70534-IPL (HR75591)';
      break;
    case 13:
      frm.part.value = '1.  If no other LASER applicator is avaibale to test, send applicator before sending FSE.  Worst case scenario they call back stating that applicator is doing the same thing\n2 . Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n3. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n4. Ribbon Cable between RTC and Adapter-HR75801 for FG70532US/FG70533/FG70534\n5. Harnesses for version 1: FG70531US-Laser (HR73663)\n6. Harnesses for Version 2/3/4: FG70532US/FG70533/FG70534-Laser (HR75581)';
      break;
    case 14:
      frm.part.value = '1.  If diode stack is burnt, send a replacement laser applicator.\n2. Laser Driver-FG70531US/FG70532US-AS64898-FG70533/FG70534-AS72033\n3. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n4. RTC to Laser Driver Harness-FG70531US-HR7541D-FG70532US-HR75411-FG70533/FG70534-HR76341';
      break;
    case 15:
      frm.part.value = '1.  If diode stack is burnt, send a replacement laser applicator.\n2 . If no other LASER applicator is avaibale to test and the diode stack isnt burnt, send applicator before sending FSE.  Worst case scenario they call back stating that applicator is doing the same thing.\n3. Laser Driver-FG70531US/FG70532US-AS64898-FG70533/FG70534-AS72033\n4. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n5. RTC to Laser Driver Harness-FG70531US-HR7541D-FG70532US-HR75411-FG70533/FG70534-HR76341';
      break;
    case 16:
      frm.part.value = '1. If filter is damaged/defective send a replacement -AS14804\n2. If issue with with just ONE IPL applicator, send replacement.\n3. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n4. IPL Water Flow Sensor-AS81582\n5. Pump-AS78803 ';
      break;
    case 17:
      frm.part.value = '1. If filter is damaged/defective send a replacement -AS14804\n2. If issue with with just ONE IPL applicator, send replacement.\n3. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n4. Laser Water Flow Sensor-AS80522\n5. Pump-AS78803 ';
      break;
    case 18:
      frm.part.value = '1. Defective Interlock base-PWR Inlet Panel (FG70531US-AS78792, FG70532US/FG70533/FG70534-AS85692)\n2 . Interlock Plug-CN07450';
      break;
    case 19:
      frm.part.value = '1. Capacitor Switch Card-AS78601';
      break;
    case 20:
      frm.part.value = '1. Laser Driver-FG70531US/FG70532US-AS64898-FG70533/FG70534-AS72033\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n3. RTC to Laser Driver Harness-FG70531US-HR7541D-FG70532US-HR75411-FG70533/FG70534-HR76341';
      break;
    case 21:
      frm.part.value = '1. If issue is isolated with a specific applicator, replace the applicator first.\n2. Defective Adaptor Board-Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n3. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463';
      break;
    case 22:
      frm.part.value = '1. If issue is isolated with a specific applicator, repalce the applicator first.\n2. If customer doesn’t have another IPL applicator to check, send app first. Worst case scenario they call back after the new applicator is received and we send a FSE\n3. IPL Driver-AS61573';
      break;
    case 23:
      frm.part.value = '1. If issue is isolated with a specific applicator, repalce the applicator first.\n2. If customer doesn’t have another IPL applicator to check, send app first. Worst case scenario they call back after the new applicator is received and we send a FSE\n3. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n4. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n5. Version 1 Harnesses: FG70531US-IPL(HR73654) Laser (HR73663)\n6. Version 2/3/4 Harnesses: FG70532US/FG70533/FG70534-IPL (HR75591) Laser (HR75581)';
      break;
    case 24:
      frm.part.value = '1. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463 ';
      break;
    case 25:
      frm.part.value = '1. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n3. Version 1 Harnesses: FG70531US-IPL(HR73654) Laser (HR73663)\n4. Version 2 Harnesses: FG70532US/FG70533/FG70534-IPL (HR75591) Laser (HR75581)';
      break;
    case 26:
      frm.part.value = '1. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n3. Version 1 Harnesses: FG70531US-IPL(HR73654) Laser (HR73663)\n4. Version 2 Harnesses: FG70532US/FG70533/FG70534-IPL (HR75591) Laser (HR75581)';
      break;
    case 27:
      frm.part.value = '1. HV Charger-AS61785\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463';
      break;
    case 28:
      frm.part.value = '1. Send applicator with the work order.\n2. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n3. Sublative RF System Harness-HR73822';
      break;
    case 29:
      frm.part.value = '1. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463';
      break;
    case 30:
      frm.part.value = '1. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463';
      break;
    case 31:
      frm.part.value = '1. IPL Driver-AS61573\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n3. Display-AS78734';
      break;
    case 32:
      frm.part.value = '1. N/A';
      break;
    case 33:
      frm.part.value = '1. Client can bypass error and still use applicator';
      break;
    case 34:
      frm.part.value = '1. Water Purity Card-AS80431\n2. Water Filter-AS14804\n3. Water Pump-AS78803';
      break;
    case 35:
      frm.part.value = '1. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n2. 42V Power Supply-AS61791\n3. RF Card-AS78295\n4. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622';
      break;
    case 36:
      frm.part.value = '1. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463 ';
      break;
    case 37:
      frm.part.value = '1. Adaptor Card-(FG70531US-AS77986, FG70532US/FG70533/FG70534-AS85622\n2. RTC-(FG70531US-AS76715, FG70532US/FG70533/FG70534-AS84463\n3. Version 1 Harnesses: (HR73654) Laser (HR73663)\n4. Version 2/3/4 Harnesses: IPL (HR75591) Laser (HR75581)';
      break;
    case 38:
      frm.part.value = '1. AC Input Panel FG70532US/FG70533/FG70534-AS85692)\n2. RTC-FG70532US/FG70533/FG70534-AS84463';
      break;
    case 39:
      frm.part.value = '1. AC Input Panel FG70532US/FG70533/FG70534-AS85692)\n2. RTC-FG70532US/FG70533/FG70534-AS84463';
      break;


  }

  return true;
}