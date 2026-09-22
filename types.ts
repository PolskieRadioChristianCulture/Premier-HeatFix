
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
  details: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
  link?: string;
}
