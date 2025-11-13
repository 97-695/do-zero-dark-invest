import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const modules = [
  {
    title: "Módulo 1: Fundamentos",
    topics: [
      "Entendendo o mercado financeiro",
      "Perfil de investidor e objetivos",
      "Conceitos básicos de ações e renda fixa",
      "Como funciona a bolsa de valores"
    ]
  },
  {
    title: "Módulo 2: Primeiros Passos",
    topics: [
      "Abrindo sua conta na corretora",
      "Como analisar uma ação",
      "Diversificação de carteira",
      "Seu primeiro investimento"
    ]
  },
  {
    title: "Módulo 3: Estratégias",
    topics: [
      "Análise fundamentalista básica",
      "Análise técnica introdutória",
      "Estratégias de longo prazo",
      "Rebalanceamento de carteira"
    ]
  },
  {
    title: "Módulo 4: Crescimento",
    topics: [
      "Reinvestimento de dividendos",
      "Proteção e gestão de risco",
      "Impostos e declarações",
      "Planejamento de independência financeira"
    ]
  }
];

export const Modules = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Conteúdo{" "}
            <span className="glow-text-green text-primary">Programático</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um caminho estruturado do básico ao avançado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </span>
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
