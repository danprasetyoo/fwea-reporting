const quarterDates = ['03/31/2024', '06/30/2024', '09/30/2024', '12/31/2024'];

export const descriptions = [
  'Opening fund',
  'Minimum & deposit premium',
  'Brokerage',
  'Reinsurers Margin',
  'Claim paid in the quarter',
  'Reinstatement premiums',
  'Adjustment premium for prior year',
  'Interest credit',
  'Gross Funds Balance',
  'Loss Additional Premium',
  'Claims outstanding',
  'Net Funds Balance',
];

const RiuData = [
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[0], // "Opening fund"
    parameter: ' ',
    pdmaUsd: '',
    pdmaIdr: '',
    maUsd: '',
    maIdr: '',
    liabilityUsd: '',
    liabilityIdr: '',
    fweaUsd: '844,409',
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[1], // "Minimum & deposit premium"
    parameter: '',
    pdmaUsd: '442,531.25',
    pdmaIdr: '6,637,968,750',
    maUsd: '181,687.5',
    maIdr: '2,725,312,500',
    liabilityUsd: '85,500.50',
    liabilityIdr: '',
    fweaUsd: '',
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[2], // "Brokerage"
    parameter: '10.0%', //=$R$11
    pdmaUsd: '(44,253)', //=$D10*-E9
    pdmaIdr: '(663,796,875)', //=$D10*-F9
    maUsd: '(18,169)', //=$D10*-G9
    maIdr: '(272,531,250)', //=$D10*-H9
    liabilityUsd: '(8,550)', //=$D10*-I9
    liabilityIdr: '', //=$D10*-J9
    fweaUsd: '', //=SUM(E10,G10,I10)+SUM(F10,H10,J10)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[3], // "Reinsurers Margin"
    parameter: '20.5%', //=$R$10
    pdmaUsd: '(90,719)', //=-$D11*E9
    pdmaIdr: '(1,360,783,594)', //=-$D11*F9
    maUsd: '(37,246)', //=-$D11*G9
    maIdr: '(558,689,063)', //=-$D11*H9
    liabilityUsd: '(17,528)', //=-$D11*I9
    liabilityIdr: '', //=-$D11*J9
    fweaUsd: '', //=SUM(E11,G11,I11)+SUM(F11,H11,J11)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[4], // "Claim paid in the quarter"
    parameter: '',
    pdmaUsd: '-', //=-(SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,E$6)-SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,E$6))
    pdmaIdr: '',
    maUsd: '-', //=-(SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,G$6)-SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,G$6))
    maIdr: '', //=-$D11*H9
    liabilityUsd: '-', //=-(SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,I$6)-SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,I$6))
    liabilityIdr: '',
    fweaUsd: '-', //=SUM(E12,G12,I12)+SUM(F12,H12,J12)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[5], // "Reinstatement premiums"
    parameter: '',
    pdmaUsd: '-', //=SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,E$6)-SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,E$6)
    pdmaIdr: '',
    maUsd: '-', //=SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,G$6)-SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,G$6)
    maIdr: '',
    liabilityUsd: '-', //=SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,I$6)-SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,I$6)
    liabilityIdr: '',
    fweaUsd: '-', //=SUM(E13,G13,I13)+SUM(F13,H13,J13)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[3], // "Reinsurers Margin"
    parameter: '',
    pdmaUsd: '-', //=SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,E$6)-SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,E$6)
    pdmaIdr: '',
    maUsd: '-', //=SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,G$6)-SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,G$6)
    maIdr: '',
    liabilityUsd: '-', //=SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,I$6)-SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,I$6)
    liabilityIdr: '',
    fweaUsd: '-', //=SUM(E14,G14,I14)+SUM(F14,H14,J14)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[6], // "Adjustment premium for prior year"
    parameter: '',
    pdmaUsd: '-', //=R29
    pdmaIdr: '-', //=R30
    maUsd: '-', //=SUM(S29:T29)
    maIdr: '-', //=SUM(S30:T30)
    liabilityUsd: '-', //=U29
    liabilityIdr: '-', //=U30
    fweaUsd: '-', //=SUM(E15,G15,I15)+SUM(F15,H15,J15)/$S$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[2], // "Brokerage"
    parameter: '10%', //=S11
    pdmaUsd: '-', //=-$D16*E15
    pdmaIdr: '-', //=-$D16*F15
    maUsd: '-', //=-$D16*G15
    maIdr: '-', //=-$D16*H15
    liabilityUsd: '-', //=-$D16*I15
    liabilityIdr: '-', //=-$D16*J15
    fweaUsd: '-', //=SUM(E16,G16,I16)+SUM(F16,H16,J16)/$S$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[3], // "Reinsurers Margin"
    parameter: '20,5%', //=S10
    pdmaUsd: '-', //=-$D17*E15
    pdmaIdr: '-', //=-$D17*F15
    maUsd: '-', //=-$D17*G15
    maIdr: '-', //=-$D17*H15
    liabilityUsd: '-', //=-$D17*I15
    liabilityIdr: '-', //=-$D17*J15
    fweaUsd: '-', //=SUM(E17,G17,I17)+SUM(F17,H17,J17)/$S$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[7], // "Interest credit"
    parameter: '5.27%', //Get T-bill from statementData id
    pdmaUsd: '',
    pdmaIdr: '',
    maUsd: '',
    maIdr: '',
    liabilityUsd: '',
    liabilityIdr: '',
    fweaUsd: '', //=SUM(K9:K17)*$D18*($R$3-$R$5)/365+K8*$D18*($R$3-($R$5-1))/365
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[8], // "Gross Funds Balance"
    parameter: '',
    pdmaUsd: '',
    pdmaIdr: '',
    maUsd: '',
    maIdr: '',
    liabilityUsd: '',
    liabilityIdr: '',
    fweaUsd: '', //=SUM(K9:K17)*$D18*($R$3-$R$5)/365+K8*$D18*($R$3-($R$5-1))/365
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[9], // "Loss Additional Premium"
    parameter: '52,5%',
    pdmaUsd: '',
    pdmaIdr: '',
    maUsd: '',
    maIdr: '',
    liabilityUsd: '',
    liabilityIdr: '',
    fweaUsd: '', //=SUM(K8:K18)
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[10], //"Claims outstanding"
    parameter: '', //=$R$13
    pdmaUsd: '(9,147,709)', //=-SUMIFS('Claims (claims unit)'!$J:$J,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,E$6)
    pdmaIdr: '',
    maUsd: '(652,160)', //=-SUMIFS('Claims (claims unit)'!$J:$J,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,G$6)
    maIdr: '',
    liabilityUsd: '-', //=-SUMIFS('Claims (claims unit)'!$J:$J,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,I$6)
    liabilityIdr: '',
    fweaUsd: '', //=IF(K19<0,K19*D20,0)
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[5], // "Reinstatement premiums"
    parameter: '',
    pdmaUsd: '4,218,751', //=SUMIFS('Claims (claims unit)'!$L:$L,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,E$6)
    pdmaIdr: '',
    maUsd: '352,166', //=SUMIFS('Claims (claims unit)'!$L:$L,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,G$6)
    maIdr: '',
    liabilityUsd: '-', //=SUMIFS('Claims (claims unit)'!$L:$L,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,I$6)
    liabilityIdr: '',
    fweaUsd: '4,570,917', //=SUM(E22,G22,I22)+SUM(F22,H22,J22)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[3], // "Reinsurers Margin"
    parameter: '',
    pdmaUsd: '(855,017)', //=-SUMIFS('Claims (claims unit)'!$N:$N,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,E$6)
    pdmaIdr: '',
    maUsd: '(72,194)', //=-SUMIFS('Claims (claims unit)'!$N:$N,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,G$6)
    maIdr: '',
    liabilityUsd: '-', //=-SUMIFS('Claims (claims unit)'!$N:$N,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,I$6)
    liabilityIdr: '',
    fweaUsd: '(927,211)', //=SUM(E23,G23,I23)+SUM(F23,H23,J23)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[11], // "Net Funds Balance"
    parameter: '',
    pdmaUsd: '',
    pdmaIdr: '',
    maUsd: '',
    maIdr: '',
    liabilityUsd: '',
    liabilityIdr: '',
    fweaUsd: '', //=SUM(E14,G14,I14)+SUM(F14,H14,J14)/$R$9
  },
];

export default RiuData;
