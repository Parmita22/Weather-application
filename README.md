# 🌤️ Weather Application

A modern, responsive weather application built with HTML, CSS, and JavaScript that provides real-time weather information for cities worldwide.

## ✨ Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **Search Functionality**: Search for weather by city name
- **Comprehensive Weather Info**: 
  - Current temperature
  - Weather forecast/description
  - Feels like temperature
  - Humidity percentage
  - Wind speed
  - Atmospheric pressure
  - Min/Max temperatures
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with weather icons
- **Country Information**: Displays city name with country
- **Date & Time**: Shows current date and time for the searched location

## 🚀 Live Demo

Open `weatherApplication.html` in your web browser to see the application in action.

## 📁 Project Structure

```
Weather Application/
├── weatherApplication.html    # Main HTML file
├── style.css                 # CSS styles and responsive design
├── index.js                  # JavaScript functionality
└── README.md                 # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling and responsive design
- **JavaScript (ES6+)**: Dynamic functionality and API integration
- **Font Awesome**: Icons for weather conditions and UI elements
- **Google Fonts**: Poppins font family
- **OpenWeatherMap API**: Weather data source

## 📦 Installation

1. **Clone or Download** the project files to your local machine
2. **Open** `weatherApplication.html` in your web browser
3. **Start searching** for weather information!

No additional setup or dependencies required - the application runs entirely in the browser.

## 🎯 Usage

1. **Search for a City**: Type any city name in the search bar
2. **Press Enter**: Submit your search to get weather data
3. **View Results**: The application will display:
   - City name and country
   - Current date and time
   - Weather description with icon
   - Current temperature
   - Min/Max temperatures
   - Additional weather details (humidity, wind, pressure, feels like)

## 🔧 API Configuration

The application uses the **OpenWeatherMap API** for weather data. The API key is already included in the code:

```javascript
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=YOUR_API_KEY`;
```

**Note**: The current API key in the code is for demonstration purposes. For production use, you should:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your own API key
3. Replace the existing API key in `index.js`

## 🎨 Design Features

- **Responsive Layout**: Adapts to different screen sizes
- **Card-based Design**: Weather information displayed in organized cards
- **Color Scheme**: Clean white background with dark accents
- **Typography**: Modern Poppins font for better readability
- **Icons**: Font Awesome icons for visual appeal
- **Shadows**: Subtle shadows for depth and modern look

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with 2-column grid for weather cards
- **Tablet (≤936px)**: Adjusted container width and header layout
- **Mobile (≤400px)**: Single column layout for weather cards
---
 

## ScreenShot Of UI 

![image](https://github.com/user-attachments/assets/2fd599cb-8188-4fb1-9f3b-5d3c9103bb56)


**Built with ❤️ using HTML, CSS, and JavaScript**
