/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Page {
  HOME = "HOME",
  CAREER = "CAREER",
  READING = "READING",
  GAME = "GAME",
  MEAL = "MEAL"
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  progress?: number; // percentage, e.g. 65 for currently reading
  imageUrl: string;
}

export interface TimelineEvent {
  period: string;
  title: string;
  description: string;
  skills: string[];
}

export interface MealItem {
  id: string;
  name: string;
  ingredients: string[];
}
