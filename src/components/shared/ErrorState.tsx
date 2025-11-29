import { AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export function ErrorState({ 
  title = "Erro ao carregar dados", 
  description = "Ocorreu um erro ao carregar as informações. Por favor, tente novamente.",
  onRetry 
}: ErrorStateProps) {
  return (
    <Alert variant="destructive" className="my-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <span>{description}</span>
        {onRetry && (
          <Button variant="outline" size="sm" onClick={onRetry} className="ml-4">
            Tentar novamente
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}
