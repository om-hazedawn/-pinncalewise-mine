using ContactsApi.Models;
using Google.Cloud.Firestore;
using Microsoft.Extensions.Logging;
using System.Net;

namespace ContactsApi.Services
{
    /// <summary>
    /// Implementation of Firestore service for database operations
    /// </summary>
    public class FirestoreService : IFirestoreService
    {
        private readonly FirestoreDb _firestoreDb;
        private readonly ILogger<FirestoreService> _logger;
        private const string CONTACTS_COLLECTION = "contacts";

        /// <summary>
        /// Constructor initializes the Firestore connection using service account credentials
        /// </summary>
        public FirestoreService(ILogger<FirestoreService> logger, IConfiguration configuration)
        {
            _logger = logger;

            try
            {
                // Use credentials file path from configuration
                var credentialsPath = configuration["Firebase:CredentialsPath"] ?? 
                    Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "firebase-credentials.json");
                
                // Get project ID from configuration or credentials
                var projectId = configuration["Firebase:ProjectId"] ?? "pinnaclewise-210af";

                // Initialize Firestore with credentials
                if (File.Exists(credentialsPath))
                {
                    _logger.LogInformation("Initializing Firestore with credentials from {CredentialsPath}", credentialsPath);
                    Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", credentialsPath);
                    _firestoreDb = FirestoreDb.Create(projectId);
                    _logger.LogInformation("Firestore initialized successfully for project {ProjectId}", projectId);
                }
                else
                {
                    _logger.LogWarning("Credentials file not found at {CredentialsPath}", credentialsPath);
                    throw new FileNotFoundException("Firebase credentials file not found", credentialsPath);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to initialize Firestore");
                throw;
            }
        }

        /// <summary>
        /// Submits a contact form entry to Firestore
        /// </summary>
        /// <param name="formData">The contact form data to submit</param>
        /// <returns>Tuple with success status, document ID, and error message if any</returns>
        public async Task<(bool Success, string? DocumentId, string? ErrorMessage)> SubmitContactForm(ContactFormData formData)
        {
            try
            {
                // Validate form data
                if (string.IsNullOrWhiteSpace(formData.Name) || 
                    string.IsNullOrWhiteSpace(formData.Email) || 
                    string.IsNullOrWhiteSpace(formData.Message) || 
                    string.IsNullOrWhiteSpace(formData.Service))
                {
                    return (false, null, "Required fields missing");
                }

                // Prepare data for Firestore
                var contactData = new Dictionary<string, object>
                {
                    ["name"] = formData.Name.Trim(),
                    ["email"] = formData.Email.Trim().ToLowerInvariant(),
                    ["message"] = formData.Message.Trim(),
                    ["service"] = formData.Service,
                    ["createdAt"] = FieldValue.ServerTimestamp,
                    ["status"] = "new"
                };

                // Add optional fields if they have values
                if (!string.IsNullOrWhiteSpace(formData.Phone))
                {
                    contactData["phone"] = formData.Phone.Trim();
                }

                if (!string.IsNullOrWhiteSpace(formData.Company))
                {
                    contactData["company"] = formData.Company.Trim();
                }

                // Add to Firestore
                _logger.LogInformation("Submitting contact form to Firestore: {ContactData}", 
                    System.Text.Json.JsonSerializer.Serialize(new { 
                        formData.Name, 
                        formData.Email, 
                        formData.Service 
                    }));

                var contactsCollection = _firestoreDb.Collection(CONTACTS_COLLECTION);
                var docRef = await contactsCollection.AddAsync(contactData);
                
                _logger.LogInformation("Contact form submitted successfully with ID: {DocumentId}", docRef.Id);
                return (true, docRef.Id, null);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error submitting contact form");
                return (false, null, ex.Message);
            }
        }
    }
}
