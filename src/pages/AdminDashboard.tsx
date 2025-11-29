import { useState, useEffect } from "react";
import { AdminSidebar } from "../components/admin/AdminSidebar";
import { AdminTopbar } from "../components/admin/AdminTopbar";
import { KPICard } from "../components/admin/KPICard";
import { ConsultationTable } from "../components/admin/ConsultationTable";
import { UsersPage } from "./UsersPage";
import { ChatbotPage } from "./ChatbotPage";
import { SettingsPage } from "./SettingsPage";
import { ConsultationsPage } from "./ConsultationsPage";
import { api } from "../services/api";
import {
  Calendar, CalendarCheck, CalendarX, CalendarClock, Users, Activity, TrendingUp, BarChart3,
} from "lucide-react";

interface AdminDashboardProps {
  onLogout?: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");
  const [period, setPeriod] = useState("hoje");
  

  const [metrics, setMetrics] = useState({
    proximasConsultas: 0,
    consultasAgendadas: 0,
    consultasCanceladas: 0,
    consultasAnteriores: 0,
    totalUsuarios: 0,
    taxaOcupacao: "0%", 
  });

  useEffect(() => {
    async function calculateMetrics() {
      try {
        const [usersRes, appointmentsRes] = await Promise.all([
          api.get('/users'),
          api.get('/appointments')
        ]);

        const users = usersRes.data || [];
        const rawAppointments = appointmentsRes.data || [];
        const now = new Date();
 
        const processedAppointments = rawAppointments.map((app: any) => {
          const appDateTime = new Date(`${app.date}T${app.hour || '00:00'}`);
          const currentStatus = (app.status || 'Agendada').toUpperCase();

          if (!isNaN(appDateTime.getTime()) && appDateTime < now) {
            if (!currentStatus.includes('CANCEL') && !currentStatus.includes('CONCLU')) {
              return { ...app, status: 'Concluída' };
            }
          }
          return app;
        });

        const agendadasCount = processedAppointments.filter((a: any) => {
            const s = (a.status || 'Agendada').toUpperCase();
            return s.includes('AGENDADA') || s.includes('SCHEDULED');
        }).length;

        const canceladasCount = processedAppointments.filter((a: any) => {
            const s = (a.status || '').toUpperCase();
            return s.includes('CANCEL');
        }).length;

        const concluidasCount = processedAppointments.filter((a: any) => {
            const s = (a.status || '').toUpperCase();
            return s.includes('CONCLU') || s.includes('COMPLETED');
        }).length;
        
        setMetrics({

          proximasConsultas: agendadasCount,
          consultasAgendadas: agendadasCount,
          consultasCanceladas: canceladasCount,
          consultasAnteriores: concluidasCount,
          totalUsuarios: users.length,
          taxaOcupacao: "80%",
        });

      } catch (error) {
        console.error("Erro ao calcular métricas do dashboard:", error);
      }
    }

    if (activeMenuItem === "dashboard") {
      calculateMetrics();
    }
  }, [activeMenuItem]);

  const handleNavigation = (page: string) => setActiveMenuItem(page);

  function renderContent() {
    switch (activeMenuItem) {
      case "consultas": return <ConsultationsPage />;
      case "usuarios": return <UsersPage />;
      case "chatbot": return <ChatbotPage />;
      case "configuracoes": return <SettingsPage />;
      case "dashboard":
      default:
        return (
          <>
            <section aria-label="Indicadores principais">
              <div className="grid-kpi">
                <KPICard title="Próximas Consultas" value={metrics.proximasConsultas} icon={Calendar} tooltip="Agendadas futuras" />
                <KPICard title="Consultas Agendadas" value={metrics.consultasAgendadas} icon={CalendarCheck} tooltip="Total agendadas ativas" />
                <KPICard title="Consultas Canceladas" value={metrics.consultasCanceladas} icon={CalendarX} tooltip="Total canceladas" />
                <KPICard title="Consultas Anteriores" value={metrics.consultasAnteriores} icon={CalendarClock} tooltip="Total concluídas" />
                <KPICard title="Total de Usuários" value={metrics.totalUsuarios} icon={Users} tooltip="Total cadastrado" />
                <KPICard title="Taxa de Ocupação" value={metrics.taxaOcupacao} icon={Activity} tooltip="Ocupação estimada" />
                <KPICard title="Crescimento Mensal" value="18%" icon={TrendingUp} tooltip="Dado simulado" />
                <KPICard title="Métricas Gerais" value="92%" icon={BarChart3} tooltip="Dado simulado" />
              </div>
            </section>
            <ConsultationTable />
          </>
        );
    }
  }

  return (
    <div className="flex h-screen w-full overflow-hidden select-none">
      <AdminSidebar activeItem={activeMenuItem} onNavigate={handleNavigation} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminTopbar title="Dashboard" period={period} onPeriodChange={setPeriod} onLogout={onLogout} />
        <main className="flex-1 overflow-auto p-6" role="main">
          <div className="w-full max-w-full space-y-6">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}