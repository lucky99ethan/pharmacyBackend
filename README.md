# My Backend App

This is a backend application built with Express and MongoDB using Mongoose. It provides an API for handling contact submissions.

## Features

- Create, read, update, and delete contact submissions.
- Connects to MongoDB for data storage.
- Uses environment variables for configuration.

## Project Structure

```
my-backend-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── contactController.ts
│   ├── models                # Contains Mongoose models
│   │   └── contact.ts
│   ├── routes                # Contains route definitions
│   │   └── contactRoutes.ts
│   └── types                 # Contains TypeScript types
│       └── index.ts
├── .env                      # Environment variables
├── package.json              # NPM configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-backend-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

## Usage

To start the application, run:
```
npm start
```

The server will start and listen for requests. You can use tools like Postman to test the API endpoints for contact submissions.

## API Endpoints

- `POST /contacts` - Create a new contact submission
- `GET /contacts` - Retrieve all contact submissions
- `GET /contacts/:id` - Retrieve a specific contact submission by ID
- `PUT /contacts/:id` - Update a specific contact submission by ID
- `DELETE /contacts/:id` - Delete a specific contact submission by ID

## License

This project is licensed under the MIT License.