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
      // First try to load from localStorage (for newly submitted communities)
      const localData = localStorage.getItem('communities-data');
      if (localData) {
        const localCommunities = JSON.parse(localData);
        if (Array.isArray(localCommunities) && localCommunities.length > 0) {
          this.communities = localCommunities;
          this.isLoaded = true;
          return this.communities;
        }
      }

      // Fallback to original JSON file
      const response = await fetch('/data/communities.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.communities = await response.json();
      this.isLoaded = true;
      
      // Save to localStorage for future use
      localStorage.setItem('communities-data', JSON.stringify(this.communities));
      
      return this.communities;
    } catch (error) {
      console.error('Error loading communities:', error);
      // Return empty array as fallback
      return [];
    }
  }

  async getAllCommunities(): Promise<Community[]> {
    return await this.loadCommunities();
  }

  async getCommunityById(id: number): Promise<Community | null> {
    const communities = await this.loadCommunities();
    return communities.find(community => community.id === id) || null;
  }

  async searchCommunities(query: string): Promise<Community[]> {
    const communities = await this.loadCommunities();
    const searchTerm = query.toLowerCase();
    
    return communities.filter(community =>
      community.name.toLowerCase().includes(searchTerm) ||
      community.description.toLowerCase().includes(searchTerm) ||
      community.category.toLowerCase().includes(searchTerm) ||
      community.location.toLowerCase().includes(searchTerm)
    );
  }

  async filterCommunitiesByCategory(category: string): Promise<Community[]> {
    const communities = await this.loadCommunities();
    return communities.filter(community => 
      community.category.toUpperCase() === category.toUpperCase()
    );
  }

  async filterCommunitiesByLocation(location: string): Promise<Community[]> {
    const communities = await this.loadCommunities();
    return communities.filter(community => {
      if (location === "Global") {
        return community.location.toUpperCase().includes("GLOBAL");
      }
      return community.location.toUpperCase().includes(location.toUpperCase());
    });
  }

  async submitCommunity(submission: CommunitySubmission): Promise<boolean> {
    try {
      // Load current communities
      await this.loadCommunities();
      
      // Create new community with unique ID
      const newCommunity: Community = {
        id: Date.now(), // Simple ID generation for demo
        ...submission
      };

      // Add to local array
      this.communities.push(newCommunity);
      
      // Save updated communities to localStorage (simulating JSON file update)
      const success = await this.saveCommunitiesToStorage();
      
      if (success) {
        console.log('✅ Community submitted successfully:', newCommunity);
        
        // In a real application, this would also:
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
      // Save to localStorage (simulating JSON file update)
      localStorage.setItem('communities-data', JSON.stringify(this.communities));
      
      // Also save a backup with timestamp
      const backup = {
        timestamp: new Date().toISOString(),
        communities: this.communities
      };
      localStorage.setItem('communities-backup', JSON.stringify(backup));
      
      console.log('💾 Communities data saved to local storage');
      console.log(`📊 Total communities: ${this.communities.length}`);
      
      return true;
    } catch (error) {
      console.error('Error saving communities to storage:', error);
      return false;
    }
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