## API Overview

Welcome to the API documentation. Below you will find details about the available endpoints, request formats, and other essential information to help you integrate with our API.

This API provides endpoints to manage requests and user information. Users can create, update, delete, accept, complete, and cancel accepted requests. Each request can be managed by users with appropriate permissions. Additionally, users are able to change, add, and delete their username and contact number

## Requests API

This API provides endpoints to manage requests. Users can create, update, delete, accept, complete, and cancel accepted requests. Each request can be managed by users with appropriate permissions.

## User API

This API provides endpoints to manage user information. Users can update or delete their metadata, including username and contact number.

## Dashboard API

This API provides endpoints to fetch user dashboard information.

## Authentication

All endpoints require JWT authentication. Include the token in the `Authorization` header as follows:

- Authorization: Bearer <your_jwt_token>

## Requests API / Endpoints

### 1. Create Request

- **URL**: `/requests/`
- **Method**: `POST`
- **Authentication Required**: Yes

**Request Body**:

```json
{
  "title": "Sample Request",
  "description": "This is a sample request description.",
  "image": "http://example.com/image.jpg",
  "location": {
    "type": "Point",
    "coordinates": [-73.856077, 40.848447],
    "city": "City",
    "country": "Country"
  },
  "isActive": true,
  "isAccepted": false
}
```

**Success Response**:

```json
{
  "success": true,
  "message": "Request created successfully",
   "request": { ... }
}
```

### 2. Update Request

- **URL**: `/requests/:id`
- **Method**: `PUT`
- **Authentication Required**: Yes

**Request Body**:

```json
{
  "title": "Updated Request Title",
  "description": "Updated description",
  "image": "http://example.com/updated-image.jpg",
  "location": {
    "type": "Point",
    "coordinates": [-73.856077, 40.848447],
    "city": "Updated City",
    "country": "Updated Country"
  }
}
```

**Success Response**:

```json
{
  "success": true,
  "message": "Request updated successfully",
  "request": {
    "_id": "request_id",
    "title": "Updated Request Title",
    "description": "Updated description",
    "image": "http://example.com/updated-image.jpg",
    "location": {
      "type": "Point",
      "coordinates": [-73.856077, 40.848447],
      "city": "Updated City",
      "country": "Updated Country"
    },
    "isActive": true,
    "isAccepted": false,
    "beefinderId": "user_id",
    "createdAt": "2024-07-25T16:28:29.227Z",
    "updatedAt": "2024-07-26T16:01:39.641Z",
    "__v": 0
  }
}
```

### 3. Delete Request

- **URL**: `/requests/:id`
- **Method**: `DELETE`
- **Authentication Required**: Yes

**Response**:

```json
{
  "success": true,
  "message": "Request deleted successfully",
  "request": { ... }
}

```

### 4. Accept Request

- **URL**: `/requests/:id`
- **Method**: `POST`
- **Authentication Required**: Yes

**Response**:

```json
{
  "success": true,
  "message": "Request accepted successfully",
  "request": { ... }
}
```

### 5. Complete Request

- **URL**: `/requests/:id/complete`
- **Method**: `POST`
- **Authentication Required**: Yes

**Response**:

```json
{
  "success": true,
  "message": "Request completed successfully",
  "request": { ... }
}
```

### 6. Cancel Accepted Request

- **URL**: `/requests/:id/cancel`
- **Method**: `PATCH`
- **Authentication Required**: Yes

**Response**:

```json
{
  "success": true,
  "message": "Request cancellation accepted successfully",
  "request": { ... }
}
```

### 7. List All Request

- **URL**: `/requests/`
- **Method**: `GET`
- **Authentication Required**: Yes

**Response**:

```json
{
  "success": true,
  "message": "Requests retrieved successfully",
  "requests": [
    {
      "location": {
        "type": "Point",
        "coordinates": [-73.856077, 40.848447],
        "city": "City",
        "country": "Country"
      },
      "title": "Sample Request",
      "description": "This is a sample request description.",
      "image": "http://example.com/image.jpg",
      "isActive": true,
      "isAccepted": false,
      "createdAt": "2024-07-25T16:28:29.227Z",
      "updatedAt": "2024-07-26T16:01:39.641Z",
      "beefinder": {
        "email": "user@example.com",
        "name": "User Name",
        "userName": "username"
      }
    },
    ...
  ]
}
```

## User API / Endpoints

### Update or Delete User Metadata

- **URL**: `/user/metadata`
- **Method**: `PATCH`
- **Authentication Required**: Yes

**Request Body:**:

```json
{
  "metadata": {
    "userName": "newUsername",
    "contactNumber": "0987654321"
  }
}
```

**Success Response**:

```json
{
  "message": "Metadata updated successfully",
  "user": {
    "userId": "auth0|123456789",
    "metadata": {
      "userName": "newUsername",
      "contactNumber": "0987654321"
    }
  }
}
```

## Dashboard API / Endpoints

### Get User Dashboard Info

- **URL**: `/dashboard/`
- **Method**: `GET`
- **Authentication Required**: Yes

**Success Response:**:

```json
{
  "user": {
    "name": "User Name",
    "email": "user@example.com",
    "userId": "auth0|123456789",
    "emailVerified": true,
    "metadata": {
      "userName": "username",
      "contactNumber": "1234567890"
    }
  }
}
```

## Models

### Request

- **location**: Object
  - **type**: String (Point)
  - **coordinates**: Array of Numbers (longitude, latitude)
  - **city**: String
  - **country**: String
- **title**: String
- **description**: String
- **image**: String (URL)
- **isActive**: Boolean
- **isAccepted**: Boolean
- **createdAt**: Date
- **updatedAt**: Date
- **beefinderId**: String (User ID)
- **beekeeperId**: String (User ID, nullable)
- **acceptedAt**: Date (nullable)
- **completedAt**: Date (nullable)
- **canceledAcceptedAt**: Date (nullable)

### User (Beefinder and Beekeeper)

- **email**: String
- **name**: String
- **userName**: String (nullable)
- **contactNumber**: String (nullable)
- **createdAt**: Date
- **updatedAt**: Date

### Notes

- Ensure all request bodies are properly formatted JSON objects.
- All dates should be in ISO 8601 format.
- The `id` parameter in the URL should be the MongoDB ObjectId of the request.
- Authentication is required for all endpoints. Ensure you include a valid JWT token in the request headers.
