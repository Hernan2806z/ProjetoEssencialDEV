// src/api/users.ts
export async function fetchUsers() {
  const res = await fetch("https://essencial-server.vercel.app/users");
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json();
}
