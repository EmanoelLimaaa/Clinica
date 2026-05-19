'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { CalendarDays, User, Phone, ChevronDown, ChevronRight, X, CalendarDays as CalendarIcon } from 'lucide-react';

export default function NovoAgendamentoModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);

  const [paciente, setPaciente] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [especialista, setEspecialista] = useState('all');
  const [servico, setServico] = useState('');

  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const horarios = useMemo(() => ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00'], []);

  const resetForm = () => {
    setStep(1);
    setPaciente('');
    setWhatsapp('');
    setEspecialista('all');
    setServico('');
    setData('');
    setHorario('');
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div
        className="relative max-w-md w-full rounded-3xl bg-white shadow-2xl shadow-black/30"
        onClick={stop}
      >
        {/* Header */}
        <div className="bg-[#0f172a] rounded-t-3xl px-6 py-5 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
              <CalendarDays size={22} />
            </div>
            <div>
              <p className="text-white font-bold text-lg">Novo Agendamento</p>
              <p className="text-slate-300 text-xs font-semibold mt-0.5">
                Preencha os dados para reservar um horário
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white transition-colors p-1 -mt-1"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-7">
          {step === 1 ? (
            <div className="animate-in fade-in duration-150">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                Paciente
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <User size={16} />
                </div>
                <input
                  value={paciente}
                  onChange={(e) => setPaciente(e.target.value)}
                  placeholder="Nome do Paciente"
                  className="w-full bg-[#f8fafc] rounded-xl border border-slate-100 px-10 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                    WhatsApp
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <Phone size={16} />
                    </div>
                    <input
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="00 00000-0000"
                      className="w-full bg-[#f8fafc] rounded-xl border border-slate-100 px-10 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                    Especialista
                  </label>
                  <div className="relative">
                    <select
                      value={especialista}
                      onChange={(e) => setEspecialista(e.target.value)}
                      className="w-full bg-[#f8fafc] rounded-xl border border-slate-100 px-4 py-3 text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="all">all</option>
                      <option value="ricardo">Dr. Ricardo Silva</option>
                      <option value="ana">Dra. Ana Mendes</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                  Serviço/Tratamento
                </label>
                <div className="relative">
                  <select
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                    className="w-full bg-[#f8fafc] rounded-xl border border-slate-100 px-4 py-3 text-sm font-bold text-slate-900 outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="consulta">Consulta de rotina</option>
                    <option value="ortodontia">Ortodontia</option>
                    <option value="clareamento">Clareamento</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in duration-150">
              {/* Linha Superior (DATA + HORa) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                    Data
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <CalendarIcon size={16} />
                    </div>
                    <input
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                      placeholder="18 de maio"
                      className="w-full bg-[#f8fafc] rounded-xl border border-slate-100 px-10 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                    Horário
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {horarios.map((h) => {
                      const active = h === horario;
                      return (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setHorario(h)}
                          className={
                            active
                              ? 'bg-blue-600 text-white font-bold rounded-xl px-2 py-2 shadow-sm'
                              : 'bg-white border border-slate-100 text-slate-700 font-bold rounded-xl px-2 py-2 hover:bg-slate-50'
                          }
                        >
                          {h}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Card de Resumo */}
              <div className="mt-5 bg-slate-50/60 border border-slate-100 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <User className="text-blue-600" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-extrabold text-slate-900 truncate">{paciente || '—'}</p>
                    <p className="text-slate-500 text-sm font-bold truncate">{whatsapp || '—'}</p>
                  </div>
                </div>

                <div className="my-3 h-px bg-slate-200/60" />

                <div className="space-y-1">
                  <p className="text-[11px] font-black text-slate-700">
                    {servico === 'consulta' ? '🩺 Consulta de Rotina' : servico === 'ortodontia' ? '🦷 Ortodontia' : servico === 'clareamento' ? '✨ Clareamento' : '🩺 Serviço'}
                  </p>
                  <p className="text-[11px] font-black text-slate-700">
                    🕒 {horario || '09:00'} - 40min
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step === 1 ? (
          <div className="px-7 pb-7">
            <button
              type="button"
              className="bg-[#7096ff] hover:bg-[#5f84f3] text-white rounded-xl font-bold px-5 py-3 w-full transition-colors flex items-center justify-between gap-4"
              onClick={() => setStep(2)}
            >
              <span className="text-sm">Próximo Passo</span>
              <ChevronRight size={18} />
            </button>
          </div>
        ) : (
          <div className="px-7 pb-7">
            <div className="flex justify-between items-center gap-4">
              <button
                type="button"
                className="text-slate-500 font-bold text-sm"
                onClick={() => setStep(1)}
              >
                Voltar
              </button>

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold px-5 py-3 w-full transition-colors"
                onClick={() => {
                  // mock finalização
                  onClose?.();
                }}
              >
                Finalizar Agendamento
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

