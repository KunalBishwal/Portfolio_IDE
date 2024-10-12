const { Client } = require('@notionhq/client');

// Check if the NOTION_API_TOKEN and NOTION_DATABASE_ID environment variables are set
if (!process.env.NOTION_API_TOKEN || !process.env.NOTION_DATABASE_ID) {
  console.error('NOTION_API_TOKEN or NOTION_DATABASE_ID environment variable is not defined');
  process.exit(1);
}

// Initialize the Notion client with the authentication token
const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export default async (req, res) => {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Only POST requests are allowed' });
  }

  try {
    // Check if the request body exists
    if (!req.body) {
      return res.status(400).json({ msg: 'Request body is missing' });
    }

    // Safely parse the request body
    let parsedBody;
    try {
      parsedBody = JSON.parse(req.body);
    } catch (e) {
      return res.status(400).json({ msg: 'Invalid JSON in request body' });
    }

    // Destructure necessary fields from the parsed body
    const { name, email, subject, message } = parsedBody;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ msg: 'Name, email, subject, and message are required' });
    }

    // Create a new page in the Notion database
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

    // Send a success response
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    // Log the error for debugging
    console.error('Error creating page in Notion:', error);

    // Respond with a generic error message
    res.status(500).json({ msg: 'Failed to create page in Notion' });
  }
};
