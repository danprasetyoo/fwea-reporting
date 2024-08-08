const quarterDates = ['03/31/2024', '06/30/2024', '09/30/2024', '12/31/2024'];

const descriptions = [
  'Opening fund',
  'Minimum & deposit premium',
  'Brokerage',
  'Reinsurers Margin',
  'Claim paid in the quarter',
  'Reinstatement premiums',
  'Reinsurers Margin',
];

const RiuData = [
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[0],
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
    description: descriptions[1],
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
    description: descriptions[2],
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
    description: descriptions[3],
    parameter: '20.5%', //=$R$10
    pdmaUsd: '(90,719)', //=-$D11*E9
    pdmaIdr: '(1,360,783,594)', //=-$D11*F9
    maUsd: '(37,246)', //=-$D11*G9
    maIdr: '(558m689,063)', //=-$D11*H9
    liabilityUsd: '(17,528)', //=-$D11*I9
    liabilityIdr: '', //=-$D11*J9
    fweaUsd: '', //=SUM(E11,G11,I11)+SUM(F11,H11,J11)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[4],
    parameter: '',
    pdmaUsd: '', //=-(SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,E$6)-SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,E$6))
    pdmaIdr: '',
    maUsd: '', //=-(SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,G$6)-SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,G$6))
    maIdr: '', //=-$D11*H9
    liabilityUsd: '', //=-(SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R3,'Claims (claims unit)'!$D:$D,I$6)-SUMIFS('Claims (claims unit)'!$I:$I,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,I$6))
    liabilityIdr: '',
    fweaUsd: '', //=SUM(E12,G12,I12)+SUM(F12,H12,J12)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[5],
    parameter: '',
    pdmaUsd: '', //=SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,E$6)-SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,E$6)
    pdmaIdr: '',
    maUsd: '', //=SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,G$6)-SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,G$6)
    maIdr: '',
    liabilityUsd: '', //=SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,I$6)-SUMIFS('Claims (claims unit)'!$K:$K,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,I$6)
    liabilityIdr: '',
    fweaUsd: '', //=SUM(E13,G13,I13)+SUM(F13,H13,J13)/$R$9
  },
  {
    statementDate: quarterDates[1], //=$R$3
    description: descriptions[6],
    parameter: '',
    pdmaUsd: '', //=SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,E$6)-SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,E$6)
    pdmaIdr: '',
    maUsd: '', //=SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,G$6)-SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,G$6)
    maIdr: '',
    liabilityUsd: '', //=SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$3,'Claims (claims unit)'!$D:$D,I$6)-SUMIFS('Claims (claims unit)'!$M:$M,'Claims (claims unit)'!$A:$A,$R$5-1,'Claims (claims unit)'!$D:$D,I$6)
    liabilityIdr: '',
    fweaUsd: '', //=SUM(E14,G14,I14)+SUM(F14,H14,J14)/$R$9
  },
];

export default RiuData;
