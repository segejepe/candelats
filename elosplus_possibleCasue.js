function possible_cause(frm) {

  var posc = frm.selectpart.selectedIndex;


  switch (posc) {
    case 0:
      frm.posc.value = 'Possible Casue';
      break;
    case 1:
      frm.posc.value = '1. Power Button is defective.\n2. E-Stop is pressed.\n3. Board internally is damaged.';
      break;
    case 2:
      frm.posc.value = '1. Display screen is damaged.\n2. Loose wiring/connector.';
      break;
    case 3:
      frm.posc.value = '1. There are two different buzzers: System buzzer and Display buzzer.\n2. System buzzer is on the RTC and makes sound for good coupling and will beep once upon system start up.\n3. Display buzzer is in the display and makes sound for bad coupling and touschscreen response.';
      break;
    case 4:
      frm.posc.value = '1. Software malfunction.\n2. Display connection.\n3. Display damaged.';
      break;
    case 5:
      frm.posc.value = '1. Error is stating that the electrodes of the applicator are not on the skin.\n2. Bad Handpiece\n3. Bad RF Board\n4. Bad Harness\n5. Bad Adaptor board';
      break;
    case 6:
      frm.posc.value = '1. Error involving communication with capacitor switch ard with IPL Applicator.\n2. Could be bad IPL as well(less likely)';
      break;
    case 7:
      frm.posc.value = '1. HV Charger board not supplying enough voltage.';
      break;
    case 8:
      frm.posc.value = '1. IPL Driver supplying less than 1000V to ignite lamp on IPL Applicator.	';
      break;
    case 9:
      frm.posc.value = '1. Upper fan is blocked from spinning or is not working at all.\n2. Bad Adaptor Board';
      break;
    case 10:
      frm.posc.value = '1. Upper fan is blocked from spinning or is not working at all.\n2. Bad Adaptor Board';
      break;
    case 11:
      frm.posc.value = '1. Bottom Fan not working.';
      break;
    case 12:
      frm.posc.value = '1. TEC line is not working-This error is only for IPL Applicators\n2. All IPL applicators have 2 TEC lines to cool applicators';
      break;
    case 13:
      frm.posc.value = '1. TEC line is not working-This error is only for Laser Applicators\n2. DSL, Motif LHR, and Motif Vantage have 2 TEC Lines\n3. LV and LVA have only one TEC line but are now obsolete handpieces.';
      break;
    case 14:
      frm.posc.value = '1. Laser Driver is not delivering laser energy\n2. Laser applicator has a burnt diode stack.';
      break;
    case 15:
      frm.posc.value = '1. Laser Driver is not delivering laser energy\n2. Laser applicator has a burnt diode stack.';
      break;
    case 16:
      frm.posc.value = '1. Detecting less than adequate water flow.\n2. IPL water flow sensor in system and in applicator';
      break;
    case 17:
      frm.posc.value = '1. Detecting less than adequate water flow.\n2. LASER water flow sensor in system and in applicator';
      break;
    case 18:
      frm.posc.value = '1. Remote interlock is disconnected or damaged.';
      break;
    case 19:
      frm.posc.value = '1. Capacitor Switch Card has failed';
      break;
    case 20:
      frm.posc.value = '1. Laser driver is not delivering laser energy';
      break;
    case 21:
      frm.posc.value = '1. Internal Temperature of applicator is outside of the allowable range\n2. This is the cooling down message until under 10 degrees Celsius for IPL and Laser Applicators';
      break;
    case 22:
      frm.posc.value = '1. IPL Driver is damaged\n2. IPL applicator flashlamps are damaged.';
      break;
    case 23:
      frm.posc.value = '1. Internal temperature of applicator is outside of the allowable range on the low end (Indicate also the sensor is disconnected)\n2. Low or no water\n3. Damaged/defective applicator.';
      break;
    case 24:
      frm.posc.value = '1. Room Temperature is above 30C/86F';
      break;
    case 25:
      frm.posc.value = '1. Impedance Safety Measurement in SR or SRA applicator is outside of the allowable range';
      break;
    case 26:
      frm.posc.value = '1. Error states that system lost connection with applicator during treatment\n2. Error can happen if you remove any applicator while in treatment screen of another applicator\n3. Error can happen if you connect fuse tip instead of ID tip to Sublative RF';
      break;
    case 27:
      frm.posc.value = '1. High Voltage Charger and Capacitor Voltage are outside the 175-201V range';
      break;
    case 28:
      frm.posc.value = '1. Sublative RF Tip got disconnected during treatment';
      break;
    case 29:
      frm.posc.value = '1. Calibratoin Table that is created by calibrating the RF on IPL/Laser is corrupted';
      break;
    case 30:
      frm.posc.value = '1. Calibratoin Table that is created by calibrating the RF on Sublative RF is corrupted';
      break;
    case 31:
      frm.posc.value = '1. Error is stating the system and display lost connection';
      break;
    case 32:
      frm.posc.value = '1. Error comes up every 40 pulses to remind the client to clean the tip';
      break;
    case 33:
      frm.posc.value = '1. Error comes up when IPL applicators exceed 100,000 pulses and Sublime exceeds 300,000 pulses';
      break;
    case 34:
      frm.posc.value = '1. Water in system is contaminated or not distilled water';
      break;
    case 35:
      frm.posc.value = '1. RF energy not being delivered\n2. Error will not come up under Sublative RF applicator-States 5000ohm at all times';
      break;
    case 36:
      frm.posc.value = '1. Old calibration files being used with new software/hardware';
      break;
    case 37:
      frm.posc.value = '1. Internal Temperature of applicator is outside of the allowable range on high end';
      break;
    case 38:
      frm.posc.value = '1. Check connection of footswitch to system';
      break;
    case 39:
      frm.posc.value = '1. Check connection of footswitch to system';
      break;
  }

  return true;
}