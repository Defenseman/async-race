import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { GaragePage } from './pages/GaragePage/GaragePage';
import { WinnerPage } from './pages/WinnerPage/WinnerPage';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GaragePage />} />
        <Route path="/winners" element={<WinnerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
