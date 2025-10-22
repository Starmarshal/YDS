export interface IExperience {
  id: number;
  period: string;
  duration?: string;
  company: string;
  position?: string;
  description?: string;
  achievements: string[];
  website?: string;
  location?: string;
  industry?: string;
}