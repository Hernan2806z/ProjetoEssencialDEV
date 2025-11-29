import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { BlogPost } from "./BlogCard";
import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  relatedPosts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
}

export function BlogPostView({ post, onBack, relatedPosts, onPostClick }: BlogPostViewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li><button onClick={onBack} className="hover:text-foreground">Blog</button></li>
          <li>/</li>
          <li>{post.category}</li>
          <li>/</li>
          <li className="text-foreground">{post.title}</li>
        </ol>
      </nav>

      <article>
        <header className="mb-8">
          <div className="mb-4">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
          
          <h1 className="mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-12" style={{ maxWidth: '70ch' }}>
          <p className="lead">{post.summary}</p>
          <h2 id="introducao">Introdução</h2>
          <p>
            A telemedicina revolucionou a forma como acessamos cuidados de saúde. Com a evolução da tecnologia,
            consultas médicas à distância se tornaram cada vez mais eficientes e acessíveis, permitindo que
            pacientes recebam atendimento de qualidade sem sair de casa.
          </p>
          <h2 id="beneficios">Benefícios da Telemedicina</h2>
          <p>Entre as principais vantagens da telemedicina, destacam-se:</p>
          <ul>
            <li>Acesso facilitado a especialistas, independentemente da localização geográfica</li>
            <li>Redução de custos com deslocamento e tempo de espera</li>
            <li>Maior comodidade para pacientes com mobilidade reduzida</li>
            <li>Acompanhamento contínuo de condições crônicas</li>
          </ul>
          <blockquote>
            "A telemedicina não apenas facilita o acesso aos cuidados de saúde, mas também promove 
            uma abordagem mais preventiva e personalizada ao bem-estar do paciente."
          </blockquote>
          <h2 id="como-funciona">Como Funciona</h2>
          <p>
            O processo de uma consulta por telemedicina é simples e seguro. Após o agendamento,
            o paciente recebe um link para acessar a videochamada no horário marcado. Durante a
            consulta, o médico pode avaliar sintomas, prescrever medicamentos e solicitar exames
            quando necessário.
          </p>
          <h2 id="conclusao">Conclusão</h2>
          <p>
            A telemedicina veio para ficar e continuará evoluindo. Com investimentos em tecnologia
            e capacitação profissional, podemos esperar um futuro onde os cuidados de saúde sejam
            cada vez mais acessíveis, eficientes e centrados no paciente.
          </p>
        </div>

        <Separator className="my-12" />

        <section aria-labelledby="author-heading">
          <h2 id="author-heading" className="mb-4">Sobre o Autor</h2>
          <Card>
            <CardContent className="flex gap-4 items-start p-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3>{post.author}</h3>
                <p className="text-muted-foreground mt-1">
                  Especialista em saúde digital e telemedicina, com mais de 10 anos de experiência
                  na área. Dedicado a tornar os cuidados de saúde mais acessíveis através da tecnologia.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        <section aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-6">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.slice(0, 3).map((relatedPost) => (
              <Card
                key={relatedPost.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onPostClick(relatedPost)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">
                    {relatedPost.category}
                  </Badge>
                  <h4 className="line-clamp-2">{relatedPost.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="bg-muted p-8 rounded-lg">
          <h3 className="mb-2">Receba novidades sobre saúde</h3>
          <p className="text-muted-foreground mb-4">
            Inscreva-se em nossa newsletter e receba artigos semanais sobre saúde e bem-estar.
          </p>
          <div className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-2 rounded-lg border bg-background"
              aria-label="E-mail para newsletter"
            />
            <Button>Inscrever</Button>
          </div>
        </section>
      </article>

      <aside className="fixed right-8 top-32 w-64 hidden xl:block">
        <div className="border rounded-lg p-4 bg-card sticky top-32">
          <h4 className="mb-3">Neste Artigo</h4>
          <nav aria-label="Índice do artigo">
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#introducao" className="text-muted-foreground hover:text-foreground">
                  Introdução
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-muted-foreground hover:text-foreground">
                  Benefícios da Telemedicina
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-foreground">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#conclusao" className="text-muted-foreground hover:text-foreground">
                  Conclusão
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
