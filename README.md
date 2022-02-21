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

 