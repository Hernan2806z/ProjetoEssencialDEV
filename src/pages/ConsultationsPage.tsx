import React, { useState, useEffect, useCallback } from "react";
import { Plus, X, Calendar, Filter, Edit2, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { api } from "../services/api";

interface Consultation {
  id: string;
  patientName: string;
  specialist: string;
  date: string;
  hour: string;
  status?: string;
  specialty?: string;
  patientEmail?: string; 
}

const AppointmentModal = ({ isOpen, onClose, onSave, initialData }: any) => {
  const [formData, setFormData] = useState({
    patientName: '', patientEmail: '', specialist: '', date: '', hour: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        patientName: initialData.patientName || '',
        patientEmail: initialData.patientEmail || '',
        specialist: initialData.specialist || '',
        date: initialData.date || '',
        hour: initialData.hour || ''
      });
    } else {
      setFormData({ patientName: '', patientEmail: '', specialist: '', date: '', hour: '' });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  // Label styles
  const labelClass = "text-sm font-medium text-white dark:text-blue-100 mb-1.5 block";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-sm p-4">
      
      {/* CSS CUSTOMIZADO PARA OS DEGRADÊS */}
      <style>{`
        .custom-modal-container {
          background: linear-gradient(180deg, #00d5be 0%, #6393ff 100%) !important;
          border: none;
        }
        .dark .custom-modal-container {
          background: linear-gradient(135deg, #000924 0%, #061640 100%) !important;
          border: 1px solid #1e3a8a;
        }
        .custom-input-bg {
          background-color: rgba(255, 255, 255, 0.9);
          color: #111827;
          border: 1px solid transparent;
        }
        .custom-input-bg:focus {
          background-color: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.3);
        }
        .dark .custom-input-bg {
          background-color: rgba(10, 22, 51, 0.6) !important;
          color: #ffffff !important;
          border: 1px solid #1e3a8a !important;
        }
        .dark .custom-input-bg::placeholder {
          color: #64748b;
        }
        .dark .custom-input-bg:focus {
          background-color: rgba(10, 22, 51, 0.9) !important;
          border-color: #3b82f6 !important;
          box-shadow: none;
        }
      `}</style>

      <div className="custom-modal-container rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="bg-transparent flex justify-between items-start p-6 border-b border-white/20 dark:border-blue-900/30">
          <div>
            <h3 className="font-semibold text-xl text-white">
              {initialData ? 'Editar Consulta' : 'Nova Consulta'}
            </h3>
            <p className="text-sm text-white/80 dark:text-blue-200/70 mt-1 flex items-center gap-1">
               <Calendar className="w-3 h-3" /> Gerenciamento de Consultas
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className={labelClass}>Paciente</label>
                <Input 
                  className="custom-input-bg"
                  placeholder="Nome do Paciente" 
                  value={formData.patientName} 
                  onChange={(e: any) => setFormData({...formData, patientName: e.target.value})} 
                  required 
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <Input 
                  className="custom-input-bg"
                  placeholder="Email do Paciente" 
                  type="email" 
                  value={formData.patientEmail} 
                  onChange={(e: any) => setFormData({...formData, patientEmail: e.target.value})} 
                  required 
                />
              </div>
              <div>
                <label className={labelClass}>Especialista</label>
                <Input 
                  className="custom-input-bg"
                  placeholder="Ex: Cardiologista" 
                  value={formData.specialist} 
                  onChange={(e: any) => setFormData({...formData, specialist: e.target.value})} 
                  required 
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Data</label>
                  <Input 
                    className="custom-input-bg dark:[color-scheme:dark]"
                    type="date" 
                    value={formData.date} 
                    onChange={(e: any) => setFormData({...formData, date: e.target.value})} 
                    required 
                  />
                </div>
                <div>
                  <label className={labelClass}>Hora</label>
                  <Input 
                    className="custom-input-bg dark:[color-scheme:dark]"
                    type="time" 
                    value={formData.hour} 
                    onChange={(e: any) => setFormData({...formData, hour: e.target.value})} 
                    required 
                  />
                </div>
              </div>
              
              <div>
                 <label className={labelClass}>Médico Responsável</label>
                 <Input 
                    className="custom-input-bg opacity-70 cursor-not-allowed"
                    placeholder="Nome do Médico"
                    defaultValue={initialData?.specialist || ""} 
                    readOnly 
                 />
              </div>
            </div>
          </div>

          <div className="bg-transparent pt-8 flex justify-end gap-3 border-t border-white/20 dark:border-blue-900/30 mt-6">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={onClose}
              className="text-white hover:bg-white/20 hover:text-white"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="bg-white text-[#00d5be] hover:bg-white/90 font-bold dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
            >
              <Save className="w-4 h-4 mr-2" /> 
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export function ConsultationsPage({ onNavigate, onLogout }: any) {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  // ALTERAÇÃO AQUI: Mudado de 'all' para 'Agendada' para exibir apenas as agendadas por padrão
  const [activeFilter, setActiveFilter] = useState<string>('Agendada');
  const [isLoading, setIsLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState<any>(null);

  const fetchConsultations = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/appointments');
      const rawData = response.data || [];
      const now = new Date();

      const processedData = rawData.map((app: any) => {
        const appDateTime = new Date(`${app.date}T${app.hour || '00:00'}`);
        const currentStatus = (app.status || 'Agendada').toUpperCase();

        if (!isNaN(appDateTime.getTime()) && appDateTime < now) {
             if (!currentStatus.includes('CANCEL') && !currentStatus.includes('CONCLU')) {
                 return { ...app, status: 'Concluída' };
             }
        }
        return app;
      });

      processedData.sort((a: any, b: any) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      setConsultations(processedData);
    } catch (error) {
      console.error("Erro ao buscar consultas:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConsultations();
  }, [fetchConsultations]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "—";
    const parts = dateString.split('-'); 
    if(parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dateString;
  };

  const getStatusBadge = (consultation: Consultation) => {
    const rawStatus = consultation.status || "Agendada"; 
    const status = rawStatus.toUpperCase();

    if (status.includes('AGENDADA') || status.includes('SCHEDULED')) {
      return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">Agendada</Badge>;
    }
    if (status.includes('CANCEL')) {
      return <Badge className="bg-red-500 hover:bg-red-600 text-white">Cancelada</Badge>;
    }
    if (status.includes('CONCLU') || status.includes('COMPLETED')) {
      return <Badge className="bg-green-500 hover:bg-green-600 text-white">Concluída</Badge>;
    }
    
    return <Badge variant="outline">{rawStatus}</Badge>;
  };

  const handleCancelConsultation = async (id: string) => {
    if (!confirm("Deseja realmente cancelar esta consulta?")) return;
    try {
      await api.delete(`/appointments/${id}`);
      fetchConsultations(); 
    } catch (error) {
      alert("Erro ao cancelar consulta.");
    }
  };

  const handleSaveAppointment = async (data: any) => {
    try {
      if (editingApp) {
        await api.put(`/appointments/${editingApp.id}`, { ...editingApp, ...data });
      } else {
        await api.post('/appointments', { ...data, status: 'Agendada' });
      }
      setIsModalOpen(false);
      fetchConsultations();
    } catch (e) {
      alert("Erro ao salvar consulta.");
    }
  };

  const filteredConsultations = activeFilter === 'all' 
    ? consultations 
    : consultations.filter(c => {
        const s = (c.status || 'Agendada').toUpperCase();
        if (activeFilter === 'Agendada') return s.includes('AGENDADA') || s.includes('SCHEDULED');
        if (activeFilter === 'Cancelada') return s.includes('CANCEL');
        if (activeFilter === 'Concluída') return s.includes('CONCLU') || s.includes('COMPLETED');
        return true;
    });

  const filterButtons = [
    { label: 'Todas', value: 'all' },
    { label: 'Agendadas', value: 'Agendada' },
    { label: 'Canceladas', value: 'Cancelada' },
    { label: 'Concluídas', value: 'Concluída' },
  ];

  return (
    <div className="flex h-full w-full overflow-hidden select-none">      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">        
        <main className="flex-1 overflow-auto p-6" role="main">
          <div className="w-full max-w-full space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Gerenciamento de Consultas
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <div className="flex gap-2">
                      {filterButtons.map((filter) => (
                        <Button
                          key={filter.value}
                          variant={activeFilter === filter.value ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setActiveFilter(filter.value)}
                        >
                          {filter.label}
                        </Button>
                      ))}
                      <Button size="sm" onClick={() => { setEditingApp(null); setIsModalOpen(true); }}>
                        <Plus className="h-4 w-4 mr-2" /> Nova
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto max-h-[600px]">
                  
                  {isLoading ? (
                    <div className="p-8 text-center text-muted-foreground">Carregando consultas...</div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[25%] text-left">Paciente</TableHead>
                          <TableHead className="w-[20%] text-left">Médico</TableHead>
                          <TableHead className="w-[15%] text-center">Especialidade</TableHead>
                          <TableHead className="w-[15%] text-center">Data e Hora</TableHead>
                          <TableHead className="w-[15%] text-center">Status</TableHead>
                          <TableHead className="w-[10%] text-center">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredConsultations.map((consultation) => (
                          <React.Fragment key={consultation.id}>
                            <TableRow>
                              <TableCell className="font-medium text-left">
                                {consultation.patientName || "—"}
                              </TableCell>
                              <TableCell className="text-left">{consultation.specialist || "—"}</TableCell>
                              
                              <TableCell className="text-muted-foreground text-center">
                                {consultation.specialty || "Clínico Geral"}
                              </TableCell>
                              <TableCell className="text-center">
                                <div className="flex flex-col items-center">
                                  <span>{formatDate(consultation.date)}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {consultation.hour || "—"}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell className="text-center">{getStatusBadge(consultation)}</TableCell>
                              
                              <TableCell className="text-center">
                                <div className="flex justify-center gap-2">
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={() => { setEditingApp(consultation); setIsModalOpen(true); }}
                                  >
                                    <Edit2 className="h-4 w-4 text-blue-500" />
                                  </Button>

                                  {!(consultation.status?.toUpperCase().includes('CANCEL')) && 
                                   !(consultation.status?.toUpperCase().includes('CONCLU')) && (
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleCancelConsultation(consultation.id)}
                                    >
                                      <X className="h-4 w-4 text-destructive" />
                                    </Button>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        ))}
                      </TableBody>
                    </Table>
                  )}

                  {!isLoading && filteredConsultations.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      Nenhuma consulta encontrada para este filtro.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
      
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveAppointment} 
        initialData={editingApp} 
      />
    </div>
  );
}