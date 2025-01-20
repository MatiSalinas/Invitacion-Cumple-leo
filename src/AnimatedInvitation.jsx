import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedInvitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  const buttonText = !isFlipped ? 'Estas invitado' : 'See you there!';

  return (
    <div className="invitation">
      <div className={`envelope ${isOpen ? 'is-open' : ''}`}>
        <motion.div 
          className="mask"
          animate={isOpen ? {
            clipPath: 'inset(0 0 0% 0)',
            overflow: 'visible'
          } : {
            clipPath: 'inset(0 0 100% 0)',
            overflow: 'hidden'
          }}
          transition={{ duration: 1.3, ease: 'circIn' }}
        >
          <motion.div 
            className="card"
            animate={{
              y: isOpen ? '100%' : '250%',
              scaleY: isOpen ? 1 : 1.2,
              rotateY: isFlipped ? 180 : 0
            }}
            transition={{
              duration: 1,
              ease: 'circIn',
              rotateY: {
                duration: 1,
                ease: [0.32, 0, 0.67, 0] // Power4.easeInOut equivalent
              }
            }}
          >
            <div className="face front">
              <h1>
                <img 
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39132/poke-logo.svg" 
                  alt="Pokemon Logo"
                />
                <span className="extrude">Invitation Card</span>
              </h1>
            </div>
            <div className="face back">
              <img 
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39132/poke-peeps.png" 
                alt="Pokemon Characters"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="flap"
        animate={{
          rotateX: isOpen ? 180 : 0,
          zIndex: isOpen ? 0 : 1
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      <motion.button
        onClick={handleClick}
        animate={{
          y: isOpen ? '180px' : 0
        }}
        transition={{ duration: 1, ease: 'circIn', delay: isOpen ? 0.15 : 0 }}
        className={isFlipped ? 'invert' : ''}
      >
        {buttonText}
      </motion.button>
    </div>
  );
};

export default AnimatedInvitation;