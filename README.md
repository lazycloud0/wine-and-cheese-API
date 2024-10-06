# Wine and Cheese Pairing API

## Introduction
This project is an API built with Express.js for managing wine and cheese pairings, backed by a PostgreSQL database. It allows users to perform CRUD operations on wine and cheese data.

## Technologies Used
- **Database:** PostgreSQL
- **Backend:** Node.js, Express
- **Languages:** JavaScript, SQL

## Database Schema
The project consists of two main tables:

### Wine Table
- `id`: Integer, Primary Key
- `name`: String
- `description`: String
- `country`: String
- `colour`: String

### Cheese Table
- `id`: Integer, Primary Key
- `name`: String
- `description`: String
- `country`: String
- `milk_type`: String
- `wine_id`: Integer, Foreign Key referencing `Wine(id)`

## CRUD Operations
The API supports the following CRUD operations:

- **Create:** Add new wine or cheese entries
- **Read:** Retrieve wine or cheese entries
- **Update:** Modify existing wine or cheese entries
- **Delete:** Remove wine or cheese entries

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/wine-and-cheese-pairing-api.git
    ```

2. Navigate to the project directory:
    ```sh
    cd wine-and-cheese-pairing-api
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

4. Set up the PostgreSQL database and configure the environment variables for database connection.

5. Run the database migration scripts to create the tables:
    ```sh
    node db/scripts/reset-database.js
    ```

6. Start the application:
    ```sh
    npm start
    ```

## API Endpoints
Here are the main API endpoints:

### Wine Endpoints
- `GET /wines`: Retrieve all wines
- `GET /wines/:id`: Retrieve a specific wine by ID
- `POST /wines`: Create a new wine
- `PUT /wines/:id`: Update an existing wine by ID
- `DELETE /wines/:id`: Delete a wine by ID

### Cheese Endpoints
- `GET /cheeses`: Retrieve all cheeses
- `GET /cheeses/:id`: Retrieve a specific cheese by ID
- `POST /cheeses`: Create a new cheese
- `PUT /cheeses/:id`: Update an existing cheese by ID
- `DELETE /cheeses/:id`: Delete a cheese by ID


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
For any questions or suggestions, please feel free to contact me. 😊
