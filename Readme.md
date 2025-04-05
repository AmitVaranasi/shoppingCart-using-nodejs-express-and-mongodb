# Shopping Cart Application

A full-featured shopping cart application built with Node.js, Express, and MongoDB. This application allows users to browse products, add them to a cart, and complete the checkout process.

## Features

- User authentication and registration
- Product browsing and searching
- Shopping cart functionality
- Checkout process
- Admin panel for product management
- Responsive design for mobile and desktop

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Template Engine**: EJS
- **Authentication**: Passport.js
- **Payment Processing**: Stripe (integration ready)
- **CSS Framework**: Bootstrap

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v12.x or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/AmitVaranasi/shoppingCart-using-nodejs-express-and-mongodb.git
   cd shoppingCart-using-nodejs-express-and-mongodb
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```

4. Start the application:
   ```
   npm start
   ```

5. Visit `http://localhost:3000` in your browser to view the application.

## Usage

### User Flow
1. Register a new account or login with existing credentials
2. Browse products by category
3. Add products to your cart
4. View cart and adjust quantities
5. Proceed to checkout
6. Complete the payment process

### Admin Flow
1. Login with admin credentials
2. Access the admin dashboard at `/admin`
3. Manage products (add, edit, delete)
4. View orders and update order status

## Project Structure

```
├── app.js                  # Entry point
├── controllers/            # Route controllers
├── models/                 # Database models
├── public/                 # Static files (CSS, JS, images)
├── routes/                 # Express routes
├── views/                  # EJS templates
├── middleware/             # Custom middleware
├── utils/                  # Utility functions
└── config/                 # Configuration files
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login a user
- `GET /auth/logout` - Logout a user

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get a specific product
- `GET /products/category/:category` - Get products by category

### Cart
- `GET /cart` - View cart
- `POST /cart/add/:id` - Add a product to cart
- `PUT /cart/update/:id` - Update product quantity
- `DELETE /cart/remove/:id` - Remove a product from cart

### Orders
- `POST /checkout` - Create a new order
- `GET /orders` - Get user orders
- `GET /orders/:id` - Get a specific order

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Express.js documentation
- MongoDB documentation
- Bootstrap for the responsive UI components
