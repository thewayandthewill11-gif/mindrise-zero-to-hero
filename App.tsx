
// Fix: Replaced placeholder content with a functional App component.
// This new component handles authentication, navigation, and renders all pages.
// It also defines and exports all the icon components required by other parts of the application,
// resolving the "not a module" import errors.
import React, { useState, useEffect, SVGProps } from 'react';
import type { Page } from './types';

import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import CommunityPage from './components/CommunityPage';
import TasksPage from './components/TasksPage';
import MeditationPage from './components/MeditationPage';
import MindsetPage from './components/MindsetPage';
import ProfilePage from './components/ProfilePage';
import GalleryPage from './components/GalleryPage';

// Icon components
const Icon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    />
);

export const HomeIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
);

export const ChatIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Icon>
);

export const MeditationIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
        <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </Icon>
);

export const TasksIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
    </Icon>
);

export const PenIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </Icon>
);

export const PlusIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </Icon>
);

export const XIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </Icon>
);

export const BrainIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v1.785c.381.253.728.56,1 .915H9.5A2.5 2.5 0 0 0 12 5V2zM6.5 2A2.5 2.5 0 0 0 4 4.5v3.25a.5.5 0 0 0 1 0V4.5a1.5 1.5 0 0 1 1.5-1.5z"/>
        <path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v3.58a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5V4.5A1.5 1.5 0 0 1 4.5 3z"/>
        <path d="M12.5 2A2.5 2.5 0 0 1 15 4.5v1.785c-.381.253-.728.56-1 .915h-1.5A2.5 2.5 0 0 1 10 5V2zM15.5 2A2.5 2.5 0 0 1 18 4.5v3.25a.5.5 0 0 1-1 0V4.5A1.5 1.5 0 0 0 15.5 3z"/>
        <path d="M17.5 2A2.5 2.5 0 0 1 20 4.5v3.58a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V4.5A1.5 1.5 0 0 0 17.5 3z"/>
        <path d="M2.5 10a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5zM20.5 10a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5z"/>
        <path d="M4.5 12a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5zM18.5 12a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5z"/>
        <path d="M6.5 13a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5zM16.5 13a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5z"/>
        <path d="M8.5 14a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5zM14.5 14a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0v-1.5a.5.5 0 0 0-.5-.5z"/>
        <path d="M11 14.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0zM12 2a10 10 0 0 0-3.342 19.342A.5.5 0 0 0 9.25 21a8 8 0 1 1 5.5 0 .5.5 0 0 0 .592.342A10 10 0 0 0 12 2z"/>
    </Icon>
);

export const HeartIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </Icon>
);

export const LikeIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </Icon>
);

export const CameraIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
    </Icon>
);

export const YoutubeIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.75 11.75 9.75 8.48 9.75 15.02" />
    </Icon>
);

export const UserIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </Icon>
);

export const LogoutIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </Icon>
);

export const SunIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </Icon>
);

export const MoonIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </Icon>
);

export const FacebookIcon: React.FC<SVGProps<SVGSVGElement> & { size?: number }> = ({ size = 24, ...props }) => (
    <Icon width={size} height={size} {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </Icon>
);


type Theme = 'light' | 'dark' | 'system';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme') as Theme | null;
      if (storedTheme) return storedTheme;
    }
    return 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);
  

  if (!isAuthenticated) {
    return <AuthPage onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomePage onNavigate={setCurrentPage} />;
      case 'Community': return <CommunityPage />;
      case 'Tasks': return <TasksPage />;
      case 'Meditation': return <MeditationPage />;
      case 'Mindset': return <MindsetPage />;
      case 'Profile': return <ProfilePage />;
      case 'Gallery': return <GalleryPage />;
      default: return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  const navItems: { page: Page, icon: React.FC<any>, label: string }[] = [
    { page: 'Home', icon: HomeIcon, label: 'Home' },
    { page: 'Tasks', icon: TasksIcon, label: 'Journey' },
    { page: 'Meditation', icon: MeditationIcon, label: 'Meditate' },
    { page: 'Community', icon: ChatIcon, label: 'Community' },
    { page: 'Mindset', icon: BrainIcon, label: 'Mindset' },
    { page: 'Profile', icon: UserIcon, label: 'Profile' }
  ];

  return (
    <div className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-20 flex justify-between items-center">
          <button onClick={() => setCurrentPage('Home')} className="text-2xl font-bold tracking-wider">MindRise</button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`font-semibold transition-colors ${currentPage === item.page ? 'text-brand-blue dark:text-brand-gold' : 'hover:text-brand-blue dark:hover:text-brand-gold'}`}
              >
                {item.label}
              </button>
            ))}
             <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hover:text-brand-blue dark:hover:text-brand-gold">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => setIsAuthenticated(false)} className="hover:text-red-500">
                <LogoutIcon />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-30 bg-white dark:bg-black pt-20">
              <nav className="container mx-auto px-4 py-8 flex flex-col gap-6 text-xl">
                  {navItems.map(item => (
                      <button
                          key={item.page}
                          onClick={() => {
                              setCurrentPage(item.page);
                              setIsMenuOpen(false);
                          }}
                          className={`font-semibold transition-colors flex items-center gap-4 ${currentPage === item.page ? 'text-brand-blue dark:text-brand-gold' : 'hover:text-brand-blue dark:hover:text-brand-gold'}`}
                      >
                          <item.icon /> {item.label}
                      </button>
                  ))}
                  <div className="border-t border-neutral-200 dark:border-neutral-700 my-4"></div>
                  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="font-semibold flex items-center gap-4 hover:text-brand-blue dark:hover:text-brand-gold">
                      {theme === 'dark' ? <SunIcon/> : <MoonIcon/>} Toggle Theme
                  </button>
                  <button onClick={() => setIsAuthenticated(false)} className="font-semibold flex items-center gap-4 hover:text-red-500">
                      <LogoutIcon /> Logout
                  </button>
              </nav>
          </div>
      )}


      {/* Main Content */}
      <main className="pt-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto px-4 py-12 text-center text-neutral-500">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">MindRise — Zero to Hero</h3>
          <div className="flex justify-center gap-6 mb-8">
              {navItems.filter(i => ['Home', 'Tasks', 'Meditate', 'Community'].includes(i.page)).map(item => (
                <button key={item.page} onClick={() => setCurrentPage(item.page)} className="hover:text-brand-blue dark:hover:text-brand-gold transition-colors">{item.label}</button>
              ))}
          </div>
          <div className="flex justify-center gap-6 mb-8">
              <a href="https://www.youtube.com/channel/UCBu3ZJiQISZv037qD8ZsLBA" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors"><YoutubeIcon size={28}/></a>
              <a href="https://facebook.com/share/163q5ZaWfP" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><FacebookIcon size={28} /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} MindRise. All Rights Reserved.</p>
          <p className="text-xs mt-2">Join the MindRise Circle for updates: <input type="email" placeholder="your@email.com" className="bg-neutral-200 dark:bg-neutral-800 p-1 rounded-md ml-2 border-transparent focus:ring-1 focus:ring-brand-blue dark:focus:ring-brand-gold focus:outline-none" /></p>
        </div>
      </footer>
    </div>
  );
}

export default App;