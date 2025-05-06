import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmailSubs from "./components/email-subscribe/EmailSubs";
import emailImgae from './assets/email/images/image.jpg';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/email-subs" element={
          <EmailSubs 
            mainImage={emailImgae}
            mainHeading="Get diet and fitness tips in your inbox"
            mainPara="Eat better and exercise better. Sign up for the diet and Fitness"
          />
        } />
        <Route path="/pricing-grid" element={<div>Pricing Grid Component</div>} />
        <Route path="/product-modal" element={<div>Product Modal Component</div>} />
        <Route path="/image-gallery" element={<div>Image Gallery Component</div>} />
      </Routes>
    </Router>
  );
}

export default App;
