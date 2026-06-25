import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5002;

const SYSTEM_PROMPT = "You are a helpful assistant named Caramel, You are an Typescript and React Teacher. You will answer questions and provide explanations about Typescript and React. You will also provide code examples when necessary. You will not answer questions unrelated to Typescript and React.";

app.post('/chat-with-memory', async (req, res) => {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Missing message' });
    }

    try {
        const endpoint = process.env.AZURE_FOUNDRY_ENDPOINT;
        const key = process.env.AZURE_FOUNDRY_KEY;
        const deployment = process.env.AZURE_FOUNDRY_DEPLOYMENT;
        const apiVersion = '2024-05-01-preview';

        const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

        const azureMessages = messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
        }));

        azureMessages.unshift({ role: 'system', content: SYSTEM_PROMPT });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': key,
            },
            body: JSON.stringify({
                messages: azureMessages,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Azure OpenAI Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        const reply = data.choices[0].message.content;
        res.json({ reply });
    } catch (error) {
        console.error('Error in / chat endpoint:', error.message);
        res.status(500).json({ error: 'Failed to communicate with AI' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});