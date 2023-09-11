# 🍿🎬🎥 Welcome to Movie-Time! 🍿🎬🎥

###  Authors
* Name: Ariel Amon     Email: arielam@edu.hac.ac.il  
* Name: Noam Mirjani  Email: noammir@edu.hac.ac.il 


![App Screenshot](movie-app/public/assets/logo.png)

Movie Time is a feature-rich web application designed to enhance your movie exploration experience. With an array of advanced features and a seamless user interface, Movie Time allows you to discover trending movies, explore popular titles, and search for specific movies based on various criteria. Whether you're a movie enthusiast or simply looking for your next favorite film, Movie Time has got you covered.


## Installation
1.  Clone the repository: `git clone https://github.com/Solange-s-Courses/ex4-java-neviim-ex4_ariel_amon_noam_mirjani.git`
2.  Install dependencies: `npm install`
3.  Start the React development server: `npm start`
4.  Set up the Spring Boot backend (refer to backend README for instructions)
    a. Run the SQL server  and create a database named "ex4".
    The DB  credentials are stored in the application.properties file.
    b. Run the project

client runs on  http://localhost:3000.
server runs on  http://localhost:8080/api.

In order to initialize the project make sure to:
1. When you open the project, if intelliJ propose to "Load Maven Project" do it. You can later reload maven with the "M" icon on the right of the screen, or by right clicking on the pom.xml file and selecting "Maven -> Reload project".
2. You see red lines in the code? Go to File -> Project Structure -> Project Settings -> Project -> SDK -> and choose your Java SDK
3. Still see red stuff? Open the same dialog and click on "Fix" if you see some
4. Edit your configuration "ex4" at the top right. Make sure the "Main class" is set to "hac.DemoApplication" and that Java is set


## Features

### Home Page

The captivating home page of Movie Time sets the stage for an immersive movie discovery journey. With an expertly curated selection of popular movies, you can instantly dive into the world of trending and highly-rated films. The visually appealing layout and intuitive design make browsing an enjoyable and engaging experience.

### Movie Exploration

Movie Time offers an extensive collection of movies, each accompanied by comprehensive details and engaging visuals. From movie posters to release dates and pricing information, you can access all the necessary information to make informed choices. With Movie Time, exploring movies has never been more convenient and exciting.

### Multiple Search Options

To cater to diverse movie preferences, Movie Time provides multiple search options that empower users to find exactly what they're looking for. The advanced search functionality includes:

-   **Search by Genres**: Find movies that match your preferred genres, such as action, comedy, drama, romance, and more. Explore films that align with your specific taste and preferences.

-   **Search by Movie Name**: Enter the title or related keywords to discover movies based on their names. Movie Time intelligently matches your input and presents you with relevant results.

-   **Search by Actor Name**: Looking for movies featuring a particular actor? Movie Time allows you to search by the name of your favorite actor. In cases where multiple actors share the same name, the application showcases movies of the most popular actor with that name, ensuring you never miss out on the best performances.

-   **Search by Year Range**: Delve into movies released within a specific range of years. Whether you want to explore classic gems or the latest releases, Movie Time has you covered.


### Pagination and Infinite Scroll

Movie Time understands the value of efficient navigation through search results. The application seamlessly supports fetching movies in pages, enabling you to effortlessly browse through multiple pages of movie results. With the integration of infinite scroll functionality, Movie Time ensures a smooth and uninterrupted user experience. As you scroll down the page, the application automatically loads more movies, allowing you to explore an extensive collection without any interruptions.

### Search History

Movie Time values user preferences and provides a comprehensive search history feature. Every search query you make is meticulously recorded and stored in the history page. This empowers you to revisit your previous searches, re-search specific queries, or delete individual searches as desired. Additionally, you have the flexibility to clear the entire search history with a single click, maintaining a clutter-free and personalized movie exploration experience.

### User Registration and Session Management

To enhance user engagement and provide personalized features, Movie Time offers user registration functionality. Upon submitting your registration details, the information is securely stored in the database. Subsequently, the system initiates a session to authenticate your identity. The session remains active until you choose to log out or the session expires, ensuring a seamless and secure user experience.


## Technologies Used

Movie Time leverages a cutting-edge tech stack to deliver a robust and performant application:

-   **Front-end**: The front-end of Movie Time is built using React, a popular JavaScript library for building user interfaces. The application utilizes various React features, including custom hooks, reducers, useContext, and routing, to create a dynamic and interactive user experience. Additionally, React Bootstrap is employed to enhance the UI with responsive and visually appealing components.
    React, React Bootstrap, HTML, CSS

-   **Back-end**: The back-end of Movie Time is powered by Spring Boot, a powerful framework for building enterprise-grade applications in Java. Spring Boot enables seamless integration with various components, including MySQL for the SQL database. The server code is intelligently structured using modules to ensure maintainability, scalability, and ease of development. Critical sections are meticulously implemented to guarantee thread safety, enabling smooth and efficient processing of concurrent requests.
    Spring Boot, Java, MySQL (JPA repository for SQL database)

-   **API Integration:** The application integrates with a movie API to fetch movie data, including movie details and search results.

## Acknowledgements

-   Movie data provided by [TMDB API](https://developer.themoviedb.org/docs)
-   React Bootstrap for UI components
-   Spring Boot for backend development

## Configuration

-   Movie API: The application requires an API key for accessing movie data. Replace the placeholder API key in the `useApi` hook with your own API key.


