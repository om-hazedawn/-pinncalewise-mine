namespace ContactsApi.Models
{
    /// <summary>
    /// Standard API response format for all endpoints
    /// </summary>
    /// <typeparam name="T">Type of data contained in the response</typeparam>
    public class ApiResponse<T>
    {
        /// <summary>
        /// Indicates if the operation was successful
        /// </summary>
        public bool Success { get; set; }
        
        /// <summary>
        /// Optional data returned by the operation
        /// </summary>
        public T? Data { get; set; }
        
        /// <summary>
        /// Error details when Success is false
        /// </summary>
        public ErrorDetails? Error { get; set; }
        
        /// <summary>
        /// Creates a successful response with data
        /// </summary>
        public static ApiResponse<T> Successful(T data) => new()
        {
            Success = true,
            Data = data
        };
        
        /// <summary>
        /// Creates a failed response with error details
        /// </summary>
        public static ApiResponse<T> Failed(string code, string message, object? details = null) => new()
        {
            Success = false,
            Error = new ErrorDetails
            {
                Code = code,
                Message = message,
                Details = details
            }
        };
    }
    
    /// <summary>
    /// Error details for failed API responses
    /// </summary>
    public class ErrorDetails
    {
        /// <summary>
        /// Error code for programmatic handling
        /// </summary>
        public string Code { get; set; } = string.Empty;
        
        /// <summary>
        /// Human-readable error message
        /// </summary>
        public string Message { get; set; } = string.Empty;
        
        /// <summary>
        /// Additional details about the error
        /// </summary>
        public object? Details { get; set; }
    }
}
