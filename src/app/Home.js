import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  DoorOpen,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
  Globe,
  Users,
} from "lucide-react";

const Instagram = (props) => <Globe {...props} />;
const Facebook = (props) => <Globe {...props} />;
const Linkedin = (props) => <Users {...props} />;

import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="relative">
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:pt-14 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                <Sparkles className="h-4 w-4 text-royalBlue" />
                Clínica Odontológica • OdontoStyle
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                Sorrisos que transformam vidas.
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Atendimento humanizado, tecnologia e agendamento simples. Na
                OdontoStyle, cada detalhe é pensado para você sorrir com
                confiança.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/agendar"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-royalBlue px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-royalBlue/90 focus:outline-none focus:ring-2 focus:ring-royalBlue/30"
                >
                  <ArrowRight className="h-4 w-4" />
                  Iniciar Agendamento
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  aria-label="Chamar no WhatsApp"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  WhatsApp
                </a>
              </div>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-3 text-slate-500">
                <a
                  href="#"
                  className="rounded-lg p-2 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-lg p-2 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-lg p-2 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <Clock className="h-6 w-6 text-royalBlue" />
                  <h3 className="mt-3 text-base font-bold">Agendamento 24h</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Marque seu horário no momento que for mais conveniente.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <Zap className="h-6 w-6 text-violet-600" />
                  <h3 className="mt-3 text-base font-bold">
                    Lembretes Automáticos
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Você recebe notificações para não esquecer do seu cuidado.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <DoorOpen className="h-6 w-6 text-emerald-600" />
                  <h3 className="mt-3 text-base font-bold">Fácil Acesso</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Localização prática e atendimento rápido na recepção.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-3 shadow-sm">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  {/* Foto placeholder: substitua pelo arquivo desejado */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.18),transparent_50%),linear-gradient(135deg,rgba(15,23,42,0.05),rgba(15,23,42,0))]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                  <div className="absolute left-6 top-6 rounded-2xl bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-royalBlue/10 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5 text-royalBlue" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Ambiente moderno</p>
                        <p className="text-xs text-slate-600">
                          Conforto para sua consulta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6">
                  <div className="relative rounded-2xl bg-white/90 px-4 py-3 backdrop-blur border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <p className="text-sm font-bold">10k+ Pacientes Felizes</p>
                    </div>
                    <p className="mt-1 text-xs text-slate-600">
                      Avaliações reais e atendimento de excelência.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-3xl bg-royalBlue/10 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-3xl bg-violet-600/10 blur-2xl" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <div className="rounded-3xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Equipe Médica & Recepção
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Um time dedicado ao seu cuidado, com acolhimento desde o primeiro
              contato até o pós-atendimento.
            </p>

            <a
              href="/dashboard"
              className="mt-7 inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              Acessar Sistema Administrativo
            </a>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-4 pb-10 text-center text-xs text-slate-500 lg:px-8">
          © {new Date().getFullYear()} OdontoStyle. Todos os direitos
          reservados.
        </footer>
      </main>
    </div>
  );
}

