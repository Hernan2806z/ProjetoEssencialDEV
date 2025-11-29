import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group focus-ring"
      onClick={onClick}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Imagem do post */}
      <div className="aspect-video overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Conteúdo */}
      <CardContent className="p-6">
        {/* Categoria */}
        <Badge variant="secondary" className="mb-3">
          {post.category}
        </Badge>

        {/* Título */}
        <h3 className="mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Resumo */}
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.summary}
        </p>

        {/* Autor, data e tempo de leitura */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <span>{post.readTime}</span>
        </div>
      </CardContent>
    </Card>
  );
}
