import { useState, useEffect } from "react";
import { Trash2, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { api } from "../services/api";

export function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get('/users');
        setUsers(response.data || []);
      } catch (err) {
        console.error("Erro ao carregar usuários", err);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  const filteredUsers = users.filter(user => 
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if(!confirm("Tem certeza que deseja excluir este usuário?")) return;
    try {
      await api.delete(`/users/${id}`);
      setUsers(users.filter(u => u.id !== id));
    } catch(e) {
      alert("Erro ao excluir usuário.");
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "—";
    try {
        return new Date(dateString).toLocaleDateString('pt-BR');
    } catch {
        return dateString;
    }
  };

  return (
    <div className="w-full max-w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Usuários Cadastrados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Buscar por nome ou email..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-10"
              />
            </div>
          </div>
          <div className="rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>

                  <TableHead className="text-left w-[200px]">Nome</TableHead>
                  <TableHead className="text-left">Email</TableHead>
                  <TableHead className="text-left">Perfil</TableHead>
                  <TableHead className="text-left">Data Cadastro</TableHead>
                  <TableHead className="text-left">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? <TableRow><TableCell colSpan={5} className="text-center p-8">Carregando...</TableCell></TableRow> :
                 filteredUsers.map((user) => (
                  <TableRow key={user.id}>

                    <TableCell className="text-left font-medium">
                        {user.name}
                    </TableCell>

                    <TableCell className="text-left text-muted-foreground">
                        {user.email}
                    </TableCell>

                    <TableCell className="text-left">
                        <Badge variant="secondary">{user.profile || 'User'}</Badge>
                    </TableCell>

                    <TableCell className="text-left">
                        {formatDate(user.createdAt)}
                    </TableCell>

                    <TableCell className="text-left">
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(user.id)}>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}