// Fix: Add all page types to the Page union type
// Fix: Add missing page types 'Journal' and 'Gallery' to the Page union type to allow for navigation.
export type Page = 'Home' | 'Community' | 'Tasks' | 'Meditation' | 'Mindset' | 'Profile' | 'Gallery';

export interface JournalEntry {
  id: number;
  date: string;
  title: string;
  content: string;
}

export interface CommunityPost {
  id: number;
  author: string;
  avatar: string;
  category: 'Daily Growth' | 'Meditation & Health' | 'Motivation Stories' | 'Zen Mind';
  content: string;
  reactions: {
    like: number;
    heart: number;
  };
  replies: number;
}

export interface DailyTask {
  day: number;
  focusTask: string;
  lesson: {
    title: string;
    content: string;
  };
  actionChallenge: string;
}