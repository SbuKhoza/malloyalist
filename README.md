Shopping List Application
A React-based shopping list app with Redux for state management. It allows users to create, read, update, and delete shopping list items, with features like search, sorting, filtering, and user authentication.

Features
User signup and login for secure list management.
CRUD operations for managing shopping items.
Search, sort, and filter functionality.
Responsive UI with a popup for adding/editing items.
Redux integration for efficient state management.
Data persistence using a local JSON server.
Installation
Clone the repository and navigate to the project directory.
Install dependencies with npm install or yarn install.
Start the JSON server: json-server --watch db.json --port 5000.
Run the app: npm start or yarn start.
Access the app at http://localhost:3000.
Usage
Sign up and log in to manage shopping lists.
Add, edit, or delete items.
Search and filter items, and sort them alphabetically.
Log out when done.
API Endpoints
GET /users: Fetch all users.
POST /users: Create a new user.
GET /listings: Fetch all listings.
POST /listings: Create a new listing.
PUT /listings/:id: Update a listing.
DELETE /listings/:id: Delete a listing.