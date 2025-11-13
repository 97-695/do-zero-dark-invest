import { TrendingUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">Do Zero ao Investidor Milionário</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2024 Do Zero ao Investidor Milionário. Todos os direitos reservados.</p>
            <p className="mt-1">Transformando vidas através da educação financeira</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
