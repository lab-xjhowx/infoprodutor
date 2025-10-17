import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `${params.slug} - Blog Sua Marca Aqui`,
    description: 'Artigo completo com dicas e estratégias para acelerar sua carreira profissional.',
  };
}

export async function generateStaticParams() {
  return [
    { slug: '10-habilidades-essenciais-2024' },
    { slug: 'plano-estudos-eficiente' },
    { slug: 'transformacao-digital-guia' },
    { slug: 'erros-marketing-digital' },
    { slug: 'soft-skills-diferencial' },
    { slug: 'ia-educacao' },
    { slug: 'networking-estrategias' },
    { slug: 'gestao-tempo-empreendedores' },
    { slug: 'design-thinking-pratica' },
  ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const relatedPosts = [
    {
      title: 'Como se tornar um profissional de destaque',
      slug: 'profissional-destaque',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Tendências do mercado para 2024',
      slug: 'tendencias-mercado-2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Produtividade: técnicas avançadas',
      slug: 'produtividade-tecnicas',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div>
      <article>
        <div className="relative h-96 bg-gradient-to-br from-blue-600 to-blue-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center text-white">
                <Badge className="mb-4 bg-white text-blue-600">Carreira</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </h1>
                <div className="flex items-center justify-center gap-6 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>15 Mar 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>8 min de leitura</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Autor"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-semibold">Seu Nome Aqui</div>
                <div className="text-sm text-slate-600">Especialista em Educação Digital</div>
              </div>
              <div className="ml-auto flex gap-2">
                <Button size="icon" variant="ghost">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-slate-600 mb-8">
                Este é um artigo de exemplo demonstrando a estrutura de um post de blog.
                Em um cenário real, este conteúdo seria gerenciado através do WordPress CMS.
              </p>

              <h2>Introdução ao Tema</h2>
              <p>
                O mercado de trabalho está em constante evolução, e para se destacar é necessário
                desenvolver habilidades específicas que fazem a diferença. Neste artigo, vamos
                explorar as principais competências que você precisa dominar.
              </p>

              <h2>Principais Pontos a Considerar</h2>
              <p>
                Ao longo da sua jornada profissional, alguns elementos são fundamentais para
                garantir seu crescimento e sucesso sustentável:
              </p>

              <ul>
                <li>Aprendizado contínuo e atualização constante</li>
                <li>Desenvolvimento de soft skills complementares</li>
                <li>Networking estratégico e relacionamentos profissionais</li>
                <li>Especialização em áreas de alta demanda</li>
                <li>Adaptabilidade às mudanças do mercado</li>
              </ul>

              <h2>Estratégias Práticas</h2>
              <p>
                Para colocar em prática os conceitos apresentados, recomendamos seguir um
                plano estruturado que combine teoria e aplicação prática. Comece identificando
                suas principais lacunas de conhecimento.
              </p>

              <blockquote>
                &quot;O sucesso profissional não é acidente, é o resultado de dedicação,
                planejamento e execução consistente.&quot;
              </blockquote>

              <h2>Conclusão</h2>
              <p>
                Investir no seu desenvolvimento profissional é a decisão mais importante que
                você pode tomar para sua carreira. Não espere o momento perfeito, comece agora
                mesmo a construir o futuro que você deseja.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Gostou deste conteúdo?</h3>
                <p className="text-slate-700 mb-4">
                  Temos muito mais para você! Conheça nossos cursos e mentorias para
                  acelerar sua carreira profissional.
                </p>
                <Button>Explorar Cursos</Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Artigos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
