import { User, LogOut } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ThemeToggle } from "../shared/ThemeToggle";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface AdminTopbarProps {
  title: string;
  period?: string;
  onPeriodChange?: (period: string) => void;
  onLogout?: () => void;
}

export function AdminTopbar({ title, period, onPeriodChange, onLogout }: AdminTopbarProps) {
  return (
    <header className="border-b bg-gradient-primary px-6 py-4 shrink-0">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-white">{title}</h1>
        </div>
        
        <div className="flex items-center gap-4">
          
          <ThemeToggle />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none focus-ring rounded-full">
                <Avatar className="bg-white/20 border border-white/30 cursor-pointer">
                  <AvatarFallback className="bg-transparent">
                    <User className="h-4 w-4 text-white" />
                  </AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                <span>Meu Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer text-destructive focus:text-destructive"
                onClick={onLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}