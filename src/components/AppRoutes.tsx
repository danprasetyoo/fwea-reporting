import { Routes, Route } from 'react-router-dom';
import CalculatorInput from './calculator/CalculatorInput';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/calculator" element={<CalculatorInput />} />
    </Routes>
  );
}
