import { useState, KeyboardEvent } from "react";
import { Send, Paperclip } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface ChatComposerProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export function ChatComposer({ onSend, disabled }: ChatComposerProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-card p-4">
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Anexar arquivo"
          disabled={disabled}
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem... (Enter para enviar, Shift+Enter para nova linha)"
          className="resize-none min-h-[60px] max-h-32"
          disabled={disabled}
          aria-label="Mensagem"
        />
        
        <Button
          onClick={handleSend}
          disabled={!message.trim() || disabled}
          size="icon"
          aria-label="Enviar mensagem"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex gap-2 mt-2 flex-wrap">
        <button
          onClick={() => onSend('Agendar consulta')}
          disabled={disabled}
          className="px-3 py-1.5 text-sm border rounded-full hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        >
          Agendar consulta
        </button>
        <button
          onClick={() => onSend('Remarcar consulta')}
          disabled={disabled}
          className="px-3 py-1.5 text-sm border rounded-full hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        >
          Remarcar consulta
        </button>
        <button
          onClick={() => onSend('Cancelar consulta')}
          disabled={disabled}
          className="px-3 py-1.5 text-sm border rounded-full hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        >
          Cancelar consulta
        </button>
      </div>
    </div>
  );
}
