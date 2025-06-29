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
      console.log('🔍 Starting community loading process...');
      
      // FIRST: Try to load from localStorage (for newly submitted communities)
      const localData = localStorage.getItem('communities-data');
      if (localData) {
        try {
          const localCommunities = JSON.parse(localData);
          if (Array.isArray(localCommunities) && localCommunities.length > 0) {
            console.log('📦 Loading communities from localStorage:', localCommunities.length);
            this.communities = localCommunities;
            this.isLoaded = true;
            return this.communities;
          }
        } catch (parseError) {
          console.warn('⚠️ Failed to parse localStorage data, falling back to JSON file');
          localStorage.removeItem('communities-data'); // Clear corrupted data
        }
      }

      // FALLBACK: Load from original JSON file with multiple path attempts
      console.log('📄 Loading communities from JSON file...');
      
      const possiblePaths = [
        '/data/communities.json',
        './data/communities.json',
        '../data/communities.json',
        '/public/data/communities.json'
      ];

      let response: Response | null = null;
      let successfulPath = '';

      // Try each path until one works
      for (const path of possiblePaths) {
        try {
          console.log(`🔍 Trying path: ${path}`);
          response = await fetch(path);
          if (response.ok) {
            successfulPath = path;
            console.log(`✅ Successfully loaded from: ${path}`);
            break;
          }
        } catch (error) {
          console.log(`❌ Failed to load from ${path}:`, error);
          continue;
        }
      }

      if (!response || !response.ok) {
        console.error('❌ All paths failed, using fallback data');
        // Use fallback data if JSON file can't be loaded
        this.communities = this.getFallbackCommunities();
        this.isLoaded = true;
        
        // Save fallback data to localStorage
        localStorage.setItem('communities-data', JSON.stringify(this.communities));
        console.log('💾 Saved fallback data to localStorage');
        
        return this.communities;
      }

      // Parse the successful response
      const jsonData = await response.json();
      
      if (!Array.isArray(jsonData)) {
        throw new Error('Invalid JSON format: expected array');
      }

      this.communities = jsonData;
      this.isLoaded = true;
      
      // Save to localStorage for future use
      localStorage.setItem('communities-data', JSON.stringify(this.communities));
      console.log(`✅ Successfully loaded ${this.communities.length} communities from ${successfulPath}`);
      console.log('💾 Saved original JSON data to localStorage');
      
      return this.communities;
      
    } catch (error) {
      console.error('❌ Error loading communities:', error);
      
      // Last resort: use fallback data
      console.log('🔄 Using fallback community data...');
      this.communities = this.getFallbackCommunities();
      this.isLoaded = true;
      
      // Save fallback data to localStorage
      localStorage.setItem('communities-data', JSON.stringify(this.communities));
      
      return this.communities;
    }
  }

  // Fallback communities data in case JSON file can't be loaded
  private getFallbackCommunities(): Community[] {
    return [
      {
        id: 1,
        name: "Tech Sisters",
        category: "TECH",
        description: "A community that supports Muslim Women in Tech by telling our stories and coming together through mentorship and collaboration.",
        location: "United Kingdom",
        website: "www.tech-sisters.com",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        members: "1.5K+",
        contactEmail: "info@techsisters.com",
        foundedYear: "2018",
        socialMedia: {
          linkedin: "https://www.linkedin.com/company/tech-sisters-for-muslim-women-in-tech/",
          instagram: "https://www.instagram.com/tech_sisters/"
        }
      },
      {
        id: 2,
        name: "Her Synergy",
        category: "LEADERSHIP",
        description: "The premier community equipping women to navigate mid to senior level careers with confidence and connection",
        location: "GLOBAL",
        website: "www.hersynergytribe.com",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        members: "250+",
        contactEmail: "hello@hersynergy.com",
        foundedYear: "2020",
        socialMedia: {
          twitter: "https://x.com/hersynergy/",
          linkedin: "https://www.linkedin.com/company/hersynergy-tribe/",
          instagram: "https://www.instagram.com/hersynergytribe/"
        }
      },
      {
        id: 3,
        name: "Women in Podcasting",
        category: "PODCAST",
        description: "A thriving community for podcasters and expert guests. Our mission is to elevate women's voices globally and within the podcasting industry.",
        location: "GLOBAL",
        website: "www.womenpodcasters.com",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        members: "1K+",
        contactEmail: "info@womenpodcasters.com",
        foundedYear: "2020",
        socialMedia: {}
      },
      {
        id: 4,
        name: "Create Her Fest",
        category: "TECH",
        description: "Bridging the gender gap in tech through hands-on training in AI, AR/VR, and Blockchain.",
        location: "GLOBAL",
        website: "www.createherfest.com",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        members: "400+",
        contactEmail: "info@createherfest.com",
        foundedYear: "2020",
        socialMedia: {}
      },
      {
        id: 5,
        name: "AUOMIE",
        category: "BUSINESS",
        description: "Auomie empowers women, mumpreneurs and non-binary changemakers to achieve financial clarity and grow a business that supports the life they truly want to live",
        location: "GLOBAL",
        website: "www.auomie.com",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        members: "200+",
        contactEmail: "info@auomie.com",
        foundedYear: "2022",
        socialMedia: {}
      }
    ];
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
      
      // Save the updated communities
      const success = await this.saveCommunitiesToStorage();
      
      if (success) {
        console.log('✅ Community submitted successfully!');
        console.log('📊 Total communities now:', this.communities.length);
        
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
      
      // Save to localStorage (simulating JSON file update)
      localStorage.setItem('communities-data', JSON.stringify(this.communities));
      
      // Also save a backup with timestamp
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
      
      return true;
    } catch (error) {
      console.error('❌ Error saving communities to storage:', error);
      return false;
    }
  }

  // Debug method to get current storage info
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
      try {
        const backupData = JSON.parse(backup);
        totalCommunities = backupData.totalCount || 0;
        lastUpdated = backupData.timestamp;
      } catch (error) {
        console.warn('Failed to parse backup data');
      }
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

  // Method to clear all data (for testing)
  clearAllData(): void {
    localStorage.removeItem('communities-data');
    localStorage.removeItem('communities-backup');
    this.communities = [];
    this.isLoaded = false;
    console.log('🗑️ All community data cleared');
  }

  // Method to reset to original data
  async resetToOriginalData(): Promise<boolean> {
    try {
      this.clearAllData();
      await this.loadCommunities();
      console.log('🔄 Reset to original data complete');
      return true;
    } catch (error) {
      console.error('❌ Failed to reset to original data:', error);
      return false;
    }
  }
}

// Export a singleton instance
export const communityService = new CommunityService();