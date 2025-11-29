import { useState } from "react";
import { Bot, Plus, Edit, Save, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

interface Automation {
  id: string;
  title: string;
  description: string;
  isActive: boolean;
  category: string;
}

const mockAutomations: Automation[] = [
  {
    id: 'AUTO-001',
    title: 'Confirmação de Consulta',
    description: 'Envia mensagem automática 24h antes da consulta solicitando confirmação do paciente',
    isActive: true,
    category: 'Agendamento',
  },
  {
    id: 'AUTO-002',
    title: 'Boas-vindas Novo Paciente',
    description: 'Mensagem de boas-vindas enviada automaticamente ao primeiro contato do paciente',
    isActive: true,
    category: 'Atendimento',
  },
  {
    id: 'AUTO-003',
    title: 'Lembretes de Medicação',
    description: 'Notifica pacientes sobre horários de medicação conforme prescrição médica',
    isActive: false,
    category: 'Saúde',
  },
  {
    id: 'AUTO-004',
    title: 'Pesquisa de Satisfação',
    description: 'Envia formulário de satisfação 2 horas após o término da consulta',
    isActive: true,
    category: 'Feedback',
  },
  {
    id: 'AUTO-005',
    title: 'Cancelamento de Consulta',
    description: 'Passo a passo: 1) Acesse "Minhas Consultas" no menu principal, 2) Localize a consulta desejada, 3) Clique em "Cancelar", 4) Confirme o cancelamento',
    isActive: true,
    category: 'Agendamento',
  },
  {
    id: 'AUTO-006',
    title: 'Alteração de Horário',
    description: 'Passo a passo: 1) Vá em "Minhas Consultas", 2) Selecione a consulta, 3) Clique em "Alterar Horário", 4) Escolha um novo horário disponível, 5) Confirme a alteração',
    isActive: true,
    category: 'Agendamento',
  },
  {
    id: 'AUTO-007',
    title: 'Reagendar Consulta',
    description: 'Passo a passo: 1) Entre em "Minhas Consultas", 2) Encontre a consulta agendada, 3) Clique em "Reagendar", 4) Selecione uma nova data e horário, 5) Confirme o reagendamento',
    isActive: true,
    category: 'Agendamento',
  },
  {
    id: 'AUTO-008',
    title: 'FAQ Genérico',
    description: 'Responde perguntas frequentes sobre funcionamento da clínica e horários',
    isActive: true,
    category: 'Informações',
  },
];

interface ChatbotPageProps {
  onNavigate?: (page: string) => void;
  onLogout?: () => void;
}

export function ChatbotPage({ onNavigate, onLogout }: ChatbotPageProps) {
  const [activeMenuItem] = useState('chatbot');
  const [automations, setAutomations] = useState<Automation[]>(mockAutomations);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editForm, setEditForm] = useState<{ title: string; description: string; category: string }>({
    title: '',
    description: '',
    category: '',
  });

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const toggleAutomation = (id: string) => {
    setAutomations(automations.map(auto => 
      auto.id === id ? { ...auto, isActive: !auto.isActive } : auto
    ));
  };

  const startEditing = (automation: Automation) => {
    setEditingId(automation.id);
    setEditForm({
      title: automation.title,
      description: automation.description,
      category: automation.category,
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm({ title: '', description: '', category: '' });
  };

  const saveEditing = () => {
    if (editingId) {
      setAutomations(automations.map(auto =>
        auto.id === editingId
          ? { ...auto, title: editForm.title, description: editForm.description, category: editForm.category }
          : auto
      ));
      cancelEditing();
    }
  };

  const addNewAutomation = () => {
    if (editForm.title && editForm.description && editForm.category) {
      const newId = `AUTO-${String(automations.length + 1).padStart(3, '0')}`;
      const newAutomation: Automation = {
        id: newId,
        title: editForm.title,
        description: editForm.description,
        category: editForm.category,
        isActive: false,
      };
      setAutomations([...automations, newAutomation]);
      setShowAddDialog(false);
      setEditForm({ title: '', description: '', category: '' });
    }
  };

  return (
    <div className="flex h-full w-full overflow-hidden">      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        <main className="flex-1 overflow-auto p-6" role="main">
          <div className="w-full max-w-full space-y-6">
            <div className="flex justify-end">
              <Button className="gap-2" onClick={() => setShowAddDialog(true)}>
                <Plus className="h-4 w-4" />
                Adicionar Configuração
              </Button>
            </div>

            {/* Dialog para adicionar nova configuração */}
            {showAddDialog && (
              <Card className="w-full border-2 border-primary">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Nova Configuração</span>
                    <Button variant="ghost" size="icon" onClick={() => {
                      setShowAddDialog(false);
                      setEditForm({ title: '', description: '', category: '' });
                    }}>
                      <X className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription>
                    Adicione uma nova automação ao sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="new-title" className="text-sm">
                        Título
                      </label>
                      <Input
                        id="new-title"
                        value={editForm.title}
                        onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                        placeholder="Ex: Suporte ao Cliente"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="new-category" className="text-sm">
                        Categoria
                      </label>
                      <Input
                        id="new-category"
                        value={editForm.category}
                        onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                        placeholder="Ex: Atendimento"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="new-description" className="text-sm">
                        Descrição / Passo a Passo
                      </label>
                      <Textarea
                        id="new-description"
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                        placeholder="Descreva a automação ou forneça instruções passo a passo..."
                        rows={4}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={addNewAutomation} className="gap-2">
                        <Save className="h-4 w-4" />
                        Salvar
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setShowAddDialog(false);
                          setEditForm({ title: '', description: '', category: '' });
                        }}
                        className="gap-2"
                      >
                        <X className="h-4 w-4" />
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-dashed pointer-events-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    Configurar Funcionalidades
                  </CardTitle>
                  <CardDescription>
                    Defina novas capacidades e comportamentos do chatbot
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Configure respostas inteligentes, integrações e fluxos de conversação personalizados.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed pointer-events-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="h-5 w-5 text-primary" />
                    Criar e Editar Respostas
                  </CardTitle>
                  <CardDescription>
                    Gerencie as respostas automáticas do chatbot
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Adicione, edite ou remova respostas para garantir atendimento eficiente e personalizado.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Automações Existentes</CardTitle>
                <CardDescription>
                  Gerencie as automações ativas no sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {automations.map((automation) => (
                    <div
                      key={automation.id}
                      className="flex items-start gap-4 p-4 border rounded-lg bg-card transition-colors"
                    >
                      <div className="flex-1 space-y-3 min-w-0">
                        {editingId === automation.id ? (
                          // Modo de edição
                          <>
                            <div className="space-y-3">
                              <div className="space-y-2">
                                <label htmlFor={`title-${automation.id}`} className="text-sm">
                                  Título
                                </label>
                                <Input
                                  id={`title-${automation.id}`}
                                  value={editForm.title}
                                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                                  placeholder="Título da automação"
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor={`category-${automation.id}`} className="text-sm">
                                  Categoria
                                </label>
                                <Input
                                  id={`category-${automation.id}`}
                                  value={editForm.category}
                                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                                  placeholder="Categoria"
                                />
                              </div>
                              <div className="space-y-2">
                                <label htmlFor={`description-${automation.id}`} className="text-sm">
                                  Descrição
                                </label>
                                <Textarea
                                  id={`description-${automation.id}`}
                                  value={editForm.description}
                                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                  placeholder="Descrição da automação"
                                  rows={3}
                                />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 pt-2">
                              <Button
                                size="sm"
                                onClick={saveEditing}
                                className="gap-2"
                              >
                                <Save className="h-4 w-4" />
                                Salvar
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={cancelEditing}
                                className="gap-2"
                              >
                                <X className="h-4 w-4" />
                                Cancelar
                              </Button>
                            </div>
                          </>
                        ) : (
                          // Modo de visualização
                          <>
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="truncate">{automation.title}</h3>
                                  <Badge variant="secondary" className="text-xs shrink-0">
                                    {automation.category}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {automation.description}
                                </p>
                              </div>
                              <div className="flex items-center gap-3 shrink-0">
                                <Switch
                                  checked={automation.isActive}
                                  onCheckedChange={() => toggleAutomation(automation.id)}
                                  aria-label={`${automation.isActive ? 'Desativar' : 'Ativar'} ${automation.title}`}
                                />
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => startEditing(automation)}
                                  aria-label={`Editar ${automation.title}`}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>ID: {automation.id}</span>
                              <span>•</span>
                              <span className={automation.isActive ? 'text-[var(--color-success)]' : 'text-muted-foreground'}>
                                {automation.isActive ? 'Ativa' : 'Inativa'}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}