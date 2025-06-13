import axios from 'axios';

async function getParagraph() {
  try {
    const response = await axios.get('https://express-paragraph-apis.vercel.app/api/paragraph');
    return response.data;
  } catch (error) {
    console.error('Error fetching paragraph:', error);
    throw error;
  }
}

export { getParagraph };
