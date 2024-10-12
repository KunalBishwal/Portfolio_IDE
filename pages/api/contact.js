const { Client } = require('@notionhq/client');

if (!process.env.NOTION_API_TOKEN || !process.env.NOTION_DATABASE_ID) {
  console.error('NOTION_API_TOKEN or NOTION_DATABASE_ID environment variable is not defined');
  process.exit(1);
}

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }
  try {
    if (!req.body) {
      return res.status(400).json({ msg: 'Request body is missing' });
    }
    const { name, email, subject, message } = JSON.parse(req.body);
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ msg: 'Name, email, subject, and message are required' });
    }
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed' });
  }
};
