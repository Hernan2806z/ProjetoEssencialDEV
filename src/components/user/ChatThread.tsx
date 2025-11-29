import { MessageSquare } from "lucide-react";
import { Badge } from "../ui/badge";
import { cn } from "../ui/utils";

export interface Thread {
  id: string;
  title: string;
  preview: string;
  timestamp: string;
  unread?: boolean;
  intent: string;
  confidence: 'alta' | 'média' | 'baixa';
}

interface ChatThreadProps {
  thread: Thread;
  isActive: boolean;
  onClick: () => void;
}

export function ChatThread({ thread, isActive, onClick }: ChatThreadProps) {
  const confidenceColor = {
    alta: 'bg-[var(--color-success)]',
    média: 'bg-[var(--color-warning)]',
    baixa: 'bg-[var(--color-destructive)]',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-4 border-b nav-hover transition-colors focus-ring",
        isActive && "bg-primary/10 border-l-4 border-l-primary"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
          <MessageSquare className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className="truncate">{thread.title}</h4>
            {thread.unread && (
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground truncate mb-2">{thread.preview}</p>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {thread.intent}
            </Badge>
            <div className={cn("h-1.5 w-1.5 rounded-full", confidenceColor[thread.confidence])} title={`Confiança: ${thread.confidence}`} />
            <span className="text-xs text-muted-foreground">{thread.timestamp}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
