import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

export function formatPercentage(num: number): string {
  return `${num.toFixed(2)}%`;
}

export function getEngagementColor(rate: number): string {
  if (rate >= 6) return 'text-green-600';
  if (rate >= 3) return 'text-blue-600';
  if (rate >= 1) return 'text-yellow-600';
  return 'text-red-600';
}

export function getScoreColor(score: number): string {
  if (score >= 90) return 'text-green-600 bg-green-50';
  if (score >= 80) return 'text-blue-600 bg-blue-50';
  if (score >= 70) return 'text-yellow-600 bg-yellow-50';
  return 'text-gray-600 bg-gray-50';
}
