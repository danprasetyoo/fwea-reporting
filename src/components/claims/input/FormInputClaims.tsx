import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import ClaimDeclare from './ClaimsDeclare';

const FormInputClaims: React.FC = () => {
  const [statementDate, setStatementDate] = useState('');
  const [claimNo, setClaimNo] = useState('');
  const [insured, setInsured] = useState('');
  const [lob, setLob] = useState('');
  const [dateLoss, setDateLoss] = useState('');
  const [yearLoss, setYearLoss] = useState('');
  const [paidDate, setPaidDate] = useState('');
  const [incurredDate, setIncurredDate] = useState('');
  const [lossLayerPB, setLossLayerPB] = useState('');
  const [lossLayerIB, setLossLayerIB] = useState('');
  const [reinstatementPB, setReinstatementPB] = useState('');
  const [reinstatementIB, setReinstatementIB] = useState('');
  const [riMarginPB, setRiMarginPB] = useState('');
  const [riMarginIB, setRiMarginIB] = useState('');

  // Function to handle year validation
  // const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // const value = e.target.value;
  // Validate that the input is a 4-digit year
  //   if (/^\d{0,4}$/.test(value)) {
  //     setTreatyYear(value);
  //   }
  // };

  return (
    <Box p={5}>
      <Text fontSize="6xl" fontFamily="Arial, sans-serif" fontWeight="bold">
        Claims Input
      </Text>
      <ClaimDeclare
        label="Statement date as at:"
        type="date"
        value={statementDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStatementDate(e.target.value)
        }
      />
      <ClaimDeclare
        label="Claim No:"
        type="number"
        value={claimNo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setClaimNo(e.target.value)
        }
      />
      <ClaimDeclare
        label="Insured:"
        type="date"
        value={insured}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInsured(e.target.value)
        }
      />
      <ClaimDeclare
        label="LOB:"
        type="number"
        value={lob}
        // onChange={handleYearChange}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLob(e.target.value)
        }
      />
      <ClaimDeclare
        label="Date of Loss:"
        type="number"
        value={dateLoss}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDateLoss(e.target.value)
        }
      />
      <ClaimDeclare
        label="Year of Loss:"
        type="number"
        value={yearLoss}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setYearLoss(e.target.value)
        }
      />
      <ClaimDeclare
        label="Paid To Date:"
        type="number"
        value={paidDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPaidDate(e.target.value)
        }
      />
      <ClaimDeclare
        label="Incurred To Date:"
        type="number"
        value={incurredDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setIncurredDate(e.target.value)
        }
      />
      <ClaimDeclare
        label="Loss To Layer (Paid Basis):"
        type="number"
        value={lossLayerPB}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLossLayerPB(e.target.value)
        }
      />
      <ClaimDeclare
        label="Loss To Layer (Incurred Basis):"
        type="number"
        value={lossLayerIB}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLossLayerIB(e.target.value)
        }
      />
      <ClaimDeclare
        label="Reinstatement Premium (Paid Basis):"
        type="number"
        value={reinstatementPB}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setReinstatementPB(e.target.value)
        }
      />
      <ClaimDeclare
        label="Reinstatement Premium (Incurred Basis):"
        type="number"
        value={reinstatementIB}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setReinstatementIB(e.target.value)
        }
      />
      <ClaimDeclare
        label="RI Margin (Paid Basis):"
        type="number"
        value={riMarginPB}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRiMarginPB(e.target.value)
        }
      />
      <ClaimDeclare
        label="RI Margin (Incurred Basis):"
        type="number"
        value={riMarginIB}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRiMarginIB(e.target.value)
        }
      />
    </Box>
  );
};

export default FormInputClaims;
