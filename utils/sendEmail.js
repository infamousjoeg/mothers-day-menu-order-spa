// Import the mailgun-js package using require
const mailgun = require('mailgun-js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '.env.local' });

const mg = mailgun({
  apiKey: process.env.REACT_APP_MAILGUN_API_KEY,
  domain: process.env.REACT_APP_MAILGUN_DOMAIN,
});

const send = async (name, email, message, selectedItems) => {
  const data = {
    from: `mothersday@${process.env.REACT_APP_MAILGUN_DOMAIN}`,
    to: process.env.REACT_APP_RECIPIENT_EMAIL,
    subject: 'Mother\'s Day Menu Order',
    text: `Name: ${name}\nEmail: ${email}\n\nMenu Items:\n${selectedItems.map(item => item.name).join('\n')}\n\nMessage: ${message}`,
  };

  return new Promise((resolve, reject) => {
    mg.messages().send(data, (error, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
};

module.exports = { send };
