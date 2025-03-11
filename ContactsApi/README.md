# PinnacleWise Contacts API

This .NET API provides a secure backend service for managing PinnacleWise contact form submissions. The API securely interacts with Firebase Firestore, solving the connectivity issues that occur with direct client-side Firebase access.

## Prerequisites

- .NET 7.0 SDK or later
- Firebase project with Firestore database
- Firebase Admin SDK service account credentials

## Firebase Credentials Setup

1. Go to your Firebase project console: https://console.firebase.google.com/project/pinnaclewise-210af/settings/serviceaccounts/adminsdk
2. Click on "Generate new private key" to download your service account credentials
3. Save the downloaded JSON file as `firebase-credentials.json` in the root of the ContactsApi project

## Running the API

From the ContactsApi directory, run:

```bash
dotnet restore
dotnet build
dotnet run
```

The API will be available at:
- https://localhost:7125 (HTTPS)
- http://localhost:5125 (HTTP)

Swagger UI will be available at:
- https://localhost:7125/swagger

## API Endpoints

### Submit Contact Form

**POST /api/contacts**

Submits a contact form to Firebase Firestore.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-123-4567", // Optional
  "company": "Example Corp", // Optional
  "message": "I'm interested in your services",
  "service": "accounting"
}
```

Response (201 Created):
```json
{
  "success": true,
  "data": "documentId123" // Firestore document ID
}
```

## Error Handling

The API uses a consistent error response format:

```json
{
  "success": false,
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": {} // Optional additional error details
  }
}
```

Common error codes:
- `validation_error`: Invalid form data
- `submission_failed`: Failed to submit to Firestore
- `server_error`: Unexpected server error

## Security

This API securely manages Firebase credentials server-side, eliminating client-side security issues. The service uses Google Cloud Firestore Admin SDK with appropriate authentication and authorization.
