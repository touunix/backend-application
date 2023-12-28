# Backend Application

## General information

This is a simple backend application that focuses on establishing a connection and interaction with a MongoDB Database
using various HTTP methods such as GET, POST, PUT, and DELETE. The main functions of that application are divided into
parts like models, routes, controllers and middleware.

---

## This repository contains:

- An `api` directory, which contains the main functionality of that application.

	- A `controllers` directory, which contains the controller components responsible for handling and responding to
	  user input.

		- A `cars_controller.js` file, which defines controller actions related to managing cars within the application.

		- A `spare_parts_controller.js` file, which defines controller actions related to managing spare parts or
		  components within the application.

		- An `users_controller.js` file, which defines controller actions related to user management, handling tasks
		  such as user registration and login.

	- A `middleware` directory, which contains middleware components that perform tasks such as authentication.

		- A `check_authorization.js` file, which defines a middleware component responsible for checking authorization
		  tokens, ensuring that only authorized users have access to specific resources or perform certain actions.

	- A `models` directory, which contains the model components representing the data structures of the application.

		- A `car_model.js` file, which defines the data structure associated with the representation of cars in the
		  application.

		- A `spare_part_model.js` file, which defines the data structure associated with the representation of spare
		  parts in the application.

		- An `user_model.js` file, which defines the data structure associated with the representation of users in the
		  application.

	- A `routes` directory, which contains route definitions that map HTTP requests to specific controller actions,
	  helping to organize and modularize the application's endpoint handling.

		- A `cars_route.js` file, which defines the routes and their corresponding controller actions related to car
		  management.

		- A `spare_parts_route.js` file, which defines the routes and their corresponding controller actions related to
		  spare parts management.

		- An `users_route.js` file, which defines the routes and their corresponding controller actions related to user
		  management.

- An `.env` file, which defines environmental variables for the application.

- An `app.js` file, which serves as the entry point for the application, configuring and setting up the express server,
  middleware, and other essential components.

- A `database.js` file, which contains the configuration and setup for connecting to the database.

- A `package-lock.json` file, which is automatically generated and contains the precise dependency tree with versions
  for the npm packages used in the project.

- A `package.json` file, which contains metadata about the project, including its dependencies and scripts, and is used
  by npm to manage the project.

- A `server.js` file, which initializes and starts the server, bringing together the application's components and making
  it accessible to clients.

---

## Requirements

- Installed `Node.js` - application created on 20.9.0 (can work on the others).
- Installed `npm` - application created on 10.1.0 (can work on the others).
- Installed necessary packages are defined in the `package.json` file.

---

## How to install

Open terminal and use this command to installed packages:

```
npm i
```

or

```
npm install
```

That command will install packages and create the `node_modules` directory

---

## Getting started

Run that application with this command:

```
nodemon server.js
```

## How to interact

Example with using `Postman` software.

1. Register a new user in this application.

	- Enter the URL in the proper box, choose **POST** method, and click the `Send` button:

	  ```
	  http://localhost:3100/users/register
	  ```

	- In the body section, enter that example JSON structure:

	  ```
	  {
		  "username": "example_user",
		  "password": "example_password"
	  }
	  ```

   All those actions will guarantee that the new user will be registered in the database. A proper message will appear
   on the output (`New user added Succesfully!`). If some username already exists, there will be information
   that `User already exists.`

2. Login with a username and password.

	- If you already created the user, you can log in with those actions:

	- Enter the URL in the proper box, choose the **POST** method, and click the `Send` button:

	  ```
	  http://localhost:3100/users/login
	  ```

	- In the body section, enter that example JSON structure:

	      ```
	      {
	          "username": "example_user",
	          "password": "example_password"
	      }
	      ```

	  All those actions will guarantee that you will log in. On the output, there will be an authorized token, which
	  will be needed to perform actions with the database. Save that token for later actions.
	  Example message:

   ```
   {
	   "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
   }
   ```

3. Perform actions with the Car model.

	1. List all cars in the database with the following actions:

		- Enter the URL in the proper box and choose **GET** method and click the `Send` button:
		  ```
		  http://localhost:3100/cars
		  ```
		- It will print on the output that example structure:
		  ```
		  {
			  "Feedback_Message": "List of all cars",
			  "Info": [
				  {
					  "_id": "6588168b897fd86dcd891433",
					  "Brand": "Mercedes",
					  "Model": "C200",
					  "Year": 2023,
					  "Color": "red",
					  "License_plate_number": "GD00001",
					  "Is_insured": false,
					  "Data_modification": "2023-12-24T11:31:23.287Z",
					  "__v": 0
				  },
				  {
					  "_id": "6588170631884a05d79c3cb3",
					  "Brand": "Skoda",
					  "Model": "Fabia",
					  "Year": 2015,
					  "Color": "black",
					  "License_plate_number": "GD00002",
					  "Is_insured": true,
					  "Data_modification": "2023-12-24T11:33:26.248Z",
					  "__v": 0
				  },
				  {
					  "_id": "6588170f31884a05d79c3cb5",
					  "Brand": "Skoda",
					  "Model": "Fabia",
					  "Year": 2020,
					  "Color": "black",
					  "License_plate_number": "GD00003",
					  "Is_insured": true,
					  "Data_modification": "2023-12-24T11:33:35.230Z",
					  "__v": 0
				  }
			  ]
		  }
		  ```

	2. List the details of a specific car from the database with the following actions:

		- Copy the example Car ID from the previous action: Example Car ID: `6588168b897fd86dcd891433`
		- Enter the URL in the proper box and choose **GET** method and click the `Send` button:
		  ```
		  http://localhost:3100/cars/6588168b897fd86dcd891433
		  ```
		- It will print on the output that example structure:
		  ```
		  {
			  "Feedback_Message": "Details of the car with ID: 6588168b897fd86dcd891433",
			  "Info": {
				  "_id": "6588168b897fd86dcd891433",
				  "Brand": "Mercedes",
				  "Model": "C200",
				  "Year": 2023,
				  "Color": "red",
				  "License_plate_number": "GD00001",
				  "Is_insured": false,
				  "Data_modification": "2023-12-24T11:31:23.287Z",
				  "__v": 0
			  }
		  }
		  ```

	3. Add a new car to the database with the following actions:

		- Enter the URL in the proper box and choose **POST** method:

		  ```
		  http://localhost:3100/cars
		  ```

		- In the body section, enter that example JSON structure:

		  ```
		  {
			  "Brand": "Volkswagen",
			  "Model": "Golf",
			  "Year": 2015,
			  "Color": "black",
			  "License_plate_number": "GD00004",
			  "Is_insured": true
		  }
		  ```

		- In the Authorization section, select `Type` Bearer Token and enter `Token` generated at the login action.

		- Click the `Send` button.

		- It will print on the output that example structure:
		  ```
		  {
			  "Feedback_Message": "New car added Succesfully!",
			  "Info": {
				  "Brand": "Volkswagen",
				  "Model": "Golf",
				  "Year": 2015,
				  "Color": "black",
				  "License_plate_number": "GD00004",
				  "Is_insured": true,
				  "_id": "65881a1731884a05d79c3cb9",
				  "Data_modification": "2023-12-24T11:46:31.597Z",
				  "__v": 0
			  }
		  }
		  ```

	4. Modify car info in the database with the following actions:

		- Enter the URL in the proper box and choose the **PUT** method:

		    ```
			http://localhost:3100/cars/65881a1731884a05d79c3cb9
			```

		- In the body section, enter that example JSON structure:

		    ```
			{
				"Brand": "Volkswagen",
				"Model": "Golf",
				"Year": 2020,
				"Color": "black",
				"License_plate_number": "GD00004",
				"Is_insured": true
			}
			```

		- In the Authorization section, select `Type` Bearer Token and enter `Token` generated at the login action.

		- Click the `Send` button.

		- It will print on the output that example structure:
		    ```
			{
				"Feedback_Message": "Updated details of a car with ID: 65881a1731884a05d79c3cb9"
			}
			```

	5. Delete cars from the database with the following actions:

		- Enter the URL in the proper box and choose the **DELETE** method:

		    ```
			http://localhost:3100/cars/65881a1731884a05d79c3cb9
			```

		- In the Authorization section, select `Type` Bearer Token and enter `Token` generated at the login action.

		- Click the `Send` button.

		- It will print on the output that example structure:
		    ```
			{
				"Feedback_Message": "Car with ID: 65881a1731884a05d79c3cb9 deleted."
			}
			```

4. Perform actions with the Spare Part model.

	1. List all cars in the database with the following actions:

		- Enter the URL in the proper box and choose **GET** method and click the `Send` button:
		  ```
		  http://localhost:3100/spare_parts
		  ```
		- It will print on the output that example structure:
		  ```
		  {
			  "Feedback_Message": "List of all spare parts.",
			  "Info": [
				  {
					  "_id": "65881cc5a86b138f102e2e2b",
					  "Brand": "Bosch",
					  "Model": "FilterX200",
					  "Model_ID": 123,
					  "Year": 2023,
					  "Lifetime_in_years": 10,
					  "Warranty": 5,
					  "For_vehicles": [
						  "Skoda",
						  "Volkswagen"
					  ],
					  "Data_modification": "2023-12-24T11:57:57.136Z",
					  "__v": 0
				  },
				  {
					  "_id": "65881cfaa86b138f102e2e2d",
					  "Brand": "Valeo",
					  "Model": "Clutch",
					  "Model_ID": 56478,
					  "Year": 2023,
					  "Lifetime_in_years": 15,
					  "Warranty": 2,
					  "For_vehicles": [
						  "Skoda",
						  "Volkswagen",
						  "Seat"
					  ],
					  "Data_modification": "2023-12-24T11:58:50.408Z",
					  "__v": 0
				  },
				  {
					  "_id": "65881d0da86b138f102e2e2f",
					  "Brand": "Bosch",
					  "Model": "Clutch",
					  "Model_ID": 1234,
					  "Year": 2023,
					  "Lifetime_in_years": 12,
					  "Warranty": 10,
					  "For_vehicles": [
						  "Skoda",
						  "Volkswagen",
						  "Seat"
					  ],
					  "Data_modification": "2023-12-24T11:59:09.899Z",
					  "__v": 0
				  }
			  ]
		  }
		  ```

	2. List the details of specific spare parts by brand from the database with the following actions:

		- Copy the example Brand ID from the previous action: Example Brand ID: `Bosch`
		- Enter the URL in the proper box and choose **GET** method and click the `Send` button:
		  ```
		  http://localhost:3100/spare_parts/brand_Bosch
		  ```
		- It will print on the output that example structure:
		  ```
		  {
			  "Feedback_Message": "List of all spare parts by brand.",
			  "Info": [
				  {
					  "_id": "65881cc5a86b138f102e2e2b",
					  "Brand": "Bosch",
					  "Model": "FilterX200",
					  "Model_ID": 123,
					  "Year": 2023,
					  "Lifetime_in_years": 10,
					  "Warranty": 5,
					  "For_vehicles": [
						  "Skoda",
						  "Volkswagen"
					  ],
					  "Data_modification": "2023-12-24T11:57:57.136Z",
					  "__v": 0
				  },
				  {
					  "_id": "65881d0da86b138f102e2e2f",
					  "Brand": "Bosch",
					  "Model": "Clutch",
					  "Model_ID": 1234,
					  "Year": 2023,
					  "Lifetime_in_years": 12,
					  "Warranty": 10,
					  "For_vehicles": [
						  "Skoda",
						  "Volkswagen",
						  "Seat"
					  ],
					  "Data_modification": "2023-12-24T11:59:09.899Z",
					  "__v": 0
				  }
			  ]
		  }
		  ```

	3. List the details of specific spare part from the database with yhe following actions:

		- Copy the example Spare part ID from the previous action: Example Spare Part ID: `65881cc5a86b138f102e2e2b`
		- Enter the URL in the proper box and choose **GET** method and click the `Send` button:
		  ```
		  http://localhost:3100/spare_parts/65881cc5a86b138f102e2e2b
		  ```
		- It will print on the output that example structure:
		  ```
		  {
			  "Feedback_Message": "Details of the spare part with ID: 65881cc5a86b138f102e2e2b",
			  "Info": {
				  "_id": "65881cc5a86b138f102e2e2b",
				  "Brand": "Bosch",
				  "Model": "FilterX200",
				  "Model_ID": 123,
				  "Year": 2023,
				  "Lifetime_in_years": 10,
				  "Warranty": 5,
				  "For_vehicles": [
					  "Skoda",
					  "Volkswagen"
				  ],
				  "Data_modification": "2023-12-24T11:57:57.136Z",
				  "__v": 0
			  }
		  }
		  ```

	4. Add a new spare part to the database with the following actions:

		- Enter the URL in the proper box and choose **POST** method:

		  ```
		  http://localhost:3100/spare_parts
		  ```

		- In the body section, enter that example JSON structure:

		  ```
		  {
			  "Brand": "Bosch",
			  "Model": "Clutch200",
			  "Model_ID": 123,
			  "Year": 1999,
			  "Lifetime_in_years": 10,
			  "Warranty": 5,
			  "For_vehicles": [
				  "Ferrari",
				  "Volkswagen"
			  ]
		  }
		  ```

		- In the Authorization section, select `Type` Bearer Token and enter `Token` generated at the login action.

		- Click the `Send` button.

		- It will print on the output that example structure:
		  ```
		  {
			  "Feedback_Message": "New spare part added Succesfully!",
			  "Info": {
				  "Brand": "Bosch",
				  "Model": "Clutch200",
				  "Model_ID": 123,
				  "Year": 1999,
				  "Lifetime_in_years": 10,
				  "Warranty": 5,
				  "For_vehicles": [
					  "Ferrari",
					  "Volkswagen"
				  ],
				  "_id": "6588555ba5c42f68df3f1a8f",
				  "Data_modification": "2023-12-24T15:59:23.488Z",
				  "__v": 0
			  }
		  }
		  ```

	5. Modify spare part info in the database with the following actions:

		- Enter the URL in the proper box and choose the **PUT** method:

		    ```
			http://localhost:3100/spare_parts/65881cc5a86b138f102e2e2b
			```

		- In body the section, enter that example JSON structure:

		    ```
			{
				"Brand": "Bosch",
				"Model": "Clutch200",
				"Model_ID": 123,
				"Year": 1999,
				"Lifetime_in_years": 10,
				"Warranty": 5,
				"For_vehicles": [
					"Ferrari",
					"Volkswagen"
				]
			}
			```

		- In the Authorization section, select `Type` Bearer Token and enter `Token` generated at the login action.

		- Click the `Send` button.

		- It will print on the output that example structure:
		    ```
			{
				"Feedback_Message": "Updated details of a spare part with ID: 65881cc5a86b138f102e2e2b"
			}
			```

	6. Delete spare part from the database with the following actions:

		- Enter the URL in the proper box and choose the **DELETE** method:

		    ```
			http://localhost:3100/spare_parts/65881cc5a86b138f102e2e2b
			```

		- In the Authorization section, select `Type` Bearer Token and enter `Token` generated at the login action.

		- Click the `Send` button.

		- It will print on the output that example structure:
		    ```
			{
				"Feedback_Message": "Spare part with ID: 65881cc5a86b138f102e2e2b deleted."
			}
			```

## More information

For more details you can contact with **gdx167822@student.gdansk.merito.pl** or **touunix@gmail.com**
