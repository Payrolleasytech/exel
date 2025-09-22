"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { toast } from "react-toastify";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  discussion: z.string().min(1, "Please select what you'd like to discuss"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  agreeToPrivacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy statement"
  })
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreeToPrivacy: false
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data)

      toast.success("Message sent successfully!");

      reset();
    } catch (error: unknown) {
      toast.error(`Error sending message: ${error}. Please try again later.`);
        
    }
  };

  return (
    <div className="min-h-screen bg-form-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`/hero.jpg`} 
                alt="Exel Consultancy - Professional business team working together"
                className="w-full h-[500px] object-cover"
                height={500}
                width={500}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-bold text-lg mb-1">exel</h3>
                  <p className="text-sm opacity-90">CONSULTANCY</p>
                  <div className="mt-3 bg-white/20 rounded px-3 py-1 text-sm font-medium">
                    HMRC Compliance 100%
                  </div>
                </div>
                <p className="mt-4 text-sm italic">Your Success, Our Priority</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-card rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-3">Get In Touch</h1>
              <p className="text-muted-foreground">
                Whether you need expert consultancy, tailored strategies, or have a 
                quick question, we&apos;re here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name and Last Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-form-label font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    placeholder="e.g., John"
                    className={`bg-form-input border-border ${errors.firstName ? 'border-destructive' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="text-destructive text-sm">{errors.firstName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-form-label font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    placeholder="e.g., Smith"
                    className={`bg-form-input border-border ${errors.lastName ? 'border-destructive' : ''}`}
                  />
                  {errors.lastName && (
                    <p className="text-destructive text-sm">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-form-label font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="e.g., john.smith@gmail.com"
                    className={`bg-form-input border-border ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-form-label font-medium">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="e.g., +44 700 0000 000"
                    className="bg-form-input border-border"
                  />
                </div>
              </div>

              {/* Discussion Topic Dropdown */}
              <div className="space-y-2 w-full">
                <Label className="text-form-label font-medium w-full">
                  What would you like to discuss?
                </Label>
                <Select onValueChange={(value) => setValue("discussion", value)}>
                  <SelectTrigger className={`bg-form-input border-border w-full ${errors.discussion ? 'border-destructive' : ''}`}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultation">General Consultation</SelectItem>
                    <SelectItem value="hmrc-compliance">HMRC Compliance</SelectItem>
                    <SelectItem value="tax-planning">Tax Planning</SelectItem>
                    <SelectItem value="business-setup">Business Setup</SelectItem>
                    <SelectItem value="accounting">Accounting Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.discussion && (
                  <p className="text-destructive text-sm">{errors.discussion.message}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-form-label font-medium">
                  Leave us a message
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Write your message here..."
                  rows={4}
                  className={`bg-form-input border-border resize-none ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && (
                  <p className="text-destructive text-sm">{errors.message.message}</p>
                )}
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToPrivacy"
                  checked={watch("agreeToPrivacy")}
                  onCheckedChange={(checked) => setValue("agreeToPrivacy", checked as boolean)}
                  className={errors.agreeToPrivacy ? 'border-destructive' : ''}
                />
                <div className="space-y-1">
                  <Label 
                    htmlFor="agreeToPrivacy" 
                    className="text-sm text-form-label leading-relaxed cursor-pointer"
                  >
                    By checking this box and clicking &quot;Send Message&quot;, you are agreeing to Exel&apos;s Privacy Statement
                  </Label>
                  {errors.agreeToPrivacy && (
                    <p className="text-destructive text-sm">{errors.agreeToPrivacy.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-lg transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        {/* Other Ways to Reach Us Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-12">
            Other Ways to Reach Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Speak directly to an expert</h3>
              <p className="text-muted-foreground text-sm">020 3614 9225 (Mon-Fri, 9 AM - 6 PM)</p>
            </div>

            {/* Email */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Send us your questions anytime</h3>
              <p className="text-muted-foreground text-sm">info@exelconsultancy.co.uk</p>
            </div>

            {/* Live Chat */}
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">Live chat during business hours</h3>
              <Button variant="outline" className="mt-2">
                Chat Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;