const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "How to get a girlfriend?",
  temperature: 0.3,
  max_tokens: 150,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});