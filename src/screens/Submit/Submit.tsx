import React, { useState } from "react";
import { NavigationSection } from "../Home/sections/NavigationSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { SubmitFormSection } from "./sections/SubmitFormSection";
import { SubmitHeroSection } from "./sections/SubmitHeroSection";
import { communityService, CommunitySubmission } from "../../lib/communityService";

export const Submit = (): JSX.Element => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (data: CommunitySubmission) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Use the community service to submit the data
      const success = await communityService.submitCommunity(data);
      
      if (success) {
        setSubmitSuccess(true);
        // Reset success message after 10 seconds
        setTimeout(() => setSubmitSuccess(false), 10000);
      } else {
        setSubmitError('Failed to submit community. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again.');
    } finally {
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
        submitError={submitError}
      />
      <FooterSection />
    </div>
  );
};