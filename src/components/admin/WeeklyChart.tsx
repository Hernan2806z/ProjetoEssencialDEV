import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { day: 'Seg', Realizada: 12, 'No-show': 3, Cancelada: 2 },
  { day: 'Ter', Realizada: 15, 'No-show': 2, Cancelada: 1 },
  { day: 'Qua', Realizada: 18, 'No-show': 4, Cancelada: 3 },
  { day: 'Qui', Realizada: 14, 'No-show': 1, Cancelada: 2 },
  { day: 'Sex', Realizada: 20, 'No-show': 5, Cancelada: 1 },
  { day: 'Sáb', Realizada: 8, 'No-show': 2, Cancelada: 1 },
  { day: 'Dom', Realizada: 5, 'No-show': 1, Cancelada: 0 },
];

export function WeeklyChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consultas por Status - Última Semana</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="day" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="Realizada" 
              stroke="var(--color-status-realizada)" 
              strokeWidth={2}
              dot={{ fill: 'var(--color-status-realizada)' }}
            />
            <Line 
              type="monotone" 
              dataKey="No-show" 
              stroke="var(--color-status-no-show)" 
              strokeWidth={2}
              dot={{ fill: 'var(--color-status-no-show)' }}
            />
            <Line 
              type="monotone" 
              dataKey="Cancelada" 
              stroke="var(--color-status-cancelada)" 
              strokeWidth={2}
              dot={{ fill: 'var(--color-status-cancelada)' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
