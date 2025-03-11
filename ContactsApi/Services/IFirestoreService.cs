using ContactsApi.Models;

namespace ContactsApi.Services
{
    /// <summary>
    /// Interface for Firestore database operations
    /// </summary>
    public interface IFirestoreService
    {
        /// <summary>
        /// Submits a contact form entry to Firestore
        /// </summary>
        /// <param name="formData">The contact form data</param>
        /// <returns>Contact submission response with document ID</returns>
        Task<(bool Success, string? DocumentId, string? ErrorMessage)> SubmitContactForm(ContactFormData formData);
    }
}
