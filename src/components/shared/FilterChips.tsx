import { X } from "lucide-react";
import { Badge } from "../ui/badge";

interface FilterChip {
  id: string;
  label: string;
  value: string;
}

interface FilterChipsProps {
  filters: FilterChip[];
  onRemove: (id: string) => void;
  onClearAll?: () => void;
}

export function FilterChips({ filters, onRemove, onClearAll }: FilterChipsProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-muted-foreground">Filtros ativos:</span>
      {filters.map((filter) => (
        <Badge key={filter.id} variant="secondary" className="gap-1 pr-1">
          {filter.label}: {filter.value}
          <button
            onClick={() => onRemove(filter.id)}
            className="ml-1 rounded-full hover:bg-muted-foreground/20 p-0.5 focus-ring"
            aria-label={`Remover filtro ${filter.label}`}
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      {onClearAll && filters.length > 1 && (
        <button
          onClick={onClearAll}
          className="text-sm text-accent hover:text-accent/90 underline underline-offset-2 focus-ring"
        >
          Limpar todos
        </button>
      )}
    </div>
  );
}
