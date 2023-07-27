import { Routes, Route } from 'react-router-dom'
import MedicineView from './views/MedicineView';
import SymptomView from './views/SymptomView';
import DashboardView from './views/DashboardView';
import './css/DashboardStyle.css'



function App() {
  return (
    <Routes>
      <Route path='/' element={<DashboardView />} />
      <Route path='/medicine' element={<MedicineView />} />
      <Route path='/symptom' element={<SymptomView />} />
    </Routes>
  );
}

export default App;
