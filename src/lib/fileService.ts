// File service for handling file operations
export class FileService {
  
  // Save image to public folder (simulated in browser environment)
  static async saveImage(file: File): Promise<string> {
    try {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('Invalid file type. Please upload a JPEG, PNG, GIF, or WebP image.');
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        throw new Error('File size too large. Please upload an image smaller than 5MB.');
      }

      // Generate unique filename
      const timestamp = Date.now();
      const randomId = Math.random().toString(36).substring(2, 8);
      const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
      const filename = `community-${timestamp}-${randomId}.${extension}`;
      const publicPath = `/uploads/${filename}`;
      
      // Create blob URL for immediate preview
      const blobUrl = URL.createObjectURL(file);
      
      // Simulate saving to server
      console.log(`📁 Image would be saved as: ${publicPath}`);
      console.log(`🖼️  File details:`, {
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)}MB`,
        type: file.type,
        savedAs: filename
      });
      
      // In a real server implementation, you would:
      // const formData = new FormData();
      // formData.append('image', file, filename);
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // });
      // if (!response.ok) throw new Error('Upload failed');
      // const result = await response.json();
      // return result.publicUrl;
      
      // Store file info in localStorage for demo purposes
      const fileInfo = {
        originalName: file.name,
        savedName: filename,
        publicPath: publicPath,
        blobUrl: blobUrl,
        uploadedAt: new Date().toISOString(),
        size: file.size,
        type: file.type
      };
      
      // Save file info to localStorage
      const existingFiles = JSON.parse(localStorage.getItem('uploaded-files') || '[]');
      existingFiles.push(fileInfo);
      localStorage.setItem('uploaded-files', JSON.stringify(existingFiles));
      
      // For demo, return a high-quality placeholder image
      const placeholderImages = [
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
      ];
      
      const selectedImage = placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
      console.log(`🎨 Using placeholder image: ${selectedImage}`);
      
      return selectedImage;
      
    } catch (error) {
      console.error('❌ Error saving image:', error);
      throw error;
    }
  }

  // Get uploaded files info (for debugging/admin purposes)
  static getUploadedFiles(): any[] {
    return JSON.parse(localStorage.getItem('uploaded-files') || '[]');
  }

  // Clean up old blob URLs to prevent memory leaks
  static cleanupBlobUrls(): void {
    const files = this.getUploadedFiles();
    files.forEach(file => {
      if (file.blobUrl) {
        URL.revokeObjectURL(file.blobUrl);
      }
    });
  }

  // Save communities data to JSON file (simulated in browser environment)
  static async saveCommunitiesData(communities: any[]): Promise<boolean> {
    try {
      // Validate data structure
      if (!Array.isArray(communities)) {
        throw new Error('Communities data must be an array');
      }

      // Validate each community object
      communities.forEach((community, index) => {
        const requiredFields = ['id', 'name', 'category', 'description', 'location', 'website'];
        requiredFields.forEach(field => {
          if (!community[field]) {
            throw new Error(`Community at index ${index} is missing required field: ${field}`);
          }
        });
      });

      const jsonData = JSON.stringify(communities, null, 2);
      
      console.log('💾 Communities data would be saved to public/data/communities.json');
      console.log(`📊 Total communities: ${communities.length}`);
      console.log(`📄 JSON size: ${(jsonData.length / 1024).toFixed(2)}KB`);
      
      // In a real server implementation, you would:
      // const response = await fetch('/api/communities', {
      //   method: 'PUT',
      //   headers: { 
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer ' + adminToken 
      //   },
      //   body: jsonData
      // });
      // if (!response.ok) throw new Error('Failed to save communities data');
      // return true;
      
      // For demo purposes, save to localStorage
      localStorage.setItem('communities-json-backup', jsonData);
      localStorage.setItem('communities-last-updated', new Date().toISOString());
      
      console.log('✅ Communities data saved to localStorage backup');
      
      return true;
    } catch (error) {
      console.error('❌ Error saving communities data:', error);
      return false;
    }
  }

  // Create upload directory if it doesn't exist (server-side simulation)
  static async ensureUploadDirectory(): Promise<void> {
    // In a real server environment, this would:
    // const fs = require('fs').promises;
    // const path = require('path');
    // const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    // try {
    //   await fs.access(uploadDir);
    // } catch {
    //   await fs.mkdir(uploadDir, { recursive: true });
    //   console.log('Created upload directory:', uploadDir);
    // }
    
    console.log('📁 Upload directory would be ensured at: public/uploads/');
    
    // For demo, just log that we would create the directory
    const uploadInfo = {
      directory: 'public/uploads/',
      created: new Date().toISOString(),
      permissions: '755'
    };
    
    localStorage.setItem('upload-directory-info', JSON.stringify(uploadInfo));
  }

  // Get storage statistics
  static getStorageStats(): {
    communitiesCount: number;
    uploadedFilesCount: number;
    totalStorageUsed: string;
    lastUpdated: string | null;
  } {
    const communities = JSON.parse(localStorage.getItem('communities-data') || '[]');
    const uploadedFiles = JSON.parse(localStorage.getItem('uploaded-files') || '[]');
    const lastUpdated = localStorage.getItem('communities-last-updated');
    
    // Calculate approximate storage usage
    let totalBytes = 0;
    Object.keys(localStorage).forEach(key => {
      totalBytes += localStorage.getItem(key)?.length || 0;
    });
    
    const totalStorageUsed = `${(totalBytes / 1024).toFixed(2)}KB`;
    
    return {
      communitiesCount: communities.length,
      uploadedFilesCount: uploadedFiles.length,
      totalStorageUsed,
      lastUpdated
    };
  }
}