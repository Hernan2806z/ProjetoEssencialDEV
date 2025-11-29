import { Bot, User } from "lucide-react";
import { cn } from "../ui/utils";

export interface Message {
  id: string;
  sender: 'bot' | 'user';
  content: string;
  timestamp: string;
  quickReplies?: string[];
  links?: { text: string; url: string }[];
  list?: string[];
}

interface ChatBubbleProps {
  message: Message;
  onQuickReply?: (reply: string) => void;
}

export function ChatBubble({ message, onQuickReply }: ChatBubbleProps) {
  const isBot = message.sender === 'bot';

  return (
    <div className={cn("flex gap-3 mb-4", !isBot && "flex-row-reverse")}>
      <div className={cn(
        "p-2 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center",
        isBot ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
      )}>
        {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </div>
      
      <div className={cn("flex flex-col gap-2 max-w-[70%]", !isBot && "items-end")}>
        <div className={cn(
          "rounded-lg px-4 py-3 break-words",
          isBot ? "bg-muted" : "bg-primary text-primary-foreground"
        )}>
          <div className="whitespace-pre-wrap">{message.content}</div>
          
          {message.links && message.links.length > 0 && (
            <div className="mt-2 space-y-1">
              {message.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className={cn(
                    "block text-sm underline underline-offset-2 hover:no-underline focus-ring rounded",
                    isBot ? "text-accent hover:text-accent/80" : "opacity-90 hover:opacity-100"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
          
          {message.list && message.list.length > 0 && (
            <ul className="mt-2 space-y-1 ml-4 list-disc">
              {message.list.map((item, idx) => (
                <li key={idx} className="text-sm">{item}</li>
              ))}
            </ul>
          )}
        </div>
        
        {message.quickReplies && message.quickReplies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {message.quickReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => onQuickReply?.(reply)}
                className="px-3 py-1.5 text-sm border border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all focus-ring"
              >
                {reply}
              </button>
            ))}
          </div>
        )}
        
        <span className="text-xs text-muted-foreground px-1">{message.timestamp}</span>
      </div>
    </div>
  );
}
