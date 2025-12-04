import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export interface DetailedServiceItem {
  id: string;
  title: string;
  group: string; // e.g., "Web Development", "Mobile", "Cloud"
  purpose: string;
  deliverables: string;
  tech: string;
  outcome: string;
  icon: React.ElementType;
  image?: string;
  keyFeatures: string[];
  perfectFor: string[];
  whyChoose: string[];
}

export interface ServiceGroup {
  title: string;
  mainServiceId: string; // ID of the parent service page (e.g., 'web-development')
  items: string[]; // IDs of the children (e.g., 'react-development', 'node-development')
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudyData {
  client: string;
  result: string;
  metricLabel: string;
  chartData: { name: string; value: number }[];
}

export interface EngagementModel {
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  categories: string[];
  description: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for the full article
  author: string;
  authorRole?: string; // Added for detail view
  date: string;
  category: string;
  readTime?: string;
  image?: string;
}