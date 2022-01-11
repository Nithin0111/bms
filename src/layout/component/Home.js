import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VaidateUser from '../../book/component/login/VaidateUser';
import Header from './Header';
import Landing from './Landing';
import '../../css/custom.css';

function Home() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<VaidateUser />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Home;
