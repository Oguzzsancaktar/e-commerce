## E-COMMERCE-APP

- You can add fonts from external link to your public/index.html file.

### Dependencies (Frontend)

- React
- Styled Components (styled-components)
- Materialize (@material-ui/core , @material-ui/icons )

### Create pages folder under src directory

- Our boilerplatte is simple but dont have enaughf configurations.
- When starting the project you can create folders for your structure. (pages, components)

##### Homepage layout

- Navbar
- Slider
- Features
- Categories
- Announcement
- Newsletter
- Footer

### Dependencies (Backend)
- Express
- Mongoose
- Dotenv
- Cyrptojs

#### Dev Dependecies
- Nodemon (hod reload)

-- You need to use dot env if you want to use process.env variables 
-- Call the dotenv config function

### Creating API
- Create app from express funtion
- Make mongo connection with mongoose connect
- Create routes folder and create router files for each route 
- Add routes to app 
- Add express.json middleware to app for using json type on requests
- Create models for make application dynamic

#### Creating Model
- Mongoose model inculudes table name as tring and schema
- Mongoose schema defines object types and attributes
- You can add Date now for created at but mongoose have own method,
- Try to mongoose schema second object {timestamps:true}
- Timestamps gives us to control createdAt and UpdatedAt times

### Routes
- If you want to more secure authentication you should use seperate routes for user and auth routers
#### Register
- Create api endpoint for registering user,
- This api takes user informations from request body and creates user with User model
- When registering new user we should hash the user password in this project I will use cyrptojs for hash passwords
#### Login
- First we need to find user with username or whatever you want to use
- After finding user we need to control user password and request password
- Using CrypptoJS making decrption you should make string to decrypted password you should send toString paremeter
- If authentication succes we are sending user to client side but we wont send password attribute.

### JWT
- Making our application more secure with JsonWebToken!
- JWT sign method takes parameters, first paremeter is object with using what information you want to store in token,
second parameter is secret key ,
thirt parameter takes object to includes options like expiresIn

#### Middlevares
- Middlevares takes simply three parameters, req,res,next 
- If next not calling your router wont work
- you can change or use req or response in middleware,
- Middlevres makes our application more secure

#### Using Qery On Route
- Using query important because sometimes you need to find specific users


#### MongoDb Agregate
#### Mongodb Filter and dolar signs

## Using Stripe For Payment