import React, { useState } from "react";
import { Plus, ChevronUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { doctors, getRandomDoctor } from "../../data/doctors";

type ConsultationStatus = 'Agendada' | 'Cancelada' | 'Concluída';

interface Consultation {
  id: string;
  patient: string;
  doctorName: string;
  doctorSpecialties: string[];
  date: string;
  time: string;
  status: ConsultationStatus;
}

const generateMockData = (): Consultation[] => {
  const patients = ['Ana Silva', 'Carlos Santos', 'Maria Oliveira', 'João Costa', 'Fernanda Lima', 'Pedro Souza', 'Juliana Alves', 'Ricardo Mendes', 'Patricia Rocha', 'Lucas Ferreira'];
  const statuses: ConsultationStatus[] = ['Agendada', 'Cancelada', 'Concluída'];
  
  return Array.from({ length: 50 }, (_, i) => {
    const doctor = getRandomDoctor();
    return {
      id: `CONS-${String(i + 1).padStart(4, '0')}`,
      patient: patients[Math.floor(Math.random() * patients.length)],
      doctorName: doctor.fullName,
      doctorSpecialties: doctor.specialties,
      date: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}/10/2025`,
      time: `${String(Math.floor(Math.random() * 12) + 8).padStart(2, '0')}:${['00', '30'][Math.floor(Math.random() * 2)]}`,
      status: i < 10 ? 'Agendada' : statuses[Math.floor(Math.random() * statuses.length)],
    };
  });
};

const getStatusVariant = (status: ConsultationStatus): "default" | "secondary" | "destructive" | "outline" => {
  switch (status) {
    case 'Concluída': return 'default';
    case 'Agendada': return 'secondary';
    case 'Cancelada': return 'destructive';
    default: return 'outline';
  }
};

const getStatusColor = (status: ConsultationStatus): string => {
  switch (status) {
    case 'Agendada': return 'bg-[var(--color-status-em-espera)] text-white hover:bg-[var(--color-status-em-espera)]';
    case 'Cancelada': return 'bg-[var(--color-status-cancelada)] text-white hover:bg-[var(--color-status-cancelada)]';
    case 'Concluída': return 'bg-[var(--color-status-realizada)] text-white hover:bg-[var(--color-status-realizada)]';
    default: return '';
  }
};

export function ConsultationTable() {
  const [consultations] = useState<Consultation[]>(generateMockData());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Próximas Consultas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-auto max-h-96">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Paciente</TableHead>
                <TableHead>Médico</TableHead>
                <TableHead>Data e Hora</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {consultations.slice(0, 15).map((consultation) => (
                <React.Fragment key={consultation.id}>
                  <TableRow>
                    <TableCell>{consultation.patient}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{consultation.doctorName}</span>
                        <span className="text-xs text-muted-foreground">
                          {consultation.doctorSpecialties.join(' • ')}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{consultation.date}</span>
                        <span className="text-xs text-muted-foreground">{consultation.time}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(consultation.status)}>
                        {consultation.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleToggleExpand(consultation.id)}
                        aria-label={`${expandedId === consultation.id ? 'Ocultar' : 'Visualizar'} detalhes da consulta de ${consultation.patient}`}
                      >
                        {expandedId === consultation.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                  {expandedId === consultation.id && (
                    <TableRow>
                      <TableCell colSpan={6} className="bg-muted/50">
                        <div className="p-4 space-y-4">
                          <h4 className="text-sm">Informações Detalhadas</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">ID da Consulta</p>
                              <p className="text-sm">{consultation.id}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Paciente</p>
                              <p className="text-sm">{consultation.patient}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Médico</p>
                              <p className="text-sm">{consultation.doctorName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Especialidades</p>
                              <p className="text-sm">{consultation.doctorSpecialties.join(' • ')}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Data</p>
                              <p className="text-sm">{consultation.date}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Horário</p>
                              <p className="text-sm">{consultation.time}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Status</p>
                              <Badge className={getStatusColor(consultation.status)}>
                                {consultation.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
