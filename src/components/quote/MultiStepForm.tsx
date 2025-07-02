"use client"
import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Progress } from '@/components/ui/progress';


import ContactDetailsStep from './ContactDetailStep';
import ServiceNeedsStep from './ServiceNeedsSteps';
import WorkDetailsStep from './WorkDetailsStep';
import { useToast } from '@/hooks/useToast';
import { Ticks } from '@/util/ItemLists';

export interface FormData {
    // Contact Details
    firstName: string;
    lastName: string;
    phone: string;
    email: string;

    // Work Details
    weeklyHours: number;
    hourlyRate: string;
    paymentMethod: string;
    industry: string;
    employmentType: string;
    agencyName: string;

    // Service Needs
    services: string[];
    additionalInfo: string;
}

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        weeklyHours: 40,
        hourlyRate: '',
        paymentMethod: '',
        industry: '',
        employmentType: '',
        agencyName: '',
        services: [],
        additionalInfo: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const { triggerToast } = useToast();

    const updateFormData = (data: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...data }));
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
            if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
            if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }

        if (step === 2) {
            if (!formData.hourlyRate.trim()) newErrors.hourlyRate = 'Hourly rate is required';
            if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
            if (!formData.industry) newErrors.industry = 'Industry is required';
            if (!formData.employmentType) newErrors.employmentType = 'Employment type is required';
            if (formData.employmentType === 'Recruitment Agency' && !formData.agencyName.trim()) {
                newErrors.agencyName = 'Agency name is required';
            }
        }

        if (step === 3) {
            if (formData.services.length === 0) {
                newErrors.services = 'Please select at least one service';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 3));
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const handleSubmit = () => {
        if (validateStep(currentStep)) {
            console.log('Form submitted:', formData);
            triggerToast({
                title: "Quote Request Submitted!",
                description: "We'll get back to you with a personalized quote soon.",
                type: "success"
            });

            // Show confirmation
            // alert(`Thank you for your quote request!\n\nContact Details:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nWork Details:\nWeekly Hours: ${formData.weeklyHours}\nHourly Rate: £${formData.hourlyRate}\nPayment Method: ${formData.paymentMethod}\nIndustry: ${formData.industry}\nEmployment Type: ${formData.employmentType}${formData.agencyName ? `\nAgency: ${formData.agencyName}` : ''}\n\nServices: ${formData.services.join(', ')}\n\nAdditional Info: ${formData.additionalInfo || 'None'}`);
        }
    };

    const stepTitles = ['Contact Details', 'Work Details', 'Service Needs'];
    //   const progress = (currentStep / 3) * 100;

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center mt-6 mb-4">
                {[1, 2, 3].map((step) => (
                    <React.Fragment key={step}>
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step <= currentStep
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-600'
                                }`}>
                                {step}
                            </div>
                            <span className="text-xs mt-1 text-gray-600">{stepTitles[step - 1]}</span>
                        </div>
                        {step < 3 && (
                            <div className={`xs: w-6 sm:w-20 mb-5 h-0.5 ${step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                                }`} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="text-center text-sm text-gray-500 mb-4">
                Step {currentStep} of 3
            </div>

            <div className="p-6">
                {currentStep === 1 && (
                    <ContactDetailsStep
                        formData={formData}
                        updateFormData={updateFormData}
                        errors={errors}
                    />
                )}

                {currentStep === 2 && (
                    <WorkDetailsStep
                        formData={formData}
                        updateFormData={updateFormData}
                        errors={errors}
                    />
                )}

                {currentStep === 3 && (
                    <ServiceNeedsStep
                        formData={formData}
                        updateFormData={updateFormData}
                        errors={errors}
                    />
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className="px-6"
                    >
                        Go Back
                    </Button>

                    {currentStep < 3 ? (
                        <Button
                            onClick={handleNext}
                            className="px-8 bg-blue-600 hover:bg-blue-700"
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            className="px-8 bg-blue-600 hover:bg-blue-700"
                        >
                            Get my Personalised Quote
                        </Button>
                    )}
                </div>

                {/* Trust badges */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap  gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <Ticks />
                            100% HMRC Compliant Solutions
                        </div>
                        <div className="flex items-center gap-1">
                            <Ticks />
                            Regulated & Fully Insured (FSCS & FCA)
                        </div>
                        <div className="flex items-center gap-1">
                            <Ticks />
                            Free Consultation via HMRC Inquiry Cover
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MultiStepForm