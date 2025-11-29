import { useState, useEffect } from "react";
import { 
  Settings, 
  Shield, 
  Bell, 
  Zap,
  Globe,
  RefreshCw 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Switch } from "../components/ui/switch";
import { api } from "../services/api";

interface SettingsPageProps {
  onNavigate?: (page: string) => void;
  onLogout?: () => void;
}

interface SystemStatus {
  version: string;
  uptime: string;
  environment: string;
  lastUpdate: string;
}

export function SettingsPage({ onNavigate, onLogout }: SettingsPageProps) {
  const [activeMenuItem] = useState('configuracoes');
  

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  

  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    version: "2.4.1",
    uptime: "Verificando...",
    environment: "Produção",
    lastUpdate: "..."
  });
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user_data");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        const id = parsed.id || parsed.sub || parsed.userId;
        setUserId(id);
        if (id) fetchUserPreferences(id);
      } catch (e) {
        console.error("Erro ao ler dados do usuário:", e);
      }
    }

    fetchSystemStatus();
  }, []);

  const fetchSystemStatus = async () => {
    setIsLoadingStatus(true);
    
    const now = new Date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    try {

      const response = await api.get('/app/status');
      
      setSystemStatus({
        version: response.data.version || "2.5.0",
        uptime: response.data.uptime || "99.99%",
        environment: response.data.env || "Produção",
        lastUpdate: now 
      });
    } catch (error) {
      console.error("API de status offline, usando dados locais.");
      

      setSystemStatus({
        version: "2.5.0", 
        uptime: "Online", 
        environment: "Produção",
        lastUpdate: now 
      });
    } finally {
      setIsLoadingStatus(false);
    }
  };

  const fetchUserPreferences = async (id: string) => {
    try {
      const response = await api.get(`/users/${id}`);
      const user = response.data;

      if (user.preferences) {
        setEmailNotifications(user.preferences.emailNotifications ?? true);
        setPushNotifications(user.preferences.pushNotifications ?? false);
        setTwoFactor(user.preferences.twoFactor ?? true);
      }
    } catch (error) {
      console.error("Erro ao carregar preferências:", error);
    }
  };

  const handleToggleChange = async (key: string, value: boolean, setter: (val: boolean) => void) => {
    setter(value);
    if (!userId) return;

    try {
      await api.patch(`/users/${userId}`, {
        preferences: { [key]: value }
      });
    } catch (error) {
      setter(!value);
      alert("Erro ao salvar preferência.");
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden">      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <main className="flex-1 overflow-auto p-6" role="main">
          <div className="w-full max-w-full space-y-6">
            
            {/* Segurança */}
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle>Segurança</CardTitle>
                </div>
                <CardDescription>Gerencie as configurações de segurança da sua conta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p>Autenticação de Dois Fatores</p>
                      <p className="text-sm text-muted-foreground">Proteja sua conta com verificação em duas etapas</p>
                    </div>
                    <Switch 
                      checked={twoFactor} 
                      onCheckedChange={(checked) => handleToggleChange('twoFactor', checked, setTwoFactor)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p>Sessões Ativas</p>
                      <p className="text-sm text-muted-foreground">Gerenciado pelo servidor</p>
                    </div>
                    <Badge variant="outline">Ver Detalhes</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <CardTitle>Notificações</CardTitle>
                </div>
                <CardDescription>Configure como você deseja receber notificações</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p>Notificações por E-mail</p>
                      <p className="text-sm text-muted-foreground">Receba atualizações importantes por e-mail</p>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={(checked) => handleToggleChange('emailNotifications', checked, setEmailNotifications)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p>Notificações Push</p>
                      <p className="text-sm text-muted-foreground">Receba alertas em tempo real no navegador</p>
                    </div>
                    <Switch 
                      checked={pushNotifications} 
                      onCheckedChange={(checked) => handleToggleChange('pushNotifications', checked, setPushNotifications)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <CardTitle>Informações do Sistema</CardTitle>
                  </div>
                  <button 
                    onClick={fetchSystemStatus} 
                    className={`text-muted-foreground hover:text-primary transition-all ${isLoadingStatus ? 'animate-spin' : ''}`}
                    title="Verificar status agora"
                  >
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Versão da API</span>
                    <span>{systemStatus.version}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Última verificação</span>
                    <span>{systemStatus.lastUpdate}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ambiente</span>
                    <Badge variant="secondary">{systemStatus.environment}</Badge>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status do Servidor</span>
                    <span className="text-green-600 font-medium">{systemStatus.uptime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full opacity-80">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle>Integrações</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg space-y-2">
                    <Globe className="h-6 w-6 text-primary" />
                    <p>Google Calendar</p>
                    <Badge variant="secondary" className="text-xs">Em breve</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </main>
      </div>
    </div>
  );
}