# Tunisia Airplane Project

**Tunisia Airplane** is a modern web application developed using **Angular** for the frontend and **Spring Boot** for the backend. The application is secured with **Keycloak**, an open-source Single Sign-On (SSO) provider, ensuring secure and seamless login functionality for users.

---

## Key Features
- **Frontend**: Angular framework for building a responsive and dynamic user interface.
- **Backend**: Spring Boot framework for managing business logic and database interactions.
- **Security**: Integration with Keycloak for secure authentication and authorization.
- **Keycloak Features**:
  - Centralized user management.
  - Support for OAuth2, OpenID Connect, and SAML protocols.
  - Role-based access control.
  - Secure token generation and validation.

![Keycloak Logo](https://www.keycloak.org/resources/images/keycloak_logo_480x108.png)

---

## Demo Video
Watch the application in action:

[![Tunisia Airplane Demo](demo_thumbnail.png)](./demo.mp4)

Click the image above or [download the demo video](./demo.mp4) to view the application in action.

---

## Project Structure

### Frontend
The frontend is built with Angular and includes:
- A dynamic and responsive user interface.
- API integrations with the Spring Boot backend for real-time data.
- Role-based access controls enforced through Keycloak tokens.

### Backend
The backend is developed using Spring Boot and includes:
- RESTful APIs for managing flights, users, and bookings.
- Secure endpoints that require valid Keycloak tokens for access.
- Integration with a relational database for persistent data storage.

---

## Prerequisites
To run the application, ensure the following are installed:
- Node.js and npm (for the Angular frontend)
- Java (for the Spring Boot backend)
- Keycloak server setup with a realm configured for the application

---

## How to Run

### Keycloak Setup
1. Download and install Keycloak from [keycloak.org](https://www.keycloak.org).
2. Create a new realm and configure the necessary roles and users.
3. Register a new client for the Tunisia Airplane application.
4. Update the Keycloak configurations in both the frontend and backend.

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd Tunisia_airplane-client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```

### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd Backend
   ```
2. Build the Spring Boot application:
   ```bash
   ./mvnw clean install
   ```
3. Run the backend server:
   ```bash
   java -jar target/*.jar
   ```

---

## Keycloak Integration
The application uses Keycloak for user authentication and authorization:
- **Login**: Users are redirected to the Keycloak login page.
- **Tokens**: After successful login, Keycloak issues tokens to grant access.
- **Roles**: Role-based access control is enforced in both frontend and backend.


Feel free to contribute to this project by submitting issues or pull requests!
