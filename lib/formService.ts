import { 
  collection,
  addDoc,
  Timestamp,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  DocumentData 
} from 'firebase/firestore';
import { db } from './firebase';

// Define interfaces for form data (following C# naming conventions)
export interface IFormSubmission {
  Id?: string;
  Name: string;
  Email: string;
  Phone?: string;
  Message?: string;
  FormType: 'contact' | 'booking' | 'newsletter';
  CreatedAt: Date | Timestamp;
  Status: 'new' | 'processing' | 'completed' | 'failed';
  UserId?: string;
}

export interface IFormResponse {
  Success: boolean;
  Message: string;
  Data?: any;
  ErrorCode?: string;
}

/**
 * FormService class implementing repository pattern for form operations
 * Following .NET design patterns
 */
export class FormService {
  private readonly collectionName = 'formSubmissions';

  /**
   * Submit a form to Firebase Firestore
   * @param formData Form submission data
   * @returns Promise with form response
   */
  public async SubmitForm(formData: Omit<IFormSubmission, 'Id' | 'CreatedAt' | 'Status'>): Promise<IFormResponse> {
    try {
      // Validate form data
      if (!this.ValidateForm(formData)) {
        return {
          Success: false,
          Message: 'Invalid form data',
          ErrorCode: 'VALIDATION_ERROR'
        };
      }
      
      // Prepare the document to save
      const submission: Omit<IFormSubmission, 'Id'> = {
        ...formData,
        CreatedAt: Timestamp.now(),
        Status: 'new'
      };
      
      // Add document to Firestore
      const docRef = await addDoc(collection(db, this.collectionName), submission);
      
      return {
        Success: true,
        Message: 'Form submitted successfully',
        Data: { Id: docRef.id }
      };
    } catch (error) {
      console.error('Error submitting form:', error);
      return {
        Success: false,
        Message: error instanceof Error ? error.message : 'Unknown error occurred',
        ErrorCode: 'SUBMISSION_ERROR'
      };
    }
  }

  /**
   * Get form submission by ID
   * @param id Form submission ID
   * @returns Promise with form submission
   */
  public async GetSubmissionById(id: string): Promise<IFormResponse> {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data() as Omit<IFormSubmission, 'Id'>;
        return {
          Success: true,
          Message: 'Form submission retrieved',
          Data: { Id: docSnap.id, ...data }
        };
      } else {
        return {
          Success: false,
          Message: 'Form submission not found',
          ErrorCode: 'NOT_FOUND'
        };
      }
    } catch (error) {
      console.error('Error getting form submission:', error);
      return {
        Success: false,
        Message: error instanceof Error ? error.message : 'Unknown error occurred',
        ErrorCode: 'RETRIEVAL_ERROR'
      };
    }
  }

  /**
   * Get submissions by user ID
   * @param userId User ID to filter by
   * @returns Promise with array of form submissions
   */
  public async GetSubmissionsByUser(userId: string): Promise<IFormResponse> {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('UserId', '==', userId),
        orderBy('CreatedAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const submissions: IFormSubmission[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Omit<IFormSubmission, 'Id'>;
        submissions.push({
          Id: doc.id,
          ...data
        });
      });
      
      return {
        Success: true,
        Message: 'Form submissions retrieved',
        Data: submissions
      };
    } catch (error) {
      console.error('Error getting form submissions:', error);
      return {
        Success: false,
        Message: error instanceof Error ? error.message : 'Unknown error occurred',
        ErrorCode: 'RETRIEVAL_ERROR'
      };
    }
  }

  /**
   * Get recent form submissions
   * @param count Number of submissions to retrieve
   * @returns Promise with array of form submissions
   */
  public async GetRecentSubmissions(count: number = 10): Promise<IFormResponse> {
    try {
      const q = query(
        collection(db, this.collectionName),
        orderBy('CreatedAt', 'desc'),
        limit(count)
      );
      
      const querySnapshot = await getDocs(q);
      const submissions: IFormSubmission[] = [];
      
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Omit<IFormSubmission, 'Id'>;
        submissions.push({
          Id: doc.id,
          ...data
        });
      });
      
      return {
        Success: true,
        Message: 'Recent form submissions retrieved',
        Data: submissions
      };
    } catch (error) {
      console.error('Error getting recent form submissions:', error);
      return {
        Success: false,
        Message: error instanceof Error ? error.message : 'Unknown error occurred',
        ErrorCode: 'RETRIEVAL_ERROR'
      };
    }
  }

  /**
   * Validate form data
   * @param formData Form data to validate
   * @returns Boolean indicating if form data is valid
   */
  private ValidateForm(formData: Partial<IFormSubmission>): boolean {
    // Basic validation
    if (!formData.Name || formData.Name.trim() === '') {
      return false;
    }
    
    if (!formData.Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      return false;
    }
    
    if (!formData.FormType) {
      return false;
    }
    
    return true;
  }
}

// Export a singleton instance
export const formService = new FormService();
