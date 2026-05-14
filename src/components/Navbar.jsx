import { ArrowRight, User2 } from "lucide-react"; 

export default function Navbar() {
  const baseButtonClasses = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2";
  const primaryButtonClasses = `${baseButtonClasses} bg-royalBlue text-white shadow-sm hover:bg-royalBlue/90 focus:ring-royalBlue/30`;
  const secondaryButtonClasses = `${baseButtonClasses} border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-200`;
  const iconButtonClasses = "rounded-full p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-royalBlue/10">
            <span className="text-lg font-extrabold text-royalBlue">O</span>
          </div>
          <div>
            <p className="text-sm font-bold leading-tight">OdontoStyle</p>
            <p className="text-xs text-slate-500">Odontologia moderna</p>
          </div>
        </div>

        {/* Agrupamento para pc: Área Restrita que é o texto e Agendar Agora */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className={secondaryButtonClasses}
          >
            Área Restrita
          </a>
          <a
            href="/agendar"
            className={primaryButtonClasses}
          >
            Agendar Agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Agrupamento para celular: Ícone de Perfil e Agendar Agora */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="/login"
            className={iconButtonClasses}
            aria-label="Login"
          >
            <User2 className="h-5 w-5" />
          </a>
          <a
            href="/agendar"
            className={primaryButtonClasses}
          >
            Agendar Agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}