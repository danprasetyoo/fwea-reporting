import { Routes, Route } from 'react-router-dom';
import CalculatorInput from './calculator/CalculatorInput';
import TBill from './tbill/Tbill';
import ClaimPage from './claims/table/ClaimPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/calculator" element={<CalculatorInput />} />
      <Route path="/tbill" element={<TBill />} />
      <Route path="/claims" element={<ClaimPage />} />
    </Routes>
  );
}
