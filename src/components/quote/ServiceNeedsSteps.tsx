import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { FormData } from './MultiStepForm';

interface ServiceNeedsStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  errors: Record<string, string>;
}

const ServiceNeedsStep: React.FC<ServiceNeedsStepProps> = ({
  formData,
  updateFormData,
  errors
}) => {
  const services = [
    'Payroll Services',
    'Umbrella Services', 
    'Fully Managed Payroll',
    'Assistance for overseas clients',
    'Not sure'
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    let updatedServices;
    if (checked) {
      updatedServices = [...formData.services, service];
    } else {
      updatedServices = formData.services.filter(s => s !== service);
    }
    updateFormData({ services: updatedServices });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-sm font-medium">
          What services do you need? *
        </Label>
        <div className="space-y-3">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={service}
                checked={formData.services.includes(service)}
                onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
              />
              <Label htmlFor={service} className="text-sm">{service}</Label>
            </div>
          ))}
        </div>
        {errors.services && (
          <p className="text-red-500 text-xs mt-1">{errors.services}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalInfo" className="text-sm font-medium">
          Additional Information (Optional)
        </Label>
        <Textarea
          id="additionalInfo"
          value={formData.additionalInfo}
          onChange={(e) => updateFormData({ additionalInfo: e.target.value })}
          placeholder="Please add any information about your current payroll arrangements or additional comments you feel..."
          rows={4}
          className="resize-none"
        />
        <p className="text-xs text-gray-500">
          Please add any information about your current payroll arrangements or additional comments you feel we should know about.
        </p>
      </div>
    </div>
  );
};

export default ServiceNeedsStep;
