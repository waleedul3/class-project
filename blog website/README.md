# Blog Website

A full-stack blog website with user authentication, post management, image uploads, and an admin panel.

## Features

- User registration and authentication
- Create, read, update, and delete blog posts
- Image upload for blog posts
- Admin panel for user and post management
- Responsive design using Bootstrap

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer

## Installation

1. Clone the repository
2. Install dependencies:

```bash
cd backend
npm install
```

3. Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```bash
npm run dev
```

## Setting Up Admin User

To make a user an admin, you can use the provided script:

```bash
# Navigate to the scripts directory
cd backend/scripts

# Make the first registered user an admin
node makeAdmin.js

# Or specify an email to make that user an admin
node makeAdmin.js user@example.com
```

## Usage

### User Features

1. **Register/Login**: Create an account or login to an existing account
2. **View Posts**: Browse all blog posts on the home page
3. **Create Posts**: Create new blog posts with optional images
4. **Manage Posts**: Edit or delete your own posts

### Admin Features

1. **User Management**: View all users and change their roles (admin/regular user)
2. **Post Management**: View and delete any post regardless of the author
3. **Access Control**: Only admin users can access the admin panel

## File Structure

```
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Post.js
│   │   └── User.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── auth.js
│   │   └── posts.js
│   ├── scripts/
│   │   └── makeAdmin.js
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── admin.html
│   ├── create.html
│   ├── index.html
│   ├── login.html
│   ├── post.html
│   └── register.html
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `GET /api/users/me` - Get current user

### Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a specific post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Admin

- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id` - Update user role
- `GET /api/admin/posts` - Get all posts
- `DELETE /api/admin/posts/:id` - Delete any post

## License

This project is open source and available under the [MIT License](LICENSE).