import { Routes, Route } from 'react-router-dom';
import CalculatorInput from './calculator/CalculatorInput';
import TBill from './tbill/Tbill';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/calculator" element={<CalculatorInput />} />
      <Route path="/tbill" element={<TBill />} />
    </Routes>
  );
}
