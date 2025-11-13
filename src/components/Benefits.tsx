import { Card, CardContent } from "@/components/ui/card";
import { Target, BookOpen, TrendingUp, Shield, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Método Passo a Passo",
    description: "Sistema completo que te leva do zero ao primeiro investimento de forma clara e objetiva"
  },
  {
    icon: BookOpen,
    title: "Conteúdo Atualizado",
    description: "Aulas práticas e atualizadas com as melhores estratégias do mercado atual"
  },
  {
    icon: TrendingUp,
    title: "Resultados Reais",
    description: "Aprenda estratégias comprovadas que realmente funcionam no mercado brasileiro"
  },
  {
    icon: Shield,
    title: "Gestão de Risco",
    description: "Entenda como proteger seu capital e investir com segurança e consciência"
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Faça parte de uma comunidade de investidores que se apoiam mutuamente"
  },
  {
    icon: Zap,
    title: "Acesso Imediato",
    description: "Comece hoje mesmo, todo conteúdo disponível 24/7 para você aprender no seu ritmo"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por Que Escolher Este{" "}
            <span className="glow-text-green text-primary">Curso?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para começar a investir com confiança e segurança
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
