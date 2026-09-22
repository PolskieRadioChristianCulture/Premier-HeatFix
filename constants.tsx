import { ServiceItem, BenefitItem } from './types';

export const PHONE_NUMBER = "07800800678";
export const EMAIL_ADDRESS = "premierheatfix@gmail.com";
export const OWNER_NAME = "Mariusz";

// New logo image URL provided by the user
export const LOGO_IMAGE_URL = "https://i.postimg.cc/y8c27Cd4/Projekt-bez-nazwy-(24).png"; 

export const SERVICES: ServiceItem[] = [
  {
    id: 'gas',
    title: 'Gas work',
    description: 'Gas Safe registered specialist for all your gas needs.',
    icon: 'fa-fire-flame-curved',
    imageUrl: 'https://lh3.googleusercontent.com/d/1fMiSkMhjlH3LN0RqJnj7DgFu4Gw84mGU',
    details: [
      'Comprehensive Gas Appliance Installations (Boilers, Cookers, Water Heaters)',
      'Certified Landlord Gas Safety Checks & Official CP12 Documentation',
      'Systematic Annual Services: Boilers, Cookers, Ovens & Fireplaces'
    ]
  },
  {
    id: 'heating',
    title: 'Heating',
    description: 'Expert heating solutions and high-efficiency installations.',
    icon: 'fa-temperature-high',
    imageUrl: 'https://lh3.googleusercontent.com/d/1GEStOLA9tHOT-rPg4anSfPltNncLiiLV',
    details: [
      'Advanced Central Heating System Design & Precision Installations',
      'Energy-Efficient Underfloor Heating: Expert Design & Setup',
      'Unvented Hot Water Solutions & Premium MegaFlow Cylinder Servicing'
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Complete plumbing services from maintenance to installs.',
    icon: 'fa-faucet-drip',
    imageUrl: 'https://lh3.googleusercontent.com/d/1w2wsOY9UhM183zcqzr7raJF45wyM7ytw',
    details: [
      'Bespoke Luxury Bathroom Design & Sanitary Ware Installations',
      'Whole-Home Water Softeners & High-Performance Filtration Systems',
      'Prompt General Plumbing: Professional Upgrades, Repairs & Leak Detection'
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Professional electrical upgrades and smart home wiring.',
    icon: 'fa-bolt-lightning',
    imageUrl: 'https://lh3.googleusercontent.com/d/1ier3FcEQjnDKlyurQkDhv5VCF-Jqe4qR',
    details: [
      'Intelligent Smart Home Automation & IoT Infrastructure Integration',
      'Certified Domestic Wiring, Rewiring & Consumer Unit Installations',
      'Decorative Interior Lighting Design & Additional Power Point Additions'
    ]
  },
  {
    id: 'handywork',
    title: 'Handy work',
    description: 'Reliable trade help for all your home maintenance needs.',
    icon: 'fa-hammer',
    imageUrl: 'https://lh3.googleusercontent.com/d/1h3COBL9SGU-4R3jCN6wyzelHapwDHSIV',
    details: [
      'Professional Execution of All Detailed Small Scale Home Projects',
      'Preventative Property Maintenance & Expert Asset Care Solutions',
      'Dependable Assistance for Home Refurbishment & Aesthetic Repairs'
    ]
  },
  {
    id: 'cleaning',
    title: 'Cleaning',
    description: 'Professional deep and systematic cleaning services.',
    icon: 'fa-broom',
    imageUrl: 'https://lh3.googleusercontent.com/d/1gr5-9Q0RUomD4IXMe6Tg5DVYg5UlE8Oh',
    details: [
      'Specialist End-of-Tenancy Deep Cleans & Sanitization Protocols',
      'Thorough Post-Refurbishment & Construction Debris Cleaning',
      'Systematic Residential Care for a Consistently Pristine Environment'
    ]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Senior Support',
    description: 'We are happy to help for seniors-so call',
    icon: 'fa-hand-holding-heart'
  },
  {
    title: 'Home Excellence',
    description: 'We are very happy to satisfy your home needs',
    icon: 'fa-house-circle-check'
  },
  {
    title: 'Global Culture',
    description: 'We are listening Christian Global Culture only',
    icon: 'fa-radio',
    link: 'https://cclite.pl/'
  },
  {
    title: 'Payment by Heart',
    description: 'Happy to get paid by Heart',
    icon: 'fa-heart'
  }
];