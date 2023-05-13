// Import the sendEmail function using require
const { send } = require('../utils/sendEmail');

// Change export default to module.exports
async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { name, email, message, selectedItems } = req.body;

  if (!name || !email || !selectedItems) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  try {
    await send(name, email, message, selectedItems);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}

module.exports = handler;