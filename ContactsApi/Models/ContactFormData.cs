using System.ComponentModel.DataAnnotations;

namespace ContactsApi.Models
{
    /// <summary>
    /// Represents the data submitted through the contact form
    /// </summary>
    public class ContactFormData
    {
        [Required]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        
        public string? Phone { get; set; }
        
        public string? Company { get; set; }
        
        [Required]
        public string Message { get; set; } = string.Empty;
        
        [Required]
        public string Service { get; set; } = string.Empty;
        
        // These properties are set on the server side
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public string Status { get; set; } = "new";
    }
}
