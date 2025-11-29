import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  tooltip?: string;
}

export function KPICard({ title, value, icon: Icon, tooltip }: KPICardProps) {
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h4 className="text-muted-foreground">{title}</h4>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
            </TooltipTrigger>
            {tooltip && <TooltipContent><p>{tooltip}</p></TooltipContent>}
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl">{value}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
