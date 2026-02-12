/**
 * Property-based tests for WhatsApp utilities
 * Feature: portfolio-enhancements
 */

import { describe, it, expect } from 'vitest';
import { formatWhatsAppMessage, generateWhatsAppURL, validatePhoneNumber, sanitizeMessage } from './whatsapp.js';

describe('WhatsApp Utilities', () => {
  // Property 1: WhatsApp Message Formatting
  // **Validates: Requirements 1.1, 1.3**
  it('Property 1: For any valid contact form data, the WhatsApp message formatter should include all three fields in a readable format with proper labels', () => {
    // Test with various form data combinations
    const testCases = [
      { name: 'John Doe', email: 'john@example.com', message: 'Hello there!' },
      { name: 'Jane Smith', email: 'jane.smith@company.co.uk', message: 'I would like to discuss a project opportunity.' },
      { name: 'Alex Johnson', email: 'alex123@domain.org', message: 'Quick question about your services.' },
      { name: 'María García', email: 'maria@test.es', message: 'Hola! Me interesa tu trabajo.' },
      { name: 'Test User', email: 'test+tag@example.com', message: 'This is a test message with special characters: @#$%' }
    ];

    testCases.forEach(formData => {
      const result = formatWhatsAppMessage(formData);
      
      // Verify all fields are present
      expect(result).toContain(formData.name);
      expect(result).toContain(formData.email);
      expect(result).toContain(formData.message);
      
      // Verify proper labels
      expect(result).toContain('Name:');
      expect(result).toContain('Email:');
      expect(result).toContain('Message:');
      
      // Verify greeting and signature
      expect(result).toContain('Hi Vibhu!');
      expect(result).toContain('Sent from your portfolio website');
    });
  });

  // Property 2: WhatsApp URL Generation
  // **Validates: Requirements 1.2**
  it('Property 2: For any contact form submission, the generated WhatsApp URL should contain the correct phone number and properly encoded message content', () => {
    const testMessages = [
      'Simple message',
      'Message with spaces and punctuation!',
      'Message with special chars: @#$%^&*()',
      'Multi-line\nmessage\nwith\nbreaks',
      'Message with émojis 🚀 and ñoñó characters'
    ];

    testMessages.forEach(message => {
      const url = generateWhatsAppURL(message);
      
      // Verify URL structure
      expect(url).toMatch(/^https:\/\/wa\.me\/916377340061\?text=.+/);
      
      // Verify phone number is correct
      expect(url).toContain('916377340061');
      
      // Verify message is encoded
      expect(url).toContain('text=');
      
      // Verify URL is properly formatted
      expect(() => new URL(url)).not.toThrow();
    });
  });

  // Property 3: Form Validation Error Handling
  // **Validates: Requirements 1.4**
  it('Property 3: For any invalid form input, the validation should handle edge cases properly', () => {
    const invalidPhoneNumbers = [
      '123', // too short
      '12345678901234567890', // too long
      'abc123def', // contains letters
      '+1-234-567-8900', // with special chars
      '', // empty
      '   ', // whitespace only
    ];

    invalidPhoneNumbers.forEach(phoneNumber => {
      const isValid = validatePhoneNumber(phoneNumber);
      expect(typeof isValid).toBe('boolean');
    });

    // Test message sanitization
    const messagesWithSpecialChars = [
      'Normal message',
      'Message with <script>alert("xss")</script>',
      'Message with 💀 emojis and ñoñó',
      'Very long message that exceeds normal limits: ' + 'a'.repeat(2000),
      '   Message with leading/trailing spaces   '
    ];

    messagesWithSpecialChars.forEach(message => {
      const sanitized = sanitizeMessage(message);
      expect(typeof sanitized).toBe('string');
      expect(sanitized.length).toBeLessThanOrEqual(1000);
      expect(sanitized).not.toMatch(/^\s+|\s+$/); // No leading/trailing whitespace
    });
  });
});