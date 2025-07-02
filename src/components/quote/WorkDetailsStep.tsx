import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { FormData } from './MultiStepForm';

interface WorkDetailsStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: Record<string, string>;
}

const WorkDetailsStep: React.FC<WorkDetailsStepProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className="text-sm font-medium">
          Average Weekly Hours
        </Label>
        <div className="px-3">
          <Slider
            value={[formData.weeklyHours]}
            onValueChange={(value) => updateFormData({ weeklyHours: value[0] })}
            max={70}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1</span>
            <span className="font-medium">{formData.weeklyHours} hours</span>
            <span>70</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="hourlyRate" className="text-sm font-medium">
          Average Hourly Rate *
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
          <Input
            id="hourlyRate"
            value={formData.hourlyRate}
            onChange={(e) => updateFormData({ hourlyRate: e.target.value })}
            placeholder="0.00"
            className={`pl-8 ${errors.hourlyRate ? 'border-red-500' : ''}`}
            type="number"
            step="0.01"
          />
        </div>
        {errors.hourlyRate && (
          <p className="text-red-500 text-xs mt-1">{errors.hourlyRate}</p>
        )}
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
  <div className="space-y-2 w-full">
    <Label className="text-sm font-medium">
      How would you like to get paid? *
    </Label>
    <Select
      value={formData.paymentMethod}
      onValueChange={(value) => updateFormData({ paymentMethod: value })}
    >
      <SelectTrigger
        className={`w-full ${errors.paymentMethod ? 'border-red-500' : ''}`}
      >
        <SelectValue placeholder="Please select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="weekly">Weekly</SelectItem>
        <SelectItem value="monthly">Monthly</SelectItem>
        <SelectItem value="per-project">Per Project</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
    {errors.paymentMethod && (
      <p className="text-red-500 text-xs mt-1">{errors.paymentMethod}</p>
    )}
  </div>

  <div className="space-y-2 w-full">
    <Label className="text-sm font-medium">Industry *</Label>
    <Select
      value={formData.industry}
      onValueChange={(value) => updateFormData({ industry: value })}
    >
      <SelectTrigger
        className={`w-full ${errors.industry ? 'border-red-500' : ''}`}
      >
        <SelectValue placeholder="Please select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="it">IT & Technology</SelectItem>
        <SelectItem value="finance">Finance</SelectItem>
        <SelectItem value="healthcare">Healthcare</SelectItem>
        <SelectItem value="education">Education</SelectItem>
        <SelectItem value="construction">Construction</SelectItem>
        <SelectItem value="retail">Retail</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
    {errors.industry && (
      <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
    )}
  </div>
</div>


      <div className="space-y-3">
        <Label className="text-sm font-medium">
          Employment Type *
        </Label>
        <RadioGroup
          value={formData.employmentType}
          onValueChange={(value) => updateFormData({ employmentType: value, agencyName: value !== 'Recruitment Agency' ? '' : formData.agencyName })}
          className="grid grid-cols-2 gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Contractor" id="contractor" />
            <Label htmlFor="contractor" className="text-sm">Contractor</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Freelancer" id="freelancer" />
            <Label htmlFor="freelancer" className="text-sm">Freelancer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Employee" id="employee" />
            <Label htmlFor="employee" className="text-sm">Employee</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Recruitment Agency" id="agency" />
            <Label htmlFor="agency" className="text-sm">Recruitment Agency</Label>
          </div>
        </RadioGroup>
        {errors.employmentType && (
          <p className="text-red-500 text-xs mt-1">{errors.employmentType}</p>
        )}
      </div>

      {formData.employmentType === 'Recruitment Agency' && (
        <div className="space-y-2">
          <Label htmlFor="agencyName" className="text-sm font-medium">
            Agency Name *
          </Label>
          <Input
            id="agencyName"
            value={formData.agencyName}
            onChange={(e) => updateFormData({ agencyName: e.target.value })}
            placeholder="e.g. ABC Recruitment"
            className={errors.agencyName ? 'border-red-500' : ''}
          />
          {errors.agencyName && (
            <p className="text-red-500 text-xs mt-1">{errors.agencyName}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkDetailsStep;