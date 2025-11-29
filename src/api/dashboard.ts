// src/api/dashboard.ts

export async function fetchDashboardData() {
  const res = await fetch("/api/dashboard"); // se for essa a rota certa...
  if (!res.ok) throw new Error("Erro ao buscar dados do dashboard");
  return res.json();
}
