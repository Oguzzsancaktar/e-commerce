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

## CROS ORIGIN !!!
- Add Cors to dependencies and apply it as middlaware your server

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

## Routing (frontend)
- I will use react-router-dom library for routing.
- If you want to take params from url you can use useLocation hook (react-router-dom)

## Fetch Data From Server (axios)
- For fetching products you can use useEffect to take changes
- When using axios we have axios.create method 
- Axios create method takes an object, this object can store baseUrl or header
- You can use this method instead of axios and you can send request easily

<span style="color:red">- ? mark is important when data can come undefined or null </span>


### Redux (toolkit)
- Slice is basicly store element, you can add store with slice name
- Slices have reducers, reducers is simply methods for slice, reducers takes state parameter and updates state
- Reducers takes another parameter is named action, actions have payload this payload and action includes data
- Reducers can export from slice.actions and slice.reducer
- You must to import your reducers to configureStore
- configureStore takes object which includes reducers
- Configurestore reducer takes object which is reducer name value reducer itself
- Wrap your component with Provider (from react-redux) for using store send this provider to your store
- For reaching store state in child components you can use useSelector hook and it takes state parameter
- state have reducers which we defined in store before (createStore)

- Dispatch from react-redux
- We are defined slice, it has name attribute for adding store and reducers for functions 
- We exported reducer from slice.actions and if you want to call that function you should use useDispatch hook 
- this hook takes parameter type of reducer function
- we are sending paylod here
- you can call funtion in dipatch or you can send function to dipatch as parameter
- and in function you can call dispach
- using it this way allows us to lose which component we were sent from

### useHistory & useLocation
- use useHistory hook from  react-router for redirecting user 
- useHistory first parameter is path , second parameter takes object 
- useLocation hooks gives us to location informations
- useHistory hook deprecated, use useNavigate instead of useHistory
- useNavigate first parameter is url and second parameter is takes option object send data with state


### We are using persist for store state (redux-persist)
- persist gives us to protect redux state when page refresh
- Combine reducers method gives us to mix reducers and return one reducer for using store