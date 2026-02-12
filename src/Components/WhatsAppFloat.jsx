import './WhatsAppFloat.css';
import { createWhatsAppContactURL } from '../utils/whatsapp.js';

function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const whatsappURL = createWhatsAppContactURL();
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="whatsapp-float" onClick={handleWhatsAppClick}>
      <div className="whatsapp-icon">
        <i className="fa-brands fa-whatsapp"></i>
      </div>
      <div className="whatsapp-tooltip">
        Chat with me on WhatsApp
      </div>
    </div>
  );
}

export default WhatsAppFloat;