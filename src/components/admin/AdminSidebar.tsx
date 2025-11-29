import { LayoutDashboard, Users, MessageSquare, Settings, Stethoscope } from "lucide-react";
import { cn } from "../ui/utils";
import logo from "../../assets/logo.png";

interface AdminSidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'consultas', label: 'Consultas', icon: Stethoscope },
  { id: 'usuarios', label: 'Usuários', icon: Users },
  { id: 'chatbot', label: 'Chatbot', icon: MessageSquare },
  { id: 'configuracoes', label: 'Configurações', icon: Settings },
];

export function AdminSidebar({ activeItem, onNavigate }: AdminSidebarProps) {
  return (
    <aside className="w-64 shrink-0 border-r bg-gradient-primary border-white/10 flex flex-col h-full">
      
      {/* Logo e título */}
      <div className="p-6 border-b border-white/10 shrink-0 flex flex-col items-start">
        <img src={logo} alt="EssencialDEV" className="h-10 w-auto" />
        <p className="text-sm text-white/70 mt-2">Painel Administrativo</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 overflow-y-auto" aria-label="Menu administrativo">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-white/90",
                    "hover:bg-white/20 focus-ring",
                    isActive && "bg-white/30 text-white hover:bg-white/40"
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Usuário */}
      <div className="p-4 border-t border-white/10 shrink-0">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <span className="text-sm text-white">AD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate text-white">Admin User</p>
            <p className="text-xs text-white/70 truncate">admin@essencial.dev</p>
          </div>
        </div>
      </div>
    </aside>
  );
}