import { ArrowRight } from "lucide-react";

export default function Navbar() {
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

        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            Área Restrita
          </a>

          <a
            href="/agendar"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-royalBlue px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-royalBlue/90 focus:outline-none focus:ring-2 focus:ring-royalBlue/30"
          >
            Agendar Agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

