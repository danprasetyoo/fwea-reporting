import { Routes, Route } from 'react-router-dom';
import CalculatorInput from './calculator/CalculatorInput';
import TBill from './tbill/Tbill';
import FormInputClaims from './claims/input/FormInputClaims';
import ClaimPage from './claims/table/ClaimPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/calculator" element={<CalculatorInput />} />
      <Route path="/tbill" element={<TBill />} />
      <Route path="/claims/input" element={<FormInputClaims />} />
      <Route path="/claims/table" element={<ClaimPage />} />
    </Routes>
  );
}
