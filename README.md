# Express-Postgres

**Express** - a popular and lightweight web application framework for Node.js. It provides a simple interface to create web applications and APIs. Express is widely used for building backend services and APIs because it offers many features.

**package.json** - a guide for your project that helps manage everything related to Node.js and npm.

**package-lock.json** - ensures that when others install your project, they get the same versions of packages you used.

**Status code for CRUD**
- **201 Created:** Successful resource creation.
- **200 OK:** Successful request (for read and update operations).
- **204 No Content:** Successful request with no content (for update and delete operations).
- **400 Bad Request:** Invalid request data.
- **404 Not Found:** Resource not found.

## Dependencies utilized in this project
- `pg`
- `cors`
- `nodemon`
- `express`
- `bcryptjs`
- `body-parser`
- `jsonwebtoken`

## Topics covered
- Setting up routers & middleware
- Retrieving and Modifying Data with REST APIs
- Working with Database
- Securing REST APIs with JWT (Json Web Token)

## Table of Contents
- [Middleware](#middleware)
- [Hashing](#hashing)
- [Async/Await](#asyncawait)
- [RESTful](#restful)
- [Encryption](#encryption)
- [Token](#token)
- [Encoded/Decoded](#encodeddecoded)
- [Endpoints](#endpoints)
- [CORS](#cors)
- [Schema](#schema)

## Middleware
Middleware functions in Express have access to the request (`req`) and response (`res`) objects. They can execute code, modify requests and responses, end the request-response cycle, or call the next middleware function in the stack.

**Example**: 
- `express.json()` middleware parses incoming JSON requests.

## Hashing
Hashing is a process used to securely store data, like passwords, by converting them into a fixed-size string of characters. Hashes are designed to be irreversible.

**Example**: 
- Using `bcrypt` to hash passwords before storing them in a database.

## Async/Await
`async` and `await` are used to handle asynchronous operations in JavaScript, allowing you to write more readable code. `async` marks a function as asynchronous, and `await` pauses function execution until a promise is resolved.

**Example**: 
- Fetching data from an API or database using `async/await`.

## RESTful
RESTful architecture is a style for designing networked applications, using standard HTTP methods (GET, POST, PUT, DELETE) and focusing on stateless communication, resource-based URIs, and standard responses.

**Example**: 
- A RESTful API follows these principles for structuring endpoints and handling requests.

## Encryption
Encryption encodes data to prevent unauthorized access, transforming it into an unreadable format that can only be decrypted with the correct key.

**Example**: 
- SSL/TLS encryption is used to secure data transmitted over the internet.

## Token
Tokens are strings of characters representing a user's authentication credentials, often used in stateless environments like RESTful APIs.

**Example**: 
- JSON Web Tokens (JWT) are commonly used to secure APIs.

## Encoded/Decoded
Encoding converts data into a different format using a public scheme, which can be easily reversed. Decoding is the process of converting encoded data back to its original format.

**Example**: 
- Base64 encoding is used to convert binary data into text for transmission over HTTP.

## Endpoints
Endpoints are specific paths in a web API that correspond to a particular function or resource. Each endpoint usually corresponds to a URL and is accessed via HTTP methods.

**Example**: 
- `/api/authors` could be an endpoint in a RESTful API that returns a list of authors.

## CORS
CORS (Cross-Origin Resource Sharing) is a security feature that restricts web pages from making requests to a different domain than the one that served the web page. CORS headers allow or restrict cross-origin requests.

**Example**: 
- `Access-Control-Allow-Origin` header to permit requests from certain domains.

## Schema
A schema is a blueprint that defines the structure of data in a database, including tables, columns, data types, and relationships.

**Example**: 
- A schema might define a `users` table with columns for `id`, `name`, `email`, and `password`.

