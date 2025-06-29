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
      const response = await fetch('/data/communities.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.communities = await response.json();
      this.isLoaded = true;
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
      // In a real application, this would make an API call to save the data
      // For now, we'll simulate the submission and add it to our local array
      const newCommunity: Community = {
        id: Date.now(), // Simple ID generation for demo
        ...submission
      };

      this.communities.push(newCommunity);
      
      // In a real app, you would:
      // 1. Send POST request to your API
      // 2. Update the JSON file on the server
      // 3. Handle validation and error responses
      
      console.log('Community submitted:', newCommunity);
      return true;
    } catch (error) {
      console.error('Error submitting community:', error);
      return false;
    }
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