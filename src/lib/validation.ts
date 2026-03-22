export interface FormData {
  name: string;
  email: string;
  business: string;
  shopifyUrl: string;
  revenue: string;
  services: string[];
  challenge: string;
  referral: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  business?: string;
  shopifyUrl?: string;
  revenue?: string;
  services?: string;
  challenge?: string;
}

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name || data.name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.business || data.business.length < 2) {
    errors.business = "Business name must be at least 2 characters.";
  }
  if (!data.shopifyUrl || !/^https?:\/\/.+\..+/.test(data.shopifyUrl)) {
    errors.shopifyUrl = "Please enter a valid URL.";
  }
  if (!data.revenue) {
    errors.revenue = "Please select your monthly revenue.";
  }
  if (!data.services || data.services.length === 0) {
    errors.services = "Please select at least one service.";
  }
  if (!data.challenge || data.challenge.length < 10) {
    errors.challenge = "Please describe your challenge (at least 10 characters).";
  }

  return errors;
}
