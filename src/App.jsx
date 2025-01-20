import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.scss'
import './invitacion'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Wait for flip animation before showing letter
    setTimeout(() => {
      setIsLetterOpen(true);
    }, 400);
  };

  const handleClose = () => {
    setIsLetterOpen(false);
    // Wait for letter to close before closing envelope
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="all_container">
        <div className="container">
          <div className="envelope"></div>
          <div className={`flip ${isOpen ? 'open' : 'close'}`}></div>
          <div
            className={`letter ${isLetterOpen ? 'letterOpen' : 'letterClose'}`}
            style={{ zIndex: isLetterOpen ? 7 : 5 }}
          >
            <div className="text"></div>
          </div>
        </div>
        <button className="open" onClick={handleOpen}>open</button>
      
      <button className="close" onClick={handleClose}>close</button>
   
      
    </div>
  );
};

export default App;
