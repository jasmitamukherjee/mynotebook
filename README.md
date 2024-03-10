# MyNotebook Readme

MyNotebook is a simple web application that allows users to manage their notes. Users can sign up for an account, log in, create notes, update existing notes, and delete notes.

## Features

- **User Authentication:** Users can sign up for a new account or log in using their existing credentials.
- **Create Notes:** Once logged in, users can create new notes with a title and content.
- **Update Notes:** Users can edit the content of their existing notes.
- **Delete Notes:** Users can delete notes they no longer need.

## Technologies Used

MyNotebook is built using the following technologies:

- **Frontend:**
  - HTML/CSS
  - JavaScript
  - Bootstrap (for styling)
- **Backend:**
  - Node.js
  - Express.js (for server-side routing)
  - MongoDB (for database storage)
- **Authentication:**
  - JSON Web Tokens (JWT) for user authentication

## How to Run

To run MyNotebook locally, follow these steps:

1. Clone the GitHub repository:
git clone https://github.com/your-username/mynotebook.git


2. Install dependencies:

cd mynotebook
npm install


3. Set up MongoDB:

   - Make sure you have MongoDB installed and running on your machine.
   - Create a `.env` file in the root directory of the project.
   - Add the following line to the `.env` file:


Replace `mongodb://localhost:27017/mynotebook` with your MongoDB connection URI if it's different.

4. Start the server:

npm start


5. Open your web browser and navigate to `http://localhost:3000` to access MyNotebook.

## Usage

1. **Sign Up:**
   - Click on the "Sign Up" button to create a new account.
   - Enter your email address and password.
   - Click on "Sign Up" to create your account.

2. **Log In:**
   - Once you have an account, you can log in by clicking on the "Log In" button.
   - Enter your email address and password.
   - Click on "Log In" to access your account.

3. **Create a Note:**
   - After logging in, you'll see an option to create a new note.
   - Enter a title and content for your note.
   - Click on "Save" to create the note.

4. **Update a Note:**
   - To update an existing note, click on the note title.
   - You'll be directed to the note detail page where you can edit the content.
   - Click on "Save" to update the note.

5. **Delete a Note:**
   - To delete a note, click on the trash icon next to the note title.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was inspired by the need for a simple note-taking application.
- Special thanks to all contributors who helped in developing and testing this application.

## Contact

For any inquiries or support, please contact jasmitamukherjee4@gmail.com

 
