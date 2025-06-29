import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { CheckCircle, Upload, AlertCircle, ImageIcon, Info } from "lucide-react";
import { CommunitySubmission } from "../../../../lib/communityService";
import { FileService } from "../../../../lib/fileService";

interface SubmitFormSectionProps {
  onSubmit: (data: CommunitySubmission) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError?: string | null;
}

interface FormData {
  name: string;
  category: string;
  description: string;
  location: string;
  website: string;
  image: string;
  members: string;
  contactEmail: string;
  foundedYear: string;
  twitter: string;
  linkedin: string;
  instagram: string;
}

interface FormErrors {
  [key: string]: string;
}

export const SubmitFormSection = ({ onSubmit, isSubmitting, submitSuccess, submitError }: SubmitFormSectionProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    category: "",
    description: "",
    location: "",
    website: "",
    image: "",
    members: "",
    contactEmail: "",
    foundedYear: "",
    twitter: "",
    linkedin: "",
    instagram: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [imagePreview, setImagePreview] = useState<string>("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");

  const categories = [
    "TECH",
    "UI/UX",
    "CODING",
    "HEALTH",
    "BUSINESS",
    "EDUCATION",
    "ARTS",
    "COMMUNITY",
    "LEADERSHIP",
    "PODCAST",
    "INNOVATION",
    "CLIMATE",
    "METALS",
    "SEXUALITY"
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
    if (!formData.name.trim()) newErrors.name = "Community name is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.website.trim()) newErrors.website = "Website is required";
    if (!formData.contactEmail.trim()) newErrors.contactEmail = "Contact email is required";
    if (!formData.members.trim()) newErrors.members = "Member count is required";
    if (!formData.foundedYear.trim()) newErrors.foundedYear = "Founded year is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.contactEmail && !emailRegex.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email address";
    }

    // Website validation
    const websiteRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (formData.website && !websiteRegex.test(formData.website)) {
      newErrors.website = "Please enter a valid website URL";
    }

    // Description length validation
    if (formData.description.length < 50) {
      newErrors.description = "Description must be at least 50 characters long";
    }

    // Founded year validation
    const currentYear = new Date().getFullYear();
    const year = parseInt(formData.foundedYear);
    if (formData.foundedYear && (isNaN(year) || year < 1900 || year > currentYear)) {
      newErrors.foundedYear = `Please enter a valid year between 1900 and ${currentYear}`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    setErrors(prev => ({ ...prev, image: "" }));

    try {
      console.log('📤 Starting image upload process...');
      console.log('📁 File details:', {
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)}MB`,
        type: file.type
      });

      // Use FileService to handle the upload
      const imageUrl = await FileService.saveImage(file);
      
      setFormData(prev => ({ ...prev, image: imageUrl }));
      setImagePreview(imageUrl);
      setUploadedFileName(file.name);
      
      console.log('✅ Image uploaded successfully:', {
        originalName: file.name,
        savedUrl: imageUrl,
        size: `${(file.size / 1024 / 1024).toFixed(2)}MB`
      });
      
    } catch (error) {
      console.error('❌ Image upload failed:', error);
      setErrors(prev => ({ 
        ...prev, 
        image: error instanceof Error ? error.message : 'Failed to upload image' 
      }));
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    console.log('🚀 Form submission started...');

    // Ensure upload directory exists (simulated)
    await FileService.ensureUploadDirectory();

    const submissionData: CommunitySubmission = {
      name: formData.name,
      category: formData.category,
      description: formData.description,
      location: formData.location,
      website: formData.website.startsWith('http') ? formData.website : `https://${formData.website}`,
      image: formData.image || "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      members: formData.members,
      contactEmail: formData.contactEmail,
      foundedYear: formData.foundedYear,
      socialMedia: {
        twitter: formData.twitter || undefined,
        linkedin: formData.linkedin || undefined,
        instagram: formData.instagram || undefined,
      }
    };

    console.log('📤 Submitting community data:', submissionData);
    console.log('💾 Data will be saved to localStorage as "communities-data"');
    
    onSubmit(submissionData);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      description: "",
      location: "",
      website: "",
      image: "",
      members: "",
      contactEmail: "",
      foundedYear: "",
      twitter: "",
      linkedin: "",
      instagram: ""
    });
    setImagePreview("");
    setUploadedFileName("");
    setErrors({});
  };

  if (submitSuccess) {
    return (
      <section className="w-full py-10 bg-neutralneutral-1">
        <div className="max-w-[800px] mx-auto px-10">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-12 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-neutral-800 mb-4">
                Community Submitted Successfully! 🎉
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Thank you for submitting your community to our archive. Your submission has been saved 
                to our database and will be visible immediately in the archive.
              </p>
              
              {/* 🔍 SAVE LOCATION INFO */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Where is your data saved?</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>💾 <strong>Primary Storage:</strong> Browser localStorage ("communities-data")</li>
                      <li>🔄 <strong>Backup:</strong> Browser localStorage ("communities-backup")</li>
                      <li>📊 <strong>Immediate Access:</strong> Available in Archive page right now</li>
                      <li>🌐 <strong>Note:</strong> In production, this would save to the server's JSON file</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg mb-6 text-left">
                <h3 className="font-semibold text-neutral-800 mb-2">What happens next?</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>✅ Your community data has been saved to browser storage</li>
                  <li>🔍 You can see it immediately in the Archive page</li>
                  <li>📱 Data persists until browser storage is cleared</li>
                  <li>🚀 In production: Would be saved to server and database</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={resetForm}
                  className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-full px-8"
                >
                  Submit Another Community
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('/archive', '_blank')}
                  className="rounded-full px-8"
                >
                  View in Archive
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-10 bg-neutralneutral-1">
      <div className="max-w-[800px] mx-auto px-10">
        {/* 🔍 SAVE LOCATION INFO BANNER */}
        <Card className="border border-blue-200 bg-blue-50 mb-6">
          <CardContent className="p-4">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Data Storage Information</h3>
                <p className="text-sm text-blue-700">
                  Your community submission will be saved to <strong>browser localStorage</strong> and will be 
                  immediately available in the Archive page. In a production environment, this would save 
                  directly to the server's JSON file and database.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error Message */}
        {submitError && (
          <Card className="border-2 border-red-200 bg-red-50 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center text-red-700">
                <AlertCircle className="w-5 h-5 mr-2" />
                <p>{submitError}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border border-neutral-200 shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-xl font-bold text-neutral-800 mb-6 pb-3 border-b border-neutral-200">
                  Basic Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Community Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Community Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="Enter your community name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent ${
                        errors.category ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.category}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent ${
                        errors.location ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="e.g., Global, USA, Nigeria"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.location}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent resize-none ${
                        errors.description ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="Describe your community's mission, goals, and what makes it unique (minimum 50 characters)"
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.description ? (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.description}
                        </p>
                      ) : (
                        <p className="text-sm text-neutral-500">
                          {formData.description.length}/50 characters minimum
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact & Details */}
              <div>
                <h3 className="text-xl font-bold text-neutral-800 mb-6 pb-3 border-b border-neutral-200">
                  Contact & Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Website */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Website *
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent ${
                        errors.website ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="https://yourwebsite.com"
                    />
                    {errors.website && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.website}
                      </p>
                    )}
                  </div>

                  {/* Contact Email */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent ${
                        errors.contactEmail ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="contact@yourwebsite.com"
                    />
                    {errors.contactEmail && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.contactEmail}
                      </p>
                    )}
                  </div>

                  {/* Members Count */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Member Count *
                    </label>
                    <input
                      type="text"
                      value={formData.members}
                      onChange={(e) => handleInputChange('members', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent ${
                        errors.members ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="e.g., 2.5K+, 500+, 10K+"
                    />
                    {errors.members && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.members}
                      </p>
                    )}
                  </div>

                  {/* Founded Year */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Founded Year *
                    </label>
                    <input
                      type="number"
                      value={formData.foundedYear}
                      onChange={(e) => handleInputChange('foundedYear', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent ${
                        errors.foundedYear ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="2020"
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                    {errors.foundedYear && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.foundedYear}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Social Media (Optional) */}
              <div>
                <h3 className="text-xl font-bold text-neutral-800 mb-6 pb-3 border-b border-neutral-200">
                  Social Media <span className="text-sm font-normal text-neutral-500">(Optional)</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Twitter */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Twitter
                    </label>
                    <input
                      type="text"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange('twitter', e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
                      placeholder="@yourusername"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange('linkedin', e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
                      placeholder="linkedin.com/company/..."
                    />
                  </div>

                  {/* Instagram */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Instagram
                    </label>
                    <input
                      type="text"
                      value={formData.instagram}
                      onChange={(e) => handleInputChange('instagram', e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
                      placeholder="@yourusername"
                    />
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <h3 className="text-xl font-bold text-neutral-800 mb-6 pb-3 border-b border-neutral-200">
                  Community Image <span className="text-sm font-normal text-neutral-500">(Optional)</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
                      isUploadingImage 
                        ? 'border-blue-300 bg-blue-50' 
                        : errors.image 
                          ? 'border-red-300 bg-red-50' 
                          : 'border-neutral-300 bg-neutral-50 hover:bg-neutral-100'
                    }`}>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {isUploadingImage ? (
                          <>
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                            <p className="text-sm text-blue-600 font-semibold">Uploading image...</p>
                          </>
                        ) : (
                          <>
                            <Upload className="w-8 h-8 mb-2 text-neutral-500" />
                            <p className="mb-2 text-sm text-neutral-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-neutral-500">PNG, JPG or GIF (MAX. 5MB)</p>
                            {uploadedFileName && (
                              <p className="text-xs text-green-600 mt-1 flex items-center">
                                <ImageIcon className="w-3 h-3 mr-1" />
                                {uploadedFileName}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploadingImage}
                      />
                    </label>
                  </div>
                  
                  {errors.image && (
                    <p className="text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.image}
                    </p>
                  )}
                  
                  {imagePreview && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-neutral-700 mb-2">Preview:</p>
                      <img
                        src={imagePreview}
                        alt="Community preview"
                        className="w-full h-48 object-cover rounded-xl border border-neutral-200"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-neutral-200">
                <Button
                  type="submit"
                  disabled={isSubmitting || isUploadingImage}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Saving to localStorage...
                    </div>
                  ) : (
                    "Submit Community"
                  )}
                </Button>
                
                <p className="text-sm text-neutral-500 text-center mt-4">
                  By submitting, you agree that the information provided is accurate and you have the right to represent this community.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};