export interface Community {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  website: string;
  image: string;
  members: string;
  contactEmail?: string;
  foundedYear?: string;
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface CommunitySubmission {
  name: string;
  category: string;
  description: string;
  location: string;
  website: string;
  image: string;
  members: string;
  contactEmail: string;
  foundedYear: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

class CommunityService {
  private communities: Community[] = [];
  private isLoaded = false;

  async loadCommunities(): Promise<Community[]> {
    if (this.isLoaded && this.communities.length > 0) {
      return this.communities;
    }

    try {
      // 🔍 FIRST: Try to load from localStorage (for newly submitted communities)
      const localData = localStorage.getItem('communities-data');
      if (localData) {
        const localCommunities = JSON.parse(localData);
        if (Array.isArray(localCommunities) && localCommunities.length > 0) {
          console.log('📦 Loading communities from localStorage:', localCommunities.length);
          this.communities = localCommunities;
          this.isLoaded = true;
          return this.communities;
        }
      }

      // 🔍 FALLBACK: Load from original JSON file
      console.log('📄 Loading communities from JSON file...');
      const response = await fetch('/data/communities.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.communities = await response.json();
      this.isLoaded = true;
      
      // Save to localStorage for future use
      localStorage.setItem('communities-data', JSON.stringify(this.communities));
      console.log('💾 Saved original JSON data to localStorage');
      
      return this.communities;
    } catch (error) {
      console.error('❌ Error loading communities:', error);
      return [];
    }
  }

  async submitCommunity(submission: CommunitySubmission): Promise<boolean> {
    try {
      console.log('🚀 Starting community submission process...');
      
      // Load current communities
      await this.loadCommunities();
      
      // Create new community with unique ID
      const newCommunity: Community = {
        id: Date.now(), // Simple ID generation for demo
        ...submission
      };

      console.log('✨ New community created:', {
        id: newCommunity.id,
        name: newCommunity.name,
        category: newCommunity.category,
        location: newCommunity.location
      });

      // Add to local array
      this.communities.push(newCommunity);
      
      // 🎯 THIS IS WHERE WE SAVE THE DATA
      const success = await this.saveCommunitiesToStorage();
      
      if (success) {
        console.log('✅ Community submitted successfully!');
        console.log('📊 Total communities now:', this.communities.length);
        
        // 🔍 IMPORTANT: In a real application, this would also:
        // 1. Send POST request to your API endpoint
        // 2. Update the actual JSON file on the server
        // 3. Handle validation and error responses
        // 4. Send confirmation email to the submitter
        
        return true;
      } else {
        throw new Error('Failed to save community data');
      }
    } catch (error) {
      console.error('❌ Error submitting community:', error);
      return false;
    }
  }

  private async saveCommunitiesToStorage(): Promise<boolean> {
    try {
      console.log('💾 Saving communities to storage...');
      
      // 🎯 PRIMARY SAVE: Save to localStorage (simulating JSON file update)
      localStorage.setItem('communities-data', JSON.stringify(this.communities));
      
      // 🎯 BACKUP SAVE: Also save a backup with timestamp
      const backup = {
        timestamp: new Date().toISOString(),
        communities: this.communities,
        totalCount: this.communities.length
      };
      localStorage.setItem('communities-backup', JSON.stringify(backup));
      
      console.log('✅ Communities data saved successfully!');
      console.log('📊 Storage Details:', {
        location: 'localStorage',
        primaryKey: 'communities-data',
        backupKey: 'communities-backup',
        totalCommunities: this.communities.length,
        lastUpdated: new Date().toISOString()
      });
      
      // 🔍 SHOW WHAT'S ACTUALLY SAVED
      console.log('📋 Latest 3 communities in storage:');
      const latest = this.communities.slice(-3);
      latest.forEach((community, index) => {
        console.log(`${index + 1}. ${community.name} (${community.category}) - ID: ${community.id}`);
      });
      
      return true;
    } catch (error) {
      console.error('❌ Error saving communities to storage:', error);
      return false;
    }
  }

  // 🔍 DEBUG METHOD: Get current storage info
  getStorageInfo(): {
    hasLocalData: boolean;
    totalCommunities: number;
    lastUpdated: string | null;
    storageSize: string;
  } {
    const localData = localStorage.getItem('communities-data');
    const backup = localStorage.getItem('communities-backup');
    
    let totalCommunities = 0;
    let lastUpdated = null;
    
    if (backup) {
      const backupData = JSON.parse(backup);
      totalCommunities = backupData.totalCount || 0;
      lastUpdated = backupData.timestamp;
    }
    
    const storageSize = localData ? `${(localData.length / 1024).toFixed(2)}KB` : '0KB';
    
    return {
      hasLocalData: !!localData,
      totalCommunities,
      lastUpdated,
      storageSize
    };
  }

  // Method to export communities data (for debugging/admin purposes)
  async exportCommunitiesData(): Promise<string> {
    const communities = await this.loadCommunities();
    return JSON.stringify(communities, null, 2);
  }

  // Method to get submission statistics
  async getSubmissionStats(): Promise<{
    total: number;
    byCategory: Record<string, number>;
    byLocation: Record<string, number>;
    recentSubmissions: number;
  }> {
    const communities = await this.loadCommunities();
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    const byCategory: Record<string, number> = {};
    const byLocation: Record<string, number> = {};
    let recentSubmissions = 0;

    communities.forEach(community => {
      // Count by category
      byCategory[community.category] = (byCategory[community.category] || 0) + 1;
      
      // Count by location
      byLocation[community.location] = (byLocation[community.location] || 0) + 1;
      
      // Count recent submissions (based on ID timestamp)
      if (community.id > oneWeekAgo.getTime()) {
        recentSubmissions++;
      }
    });

    return {
      total: communities.length,
      byCategory,
      byLocation,
      recentSubmissions
    };
  }

  // Utility method to get unique categories
  async getCategories(): Promise<string[]> {
    const communities = await this.loadCommunities();
    const categories = communities.map(community => community.category);
    return [...new Set(categories)].sort();
  }

  // Utility method to get unique locations
  async getLocations(): Promise<string[]> {
    const communities = await this.loadCommunities();
    const locations = communities.map(community => community.location);
    return [...new Set(locations)].sort();
  }
}

// Export a singleton instance
export const communityService = new CommunityService();