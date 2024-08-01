# Burrito Shop API

A simple Node.js application for managing a burrito shop's point of sales and ordering system.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or a MongoDB Atlas account)
- [Postman](https://www.postman.com/) (for testing the API)

## Installation

1. Clone the repository:

   git clone https://github.com/yourusername/burrito-shop.git
   cd burrito-shop
  

2. Install the dependencies:

   npm install


## Configuration

1. Create a `.env` file in the root directory and add your MongoDB connection string:

   MONGODB_URI=mongodb://localhost:27017/burrito-shop
  
## Running the Application

1. Start the MongoDB server if it's not already running:

   mongod

2. Start the application:

   npm start
 
   The application will be running at `http://localhost:3000`.

## API Endpoints

### Burrito Routes

- **Get All Burritos**
  - **URL**: `GET http://localhost:3000/api/burrito`
  - **Response**:
    ```
    [
      {
        "_id": "60c72b2f9b1e8a001c8e4b8a",
        "name": "Chicken Burrito",
        "size": "regular",
        "price": 3
      },
      {
        "_id": "60c72b2f9b1e8a001c8e4b8b",
        "name": "Beef Burrito",
        "size": "XL",
        "price": 5
      }
    ]
    `

### Order Routes

- **Get All Orders**
  - **URL**: `GET http://localhost:3000/api/orders`
  - **Response**:
    ```
    [
      {
        "_id": "60c72b2f9b1e8a001c8e4b8c",
        "items": [
          {
            "burrito": "60c72b2f9b1e8a001c8e4b8a",
            "quantity": 2
          }
        ],
        "totalCost": 6
      }
    ]
    ```

- **Submit an Order**
  - **URL**: `POST http://localhost:3000/api/orders`
  - **Body**:
    ```
    {
      "items": [
        {
          "burrito": "60c72b2f9b1e8a001c8e4b8a",
          "quantity": 2
        }
      ],
      "totalCost": 6
    }
    ```

- **Get Order Details**
  - **URL**: `GET http://localhost:3000/api/orders/:id`
  - **Response**:
    ```
    {
      "_id": "60c72b2f9b1e8a001c8e4b8c",
      "items": [
        {
          "burrito": "60c72b2f9b1e8a001c8e4b8a",
          "quantity": 2
        }
      ],
      "totalCost": 6
    }
    ```

## Testing the API with Postman

You can use Postman to test the API endpoints. Below are some example requests:

### Get All Burritos

- **URL**: `GET http://localhost:3000/api/burrito`

### Get All Orders

- **URL**: `GET http://localhost:3000/api/orders`

### Submit an Order

- **URL**: `POST http://localhost:3000/api/orders`
- **Body**:
  ```
  {
    "items": [
      {
        "burrito": "60c72b2f9b1e8a001c8e4b8a",
        "quantity": 2
      }
    ],
    "totalCost": 6
  }
  ```

### Get Order Details

- **URL**: `GET http://localhost:3000/api/orders/:id`

## License

This project is licensed under the MIT License.
```

