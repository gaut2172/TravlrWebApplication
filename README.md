# About the Project

Travlr is a web application for vacation bookings and reviews. The fictional client, Travlr Getaways, had two userbases: administrators and customers. The customer side was to be content-focused, needed a fast initial load time, and was expected to have a short user duration. On the other hand, the administrator side needed to be feature-focused, required more user interaction, needed a fast and responsive UE instead of a fast initial load time, and required longer user durations.

# Depth of Project

The focus of this project was to create a working prototype of a full stack web application using MEAN technologies and the MVC architectural pattern. 

#### Backend
Travlr uses Node.js and the Express framework for its web server. Travlr uses a NoSQL database called MongoDB and an object data modeling library called Mongoose.

#### Frontend
The frontend that customers interact with uses a templating engine and Express.js so the server can dynamically generate HTML for requests. The administrators' frontend is an SPA delivered via Angular.

#### Security
The API endpoints are secured using authentication and authorization schemes that utilize JSON web tokens. When the user's credentials are authenticated, a JWT is issued to their browser's local storage. On the backend, user passwords are stored using one-way encryption and are never stored in plaintext.