import React, { useState } from "react";
import { NavigationSection } from "../Home/sections/NavigationSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { SubmitFormSection } from "./sections/SubmitFormSection";
import { SubmitHeroSection } from "./sections/SubmitHeroSection";

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

export const Submit = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (data: CommunitySubmission) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - in real app, this would save to database
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just log the data and show success
      console.log('Community submitted:', data);
      
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full relative bg-neutralneutral-1 overflow-hidden">
      <NavigationSection />
      <SubmitHeroSection />
      <SubmitFormSection 
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
      />
      <FooterSection />
    </div>
  );
};