/**
 * WhatsApp Integration Utilities
 * Handles message formatting and URL generation for WhatsApp integration
 */

// WhatsApp phone number for Vibhu Yadav
const WHATSAPP_NUMBER = '916377340061';

/**
 * Formats contact form data into a WhatsApp message
 * @param {Object} formData - The form data object
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.message - User's message
 * @returns {string} Formatted WhatsApp message
 */
export const formatWhatsAppMessage = (formData) => {
  const { name, email, message } = formData;
  
  const formattedMessage = `Hi Vibhu! 👋

Name: ${name}
Email: ${email}

Message:
${message}

Sent from your portfolio website`;

  return formattedMessage;
};

/**
 * Generates WhatsApp URL with pre-filled message
 * @param {string} message - The message to pre-fill
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppURL = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

/**
 * Validates phone number format
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} True if valid
 */
export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phoneNumber.replace(/\D/g, ''));
};

/**
 * Sanitizes message content for URL encoding
 * @param {string} message - Message to sanitize
 * @returns {string} Sanitized message
 */
export const sanitizeMessage = (message) => {
  return message
    .replace(/[^\w\s\-.,!?@#$%&*()+=[\]{}|;:'"<>/\\]/g, '')
    .trim()
    .substring(0, 1000); // Limit message length
};

/**
 * Creates WhatsApp contact URL with greeting message
 * @returns {string} WhatsApp URL with greeting
 */
export const createWhatsAppContactURL = () => {
  const greetingMessage = "Hi Vibhu! 👋 I'm interested in connecting with you.";
  return generateWhatsAppURL(greetingMessage);
};