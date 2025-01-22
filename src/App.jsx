import { useState, useEffect } from 'react'
import './style.scss'
import useEmblaCarousel from 'embla-carousel-react'
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  useEffect(() => {
    // Scroll inicial cuando el componente se monta
    window.scrollTo({
      top: window.innerHeight * 0.3, // Puedes ajustar este valor (40% de la altura de la ventana)
      behavior: 'smooth'
    });
  }, []); // El
  const handleOpen = () => {
    setIsOpen(true);
    // Wait for flip animation before showing letter
    setTimeout(() => {
      setIsLetterOpen(true);
      window.scrollTo({
        top: window.scrollY - 300, // Puedes ajustar este valor
        behavior: 'smooth'
      });
    }, 400);
  };

  const handleClose = () => {
    setIsLetterOpen(false);
    // Wait for letter to close before closing envelope
    window.scrollTo({
      top: window.scrollY + 300, // Puedes ajustar este valor
      behavior: 'smooth'
    });
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };
  const [emblaRef] = useEmblaCarousel()
  

  return (
      <div className="appContainer">
        <div className="all_container">
            <div className="container">
              <div className="aux"></div>
              <div className="envelope"></div>
              <div className={`flip ${isOpen ? 'open' : 'close'}`}></div>
              <div
                className={`letter ${isLetterOpen ? 'letterOpen' : 'letterClose'}`}
                style={{ zIndex: isLetterOpen ? 7 : 5 }}
              >
                <div className="text">
                  <p>Estas invitado</p>
                  <h2>Acá están llegando mis 48 años de vida con las personas que amo y quiero siempre en mi vida
                  </h2>
                  <p>CUMPLEAÑOS 48</p>
                  <p>VIERNES, 31 DE ENERO</p>
                  <p>A LAS 21:00 HS.</p>
                  <p>MI CASA</p>
                    <button  id='cerrar' onClick={handleClose}>X</button>
                </div>
              </div>
            <button  id='abrir' onClick={handleOpen}>ABRIR</button>
            </div>
        </div>
          <div className="fotos">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide"><img src="images/foto1.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto2.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto3.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto4.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto5.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto6.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto7.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto8.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto9.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto10.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto11.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto12.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto13.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto14.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto15.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto16.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto17.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto18.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto19.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto20.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto21.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto22.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto23.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto24.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto25.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto26.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto27.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto28.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto29.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto30.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto31.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto32.jpg" alt=""  /></div>
                  <div className="embla__slide"><img src="images/foto33.jpg" alt=""  /></div>

                  
                </div>
            </div>
          </div>
            <div className="info">
              <h2 >
                Leonardo Brigido
              </h2>
              <div className="botones">
                <a href="https://wa.me/3804221878?text=Confirmo%20asistencia%20para%20el%20viernes%2031%20a%20la%20noche" className="botonInv">VOY</a>
                <a href="https://wa.me/3804221878?text=No%20voy%20a%20poder%20asistir%20el%20viernes%2031%20a%20la%20noche" className="botonInv">NO VOY</a>
              </div>
              <div className="masInfo">
                <div className="mInfo">
                  <p>FECHA</p>
                  <p className='subR'>Viernes, 31 de Enero </p>
                </div>
                <div className="mInfo">
                  <p>HORA</p>
                  <p className='subR'>21:00</p>
                </div>
                <div className="mInfo">
                  <p>DIRECCION</p>
                  <a href='https://maps.app.goo.gl/KXAd15yoEey8M4YB6' target="_blank" ><p className='subR'>Av. San Francisco 3918</p></a>
                </div>
                </div>
                <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.4670022336213!2d-66.8993559!3d-29.415144399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427db891275c533%3A0xbd483f4d849a4416!2sAv.%20San%20Francisco%203918%2C%20La%20Rioja!5e0!3m2!1ses-419!2sar!4v1737504489565!5m2!1ses-419!2sar" width="400" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
         
             
            </div>
      </div>
      
  );
};

export default App;
