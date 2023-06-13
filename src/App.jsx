import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pageComponent/layout/index';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Auth from './pageComponent/auth/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Auth />} />
          {/* <Route path="category/:slug" element={<Archive />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
