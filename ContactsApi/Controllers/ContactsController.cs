using ContactsApi.Models;
using ContactsApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly IFirestoreService _firestoreService;
        private readonly ILogger<ContactsController> _logger;

        public ContactsController(IFirestoreService firestoreService, ILogger<ContactsController> logger)
        {
            _firestoreService = firestoreService ?? throw new ArgumentNullException(nameof(firestoreService));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        /// <summary>
        /// Submits a new contact form entry
        /// </summary>
        /// <param name="formData">The contact form data to submit</param>
        /// <returns>API response with success status and document ID</returns>
        [HttpPost]
        [ProducesResponseType(typeof(ApiResponse<string>), StatusCodes.Status201Created)]
        [ProducesResponseType(typeof(ApiResponse<string>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(ApiResponse<string>), StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> SubmitContactForm([FromBody] ContactFormData formData)
        {
            if (!ModelState.IsValid)
            {
                _logger.LogWarning("Invalid contact form submission: {ValidationErrors}", 
                    string.Join(", ", ModelState.Values
                        .SelectMany(v => v.Errors)
                        .Select(e => e.ErrorMessage)));
                
                return BadRequest(ApiResponse<string>.Failed(
                    "validation_error",
                    "The submitted form contains validation errors",
                    ModelState.Values
                        .SelectMany(v => v.Errors)
                        .Select(e => e.ErrorMessage)
                        .ToList()
                ));
            }

            try
            {
                var (success, documentId, errorMessage) = await _firestoreService.SubmitContactForm(formData);

                if (success && !string.IsNullOrEmpty(documentId))
                {
                    _logger.LogInformation("Contact form submitted successfully with ID: {DocumentId}", documentId);
                    
                    // Return 201 Created with the document ID
                    var response = ApiResponse<string>.Successful(documentId);
                    return CreatedAtAction(nameof(SubmitContactForm), response);
                }
                else
                {
                    _logger.LogWarning("Failed to submit contact form: {ErrorMessage}", errorMessage);
                    
                    return BadRequest(ApiResponse<string>.Failed(
                        "submission_failed",
                        errorMessage ?? "Failed to submit contact form",
                        null
                    ));
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception occurred while submitting contact form");
                
                return StatusCode(StatusCodes.Status500InternalServerError, 
                    ApiResponse<string>.Failed(
                        "server_error",
                        "An unexpected error occurred while processing your request",
                        ex.Message
                    ));
            }
        }
    }
}
