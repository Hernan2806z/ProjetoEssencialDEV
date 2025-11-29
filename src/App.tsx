import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AdminDashboard } from "./pages/AdminDashboard";
import { UsersPage } from "./pages/UsersPage";
import { ChatbotPage } from "./pages/ChatbotPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ConsultationsPage } from "./pages/ConsultationsPage";
import { LoginPage } from "./pages/LoginPage";
import { Toaster } from "./components/ui/sonner";

// Componente para rotas protegidas (precisa estar logado)
function ProtectedRoute({ children, isLoggedIn }: { children: React.JSX.Element; isLoggedIn: boolean }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Entrar (depois do login)
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  // Sair
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <Toaster />
      <Routes>
        {/* Login page */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Admin páginas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AdminDashboard onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultas"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ConsultationsPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <UsersPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ChatbotPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/configuracoes"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SettingsPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* Redirecionamento padrão */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
