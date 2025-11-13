import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Transforme sua relação com o dinheiro</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Do Zero ao{" "}
            <span className="glow-text-green bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Investidor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aprenda a investir na bolsa de valores do absoluto zero, mesmo que você nunca tenha investido um único real antes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 h-auto" asChild>
              <a href="https://go.tribopay.com.br/0k1te" target="_blank" rel="noopener noreferrer">
                Quero Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary glow-text-green">+10.000</span>
              <span className="text-muted-foreground">Alunos Ativos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary glow-text-green">4.9/5</span>
              <span className="text-muted-foreground">Avaliação</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-accent glow-text-gold">100%</span>
              <span className="text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
