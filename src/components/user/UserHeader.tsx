import { Search, User } from "lucide-react";
import { Input } from "../ui/input";
import { ThemeToggle } from "../shared/ThemeToggle";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

interface UserHeaderProps {
  currentPage: 'chat' | 'blog' | 'scheduling';
  onNavigate: (page: 'chat' | 'blog' | 'scheduling') => void;
}

export function UserHeader({ currentPage, onNavigate }: UserHeaderProps) {
  return (
    <header className="border-b bg-card px-4 md:px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-8">
          <h2>EssencialDEV</h2>
          
          <nav aria-label="Menu principal" className="hidden md:block">
            <ul className="flex gap-1">
              <li>
                <Button
                  variant={currentPage === 'chat' ? 'default' : 'ghost'}
                  onClick={() => onNavigate('chat')}
                  className="nav-hover focus-ring"
                >
                  Assistente Virtual
                </Button>
              </li>
              <li>
                <Button
                  variant={currentPage === 'blog' ? 'default' : 'ghost'}
                  onClick={() => onNavigate('blog')}
                  className="nav-hover focus-ring"
                >
                  Blog de Saúde
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative w-48 md:w-64 hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar..."
              className="pl-9 bg-input-background focus-ring"
              aria-label="Busca"
            />
          </div>
          
          <ThemeToggle />
          
          <Avatar className="hidden md:flex">
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
