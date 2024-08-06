# TurboTide Chatbot

## Project Overview
TurboTide Chatbot is an interactive chatbot web application that uses the Meta-Llama-3-70B API to provide fast and accurate responses
to a wide range of text prompts. Whether users are asking software development questions or seeking answers on various topics,
this powerful tool delivers rapid and relevant responses.

## Technologies Used
- Node.js
- Express
- Meta-Llama-3-70B API
- HTML
- CSS
- JavaScript

## Setup Instructions
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/TurboTide_Chatbot.git
    cd software-dev-chatbot
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the root directory and add your Meta-Llama-3-70B API key! I got mine through Groq:
    ```env
    GROQ_API_KEY=your-api-key-here
    ```

4. **Start the development server:**
    ```bash
    npm start
    ```

5. **Access the chatbot:**
    - Open your browser and go to `http://localhost:3000`

## Usage Guide
- Type your text prompts in the input box and click "Send" to interact with the chatbot.
- The chatbot will process your query and provide a fast and accurate response using the Meta-Llama-3-70B API.

## Code Structure
- `server.js`: The main server file that sets up Express and handles routes.
- `llama.js`: Contains the logic for interacting with the Meta-Llama-3-70B API.
- `public/`: Contains static files (HTML, CSS, JavaScript).
    - `index.html`: The main HTML file for the chatbot interface.
    - `style.css`: The stylesheet for the chatbot interface.
    - `main.js`: The JavaScript file that handles user input and chatbot responses.

## Security Considerations
- Environment variables are used to store sensitive information.
- Input validation and sanitization are implemented to prevent injection attacks.
- HTTPS is used for secure API communication.
- Error handling ensures detailed errors are logged server-side, while users see generic messages.

## Contributing
- Fork the repository and create a new branch for your feature or bugfix.
- Ensure your code follows the project's code style.
- Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
