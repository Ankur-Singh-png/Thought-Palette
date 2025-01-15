# Thought Palette: A Blog Website
Thought Palette is a fully functional blog platform designed to allow users to share their thoughts and ideas seamlessly. This project combines a modern tech stack with intuitive user experience to deliver a platform where users can create, edit, delete, and explore blog posts effortlessly.
<br/>

### *Idea Behind Creating Thought Palette*:
The idea comes from the need for a personalized blogging platform where users can enjoy rich-text editing, upload media, and engage with relevant content. By building Thought Palette, I aimed to gain hands-on experience in creating a full-stack application while delivering a functional, user-centric product.

### *Working*:
 #### 1. Frontend
The frontend is the user-facing part of the application, developed with React.js. It ensures a smooth, interactive experience for users. <br/>
Key functionalities include:

- Create, Edit, and Delete Posts:
  - Users can create, edit, and delete blog posts with titles, content, and images, with changes reflected in real-time.
  - React-Quill provides a rich-text editor for formatting options like bold, italic, and more, enhancing the writing experience. <br/>

- Dynamic Post Filtering:
  - Users can filter posts by categories, tags, or keywords, enabling personalized content discovery. <br/>
  
- Seamless Navigation:
  - React Router enables seamless navigation between pages like the homepage, editor, or posts, without page reloads, enhancing speed and user experience. <br/>

 #### 2. Backend
The backend is the engine behind the application, built using Node.js and Express.js. It manages all server-side operations, such as:

API Communication:
- API Communication:
  - APIs serve as the bridge between the frontend and the database.
  - For instance, when a user creates a post, the frontend sends the data to an API endpoint on the backend, which then stores it in the database.
  - Similarly, APIs retrieve posts from the database to display on the frontend. 

- File Uploads:
  - The Multer library processes images or files that users upload.
  - It ensures files are stored securely on the server and linked to the respective posts. 

- File Uploads:
  - The Multer library processes images or files that users upload.
  - It ensures files are stored securely on the server and linked to the respective posts. 

- Session Management:
  - Cookie-Parser handles session data by storing cookies in the user’s browser.
  - These cookies maintain session states, such as keeping users logged in until they log out manually.



 #### 3. Security
Security is a priority to protect user data and prevent unauthorized actions.

- JWT (JSON Web Tokens):
  - A JWT is generated and sent to the user's browser upon login, enabling secure authentication.
  - The token is verified on every request to ensure only authenticated users can perform actions like creating, editing, or deleting posts.

- Token Protection:
  - Even if someone tries to manipulate API calls, they can’t succeed without a valid token.
  - This ensures that data is protected from unauthorized access.

- Database
  - The MySQL database is the backbone of data storage and retrieval for the platform.


 #### 4. Users:
Stores user information, including usernames, hashed passwords, and session details.
Ensures only authorized users can log in and perform actions.

- Posts:
  - Stores details of blog posts such as titles, content, tags, image paths, and timestamps.
  - Ensures efficient data retrieval, such as fetching all posts, filtering by category, or finding a specific user’s posts.

- Relationships:
  - The database maintains relationships between users and their posts, ensuring every post is tied to a specific user.
  - This enables features like showing all posts by a particular user.

### *What I Learned From This Project*:
- ***Frontend Development:*** Advanced React.js features like state management, React Router, and React-Quill for rich text editing.
- ***Backend Development:*** Building RESTful APIs with Node.js and Express.js, handling file uploads with Multer, and managing session data using Cookie-Parser.
- ***Database Management:*** Designing and interacting with a MySQL database to store user and post data efficiently.
- ***Security:*** Implementing JWT for secure user authentication and session management.
- ***Styling:*** Crafting modern, responsive designs using SCSS for better UI/UX.
<br/>
<img src="https://github.com/Ankur-Singh-png/Thought-Palette/blob/main/pic/pic%20(1).png" alt="Alt Text" align-items="center" />
<br />
<img src="https://github.com/Ankur-Singh-png/Thought-Palette/blob/main/pic/pic%20(2).png" alt="Alt Text" align-items="center" />
<br />
<img src="https://github.com/Ankur-Singh-png/Thought-Palette/blob/main/pic/pic%20(3).png" alt="Alt Text" align-items="center" />
<br />
<img src="https://github.com/Ankur-Singh-png/Thought-Palette/blob/main/pic/pic%20(4).png" alt="Alt Text" align-items="center" />
<br />
