import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Award, Infinity } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="container relative z-10">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm border-primary/20 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative p-8 md:p-12 space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Comece Sua Jornada{" "}
                <span className="glow-text-green text-primary">
                  Hoje Mesmo
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Junte-se a milhares de pessoas que já deram o primeiro passo rumo à independência financeira
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-left">
                <div className="text-sm text-muted-foreground line-through">
                  De R$ 997,00
                </div>
                <div className="text-4xl font-bold glow-text-green">
                  R$ 497,00
                </div>
                <div className="text-sm text-muted-foreground">
                  ou 12x de R$ 49,90
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              variant="hero" 
              className="text-xl px-12 py-8 h-auto"
              asChild
            >
              <a href="https://go.tribopay.com.br/0k1te" target="_blank" rel="noopener noreferrer">
                Quero Começar Agora
                <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-sm text-muted-foreground">Acesso Imediato</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Infinity className="w-6 h-6 text-primary" />
                <span className="text-sm text-muted-foreground">Acesso Vitalício</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-sm text-muted-foreground">Certificado</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              🔒 Pagamento 100% Seguro | Garantia de 7 dias
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
