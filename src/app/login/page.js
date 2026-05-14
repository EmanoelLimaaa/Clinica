'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; 
import { 
  Stethoscope, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertTriangle, 
  ArrowLeft,
  Loader2, 
} from "lucide-react";

const inputContainerClasses = "relative group";
const inputIconClasses = "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors";
const inputBaseClasses = "w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 focus:outline-none text-slate-900 transition-all disabled:opacity-60";
const buttonBaseClasses = "w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]";
const buttonStatesClasses = "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed";
const warningBoxClasses = "bg-amber-50 border-l-4 border-amber-400 p-4 rounded-xl flex items-start gap-3 mt-2";
const linkClasses = "text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline transition-all";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de fluxo de login, depois vai ser substituído pela lógica real
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Navegação para a rota de dashboard
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-[400px]">
        
        {/* Branding e Header */}
        <header className="flex flex-col items-center mb-10 text-center">
          <div className="bg-blue-50 rounded-2xl p-4 shadow-sm border border-blue-100 mb-4">
            <Stethoscope className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Portal Administrativo
          </h1>
          <p className="mt-2 text-slate-500 text-sm font-medium">
            Bem-vindo ao sistema de gestão OdontoStyle
          </p>
        </header>

        {/* Card de Autenticação */}
        <div className="rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 bg-white border border-slate-100">
          
          {/* Header Visual do Card */}
          <div className="bg-slate-900 p-8 text-white">
            <h2 className="text-lg font-semibold tracking-wide text-white">Identifique-se</h2>
            <p className="text-xs text-slate-400 mt-1">
              Acesse sua conta para gerenciar agendamentos e pacientes.
            </p>
          </div>

          {/* Formulário de Login */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                E-mail Corporativo
              </label>
              <div className={inputContainerClasses}>
                <Mail className={inputIconClasses} />
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="nome@odontostyle.com"
                  className={inputBaseClasses}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Senha
                </label>
                <a href="#" className={linkClasses}>Esqueceu a senha?</a>
              </div>
              <div className={inputContainerClasses}>
                <Lock className={inputIconClasses} />
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="••••••••"
                  className={inputBaseClasses}
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`${buttonBaseClasses} ${buttonStatesClasses}`}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Autenticando...
                </span>
              ) : (
                <>
                  Entrar no Sistema
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Aviso de sSegurança */}
            <div className={warningBoxClasses}>
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
              <p className="text-[11px] leading-relaxed text-amber-900 font-medium">
                Acesso restrito a usuários autorizados. Todas as tentativas de login são monitoradas e registradas.
              </p>
            </div>
          </form>
        </div>

        {/* Navegação Secundária */}
        <footer className="mt-8 text-center">
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar ao site público
          </a>
        </footer>
      </div>
    </main>
  );
}