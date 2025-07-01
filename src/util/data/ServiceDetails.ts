import PayrollSolutions from '@/components/home/animation-components/PayrollSolutions';

import PayrollSoftware from "@/components/home/animation-components/PayrollSoftware";
import UmbrellaServices from '@/components/home/animation-components/UmbrellaServices';
import AccountingServices from '@/components/home/animation-components/AccountingServices';
import { PayrollSoftwareDescription, PayrollSolutionsDescription, UmbrellaServicesDescription, AccountingServicesDescription } from '../FormattedDescriptions';


export const ServiceDetails = [
    {
        title: "Payroll Software (Licensed & Sold by Exel Consultancy)",
        description: PayrollSoftwareDescription,
        ctaText: "Book a Free Demo",
        items: ["Fully Licensed & HMRC-Approved", "Seamless Payroll Processing & Tax Calculations", "Integrates with HR & Accounting Software", "Dedicated Customer Support & Training"],
        ctaLink: "/services/consulting",
        icon: PayrollSoftware
    },
    {
        title: "Payroll Solutions",
        description: PayrollSolutionsDescription,
        ctaText: "Request a Free Consultation",
        items: ["PAYE Payroll for Businesses & Recruitment Agencies", "Automated Payroll Processing", "RTI & HMRC Reporting"],
        ctaLink: "/services/consulting",
        icon: PayrollSolutions
    },
    {
        title: "Umbrella Services",
        description: UmbrellaServicesDescription,
        ctaText: "Request a Free Consultation",
        items: ["IR35-Compliant Payroll Solutions", "Faster Payments & Secure Processing", "Tax Efficiency for Contractors"],
        ctaLink: "/services/consulting",
        icon: UmbrellaServices
    },
    {
        title: "Accountancy Services",
        description: AccountingServicesDescription,
        ctaText: "Request a Free Consultation",
        items: ["Self-Employed & Contractor Accounting", "Tax Planning & VAT Returns", "Bookkeeping & Financial Advisory"],
        ctaLink: "/services/consulting",
        icon: AccountingServices
    },

]