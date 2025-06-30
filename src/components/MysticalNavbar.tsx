
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Home, 
  Upload, 
  Eye, 
  MessageCircle, 
  BookOpen, 
  Settings,
  Gem
} from 'lucide-react';

interface MysticalNavbarProps {
  onSignOut: () => void;
}

const MysticalNavbar = ({ onSignOut }: MysticalNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { icon: Home, label: 'Home', action: () => scrollToSection('hero') },
    { icon: Upload, label: 'Palm Reading', action: () => scrollToSection('palm-upload') },
    { icon: Eye, label: 'Insights', action: () => scrollToSection('insights') },
    { icon: MessageCircle, label: 'Timelines', action: () => scrollToSection('timelines') },
    { icon: BookOpen, label: 'Reflections', action: () => scrollToSection('reflections') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/20 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gem className="w-8 h-8 text-neon-purple animate-pulse-glow" />
            <span className="mystical-title text-2xl font-bold text-neon-purple">
              ChronoMentor
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="flex items-center space-x-2 text-purple-200 hover:text-neon-purple transition-colors duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-purple-800/30 border-purple-500/50 text-purple-200 hover:bg-purple-700/50 hover:text-white"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button
              onClick={onSignOut}
              variant="outline"
              size="sm"
              className="bg-red-800/30 border-red-500/50 text-red-200 hover:bg-red-700/50 hover:text-white"
            >
              Sign Out
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-200 hover:text-neon-purple"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-900/90 backdrop-blur-lg border-t border-purple-500/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="flex items-center space-x-3 w-full text-left text-purple-200 hover:text-neon-purple transition-colors duration-300 p-2 rounded-lg hover:bg-purple-800/30"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            
            {/* Mobile Actions */}
            <div className="pt-4 border-t border-purple-500/20 space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-purple-800/30 border-purple-500/50 text-purple-200 hover:bg-purple-700/50"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button
                onClick={onSignOut}
                variant="outline"
                size="sm"
                className="w-full bg-red-800/30 border-red-500/50 text-red-200 hover:bg-red-700/50"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MysticalNavbar;
