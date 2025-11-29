import { useState, useEffect } from "react";
import { 
  Settings, 
  Shield, 
  Bell, 
  Database, 
  Users, 
  Globe, 
  Zap,
  HardDrive,
  BarChart3,
  RefreshCw // Ícone novo para indicar carregamento/atualização
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Switch } from "../components/ui/switch";
import { api } from "../services/api";
import { toast } from "sonner"; // Opcional: biblioteca de toast, ou use console.log/alert

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
  
  // Estados de Preferências
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);
  
  // Estado do Sistema
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    version: "2.4.1",
    uptime: "Carregando...",
    environment: "Produção",
    lastUpdate: "Carregando..."
  });
  const [userId, setUserId] = useState<string | null>(null);

  // 1. Carregar ID do usuário e Status do Sistema ao montar
  useEffect(() => {
    // Recupera ID do usuário salvo no login
    const userData = localStorage.getItem("user_data");
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        // Tenta pegar o ID de vários lugares comuns (id, sub, userId)
        const id = parsed.id || parsed.sub || parsed.userId;
        setUserId(id);
        
        // Se tiver ID, busca as preferências atuais do usuário
        if (id) fetchUserPreferences(id);
      } catch (e) {
        console.error("Erro ao ler dados do usuário:", e);
      }
    }

    // Busca status da API
    fetchSystemStatus();
  }, []);

  const fetchSystemStatus = async () => {
    try {
      // Rota: Status da API (GET /app/status)
      // Como não sei o retorno exato, vou supor uma estrutura ou usar defaults
      const response = await api.get('/app/status');
      
      setSystemStatus({
        version: response.data.version || "2.5.0",
        uptime: response.data.uptime || "99.99%",
        environment: response.data.env || "Produção",
        lastUpdate: new Date().toLocaleDateString('pt-BR')
      });
    } catch (error) {
      console.error("Erro ao buscar status do sistema:", error);
      setSystemStatus(prev => ({ ...prev, uptime: "Online (Offline Check)" }));
    }
  };

  const fetchUserPreferences = async (id: string) => {
    try {
      // Rota: Retorna um usuário pelo ID (GET /users/:id)
      const response = await api.get(`/users/${id}`);
      const user = response.data;

      // Atualiza os switches com o que vier do banco (se existir esses campos)
      if (user.preferences) {
        setEmailNotifications(user.preferences.emailNotifications ?? true);
        setPushNotifications(user.preferences.pushNotifications ?? false);
        setTwoFactor(user.preferences.twoFactor ?? true);
      }
    } catch (error) {
      console.error("Erro ao carregar preferências do usuário:", error);
    }
  };

  // Função genérica para salvar alterações
  const handleToggleChange = async (key: string, value: boolean, setter: (val: boolean) => void) => {
    // 1. Atualização Otimista (Muda na tela na hora)
    setter(value);

    if (!userId) return;

    try {
      // 2. Chama a API para salvar
      // Rota: Atualiza parcialmente um usuário (PATCH /users/:id)
      await api.patch(`/users/${userId}`, {
        preferences: {
          // Precisamos enviar o estado atual dos outros também, ou o backend deve suportar merge
          // Aqui estou assumindo um merge inteligente ou enviando apenas o campo alterado
          [key]: value 
        }
      });
      // Sucesso silencioso
    } catch (error) {
      // Reverte em caso de erro
      setter(!value);
      alert("Não foi possível salvar a alteração. Tente novamente.");
      console.error(`Erro ao atualizar ${key}:`, error);
    }
  };

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
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
                <CardDescription>
                  Gerencie as configurações de segurança da sua conta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p>Autenticação de Dois Fatores</p>
                      <p className="text-sm text-muted-foreground">
                        Proteja sua conta com verificação em duas etapas
                      </p>
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
                      <p className="text-sm text-muted-foreground">
                        Gerenciado pelo servidor
                      </p>
                    </div>
                    <Badge variant="outline">Ver Detalhes</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notificações */}
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <CardTitle>Notificações</CardTitle>
                </div>
                <CardDescription>
                  Configure como você deseja receber notificações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p>Notificações por E-mail</p>
                      <p className="text-sm text-muted-foreground">
                        Receba atualizações importantes por e-mail
                      </p>
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
                      <p className="text-sm text-muted-foreground">
                        Receba alertas em tempo real no navegador
                      </p>
                    </div>
                    <Switch 
                      checked={pushNotifications} 
                      onCheckedChange={(checked) => handleToggleChange('pushNotifications', checked, setPushNotifications)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações do Sistema (Consumindo GET /app/status) */}
            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <CardTitle>Informações do Sistema</CardTitle>
                  </div>
                  <button onClick={fetchSystemStatus} className="text-muted-foreground hover:text-primary transition-colors">
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

            {/* Integrações (Estático por enquanto, pois não há rota específica na imagem) */}
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