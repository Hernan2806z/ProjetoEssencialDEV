import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import logo from "../assets/logo.png";
import { api } from "../services/api";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post("/auth/sign-in", { 
        email, 
        password 
      });
      const token = response.data.user?.accessToken;

      if (token) {
        localStorage.setItem("auth_token", token);
        localStorage.setItem("user_data", JSON.stringify(response.data.user));
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        onLogin();
      } else {
        setError("Erro: Login realizado, mas token não encontrado na resposta.");
        console.error("Estrutura inesperada:", response.data);
      }

    } catch (err: any) {
      console.error("Erro no login:", err);
      const mensagem = err.response?.data?.message || "Falha ao realizar login. Verifique suas credenciais.";
      setError(mensagem);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex">

      <div className="w-1/2 flex flex-col items-center justify-center px-16 relative"
           style={{
            background: isDarkMode
              ? "linear-gradient(135deg, #0e2153 0%, #2c0753 100%)"
              : "linear-gradient(135deg, #43e8f2 0%, #5977f1 100%)",
           }}>
        <div className="absolute top-8 left-8">
          <img src={logo} alt="EssencialDEV" className="h-14" />
        </div>
        <div className="mt-16 flex items-center justify-center">
          <img
            id="logo"
            className="h-full w-full object-contain max-h-[450px] max-w-[450px] transition-opacity ease-in-out duration-700 opacity-100"
            alt="Essencial Dev Logo"
            src={isDarkMode
              ? "https://res.cloudinary.com/essencialdev-cloudinary/image/upload/g_auto/f_auto/v1761218862/sign-in-dark_vmpcxl.png"
              : "https://res.cloudinary.com/essencialdev-cloudinary/image/upload/g_auto/f_auto/v1761218862/sign-in_eyfjvd.png"
            }
          />
        </div>
      </div>

      <div className="w-1/2 bg-background dark:bg-[#1a1a1a] flex flex-col items-center justify-center px-16 relative">
        <div className="w-full max-w-md">
          <div className="mb-12">
            <p className="text-foreground dark:text-white text-3xl mb-3">
              Bem vindo(a) de volta!!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-[#425466] dark:text-gray-300">E-Mail</label>
              <Input
                id="email"
                type="email"
                placeholder="Insira seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-[#edf2f7] dark:bg-[#2d2d2d] border-2 border-[#b5b5bd] dark:border-gray-600 text-foreground dark:text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-[#425466] dark:text-gray-300">Senha</label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Insira sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 bg-[#edf2f7] dark:bg-[#2d2d2d] border-2 border-[#b5b5bd] dark:border-gray-600 text-foreground dark:text-white pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-[#a3b3ff] hover:bg-[#8fa3ff] text-white rounded-full disabled:opacity-70"
            >
              {isLoading ? "ENTRANDO..." : "ENTRAR"}
            </Button>

            <p className="text-center text-sm text-[#718096] dark:text-gray-400">
              Não possui conta? <a href="#" className="text-[#00d5be] hover:underline">Faça o seu Cadastro</a>
            </p>
          </form>
        </div>

        <div className="w-full flex justify-center items-center mt-8 gap-3">
          <span className="text-sm text-[#8c8c8c] dark:text-gray-400">Modo Escuro</span>
          <Switch
            checked={isDarkMode}
            onCheckedChange={setIsDarkMode}
            className="data-[state=checked]:bg-[#00d5be]"
          />
        </div>
      </div>
    </div>
  );
}