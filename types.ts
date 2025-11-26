import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
  type: 'academic' | 'pro';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  text: string;
  rating: number;
}