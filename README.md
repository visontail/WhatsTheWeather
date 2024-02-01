# WhatsTheWeather

## Description
**WhatsTheWeather** is a weather application designed to provide users with current weather conditions and forecasts. It allows users to easily search for weather information in different locations. The application is built to integrate seamlessly with the https://www.weatherapi.com/ weather API.

## Technologies
- *Front-end Framework :* **Vue.js**
- *HTTP Requests :* **Axios**
- *Styling :* **Bootstrap**

## Features
- **Location Search:**
  - Users can easily search for weather information in different cities.
- **Responsive Design:**
  - The application is designed to provide an optimal user experience across various devices.
- **Dynamic Icon and Background Change:**
  - The interface dynamically adjusts its visual elements based on the weather conditions, providing an immersive user experience.
- **Containerization:**
  - The project is containerized using Docker, ensuring a consistent and isolated environment. This simplifies deployment across various platforms and enhances scalability.

## Screenshot of the application
*(live version coming soon)*
![whats-the-weather](https://github.com/visontail/WhatsTheWeather/assets/99392016/10794842-e232-45be-b10e-2e99763dc6c1)


*UI design inspired by: https://www.pinterest.com/pin/375980268903047387/*

## Setup Steps:

1. **Clone the Repository:**
   - Clone this repository to your local machine using the following command:
     ```bash
     git clone [this-repository-link]
     ```

2. **Navigate to the Project Directory:**
   - Change into the project directory:
     ```bash
     cd WhatsTheWeather
     ```

3. **Install Dependencies:**
   - Install the necessary Node.js dependencies using:
     ```bash
     npm install
     ```
4. **Create an API key:**
   - Go to https://rapidapi.com/weatherapi/api/weatherapi-com
   - Register
   - Get an API key for weather api
5. **Create .env file:**
   - Create a .env file in the root of the project
     ```bash
     touch .env
     ```
   - Paste the API key:
     ```
     VUE_APP_WEATHER_API_KEY = "your-api-key"
     ```
6. **Run the Application Locally:**
   - Start the vue.js application locally:
     ```bash
     npm run serve
     ```
     The API will be accessible at `http://localhost:8080`.

**OR**

**Deploy using the Docker file:**
*(after creating API key, .env file)*

   1. Build the Docker image using the Docker file:
      ```bash
       docker build -t docker-image-name .
      ```
   2. Run the Docker container:
      ```bash
       docker run -p 8080:8080 docker-image-name
      ```
  - The API will be available also at `http://localhost:8080` within the Docker container.
