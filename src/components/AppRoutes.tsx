import { Routes, Route } from 'react-router-dom';
import Calculator from './reporting/calculator/CalculatorInput';
import FormInputAdjustment from './reporting/calculator/adjustmentPremium/FormInputAdjustment';
import TBill from './reporting/tbill/Tbill';
import FormInputClaims from './claims/input/FormInputClaims';
import ClaimPage from './claims/table/ClaimPage';
import TemplateStaging from './reporting/dataStaging/TemplateStaging';
import TemplateData from './reporting/dataBase/TemplateData';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/adjustmentpremium" element={<FormInputAdjustment />} />
      <Route path="/tbill" element={<TBill />} />
      <Route path="/claims/input" element={<FormInputClaims />} />
      <Route path="/claims/table" element={<ClaimPage />} />
      <Route path="/data/staging" element={<TemplateStaging />} />
      <Route path="/data/base" element={<TemplateData />} />
    </Routes>
  );
}
