'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NovoAgendamentoModal from '../../components/NovoAgendamentoModal.jsx';
import { 
  LayoutDashboard, Calendar, Users, Briefcase, Settings, 
  LogOut, CheckCircle2, Clock, XCircle, TrendingUp,
  ChevronDown, LayoutGrid, Menu, X
} from 'lucide-react';


export default function Dashboard() {
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNovoAgendamentoOpen, setIsNovoAgendamentoOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out p-4
        lg:translate-x-0 lg:static lg:flex lg:flex-col h-screen
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between px-2 mb-8 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
            <span className="font-bold text-xl tracking-tight">DenteCloud</span>
          </div>
          <button className="lg:hidden p-2 text-slate-400" onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
          <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active onClick={() => router.push('/dashboard')} />
          <NavItem icon={<Calendar size={20} />} label="Agenda" onClick={() => router.push('/dashboard/agenda')} />
          <NavItem icon={<Users size={20} />} label="Pacientes" onClick={() => router.push('/dashboard/pacientes')} />
          <NavItem icon={<Briefcase size={20} />} label="Serviços" onClick={() => router.push('/dashboard/servicos')} />
          <NavItem icon={<Settings size={20} />} label="Configurações" onClick={() => router.push('/dashboard/configuracoes')} />
        </nav>


        <div className="mt-auto pt-6 space-y-4 shrink-0">
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="flex items-center gap-2 px-2 text-slate-400 hover:text-slate-800 transition-colors text-sm font-bold w-full"
          >
            <LogOut size={18} className="rotate-180" /> Sair do Sistema
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-x-hidden overflow-y-auto h-screen">
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 lg:px-10 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="font-bold text-lg lg:text-xl">Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 lg:gap-3 border border-slate-100 rounded-full pl-1.5 lg:pl-2 pr-3 lg:pr-4 py-1.5 bg-[#f8fafc] hover:bg-slate-100 transition-all"
              >
                <div className="flex -space-x-2 shrink-0">
                  <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[8px] text-white font-black">RS</div>
                  <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-black">AM</div>
                </div>
                <div className="hidden sm:block text-left leading-none">
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-0.5">Visão</p>
                  <p className="font-bold text-xs text-slate-800">Toda a Clínica</p>
                </div>
                <ChevronDown size={14} className={`text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/*Preciso deixar funcional a alternativa de perfis, mas por enquanto deixei fixo para toda a clínica, aí o dropdown só tem a função de mostrar os perfis disponíveis falsos, sem realmente alterar nada*/}
              {/*Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-72 lg:w-80 bg-white rounded-[2.5rem] shadow-2xl border border-slate-50 p-6 lg:p-8 z-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Alternar Perfil</p>
                  <div className="space-y-6 lg:space-y-8">
                    <DropdownItem icon={<LayoutGrid size={20} className="text-white" />} iconBg="bg-[#0f172a]" title="Visão Geral" subtitle="AGENDA DE TODOS" />
                    <div className="h-px bg-slate-50 w-full" />
                    <DropdownItem icon={<span className="text-[10px] font-black text-white">RS</span>} iconBg="bg-blue-600 shadow-lg shadow-blue-100" title="Dr. Ricardo Silva" subtitle="ORTODONTISTA" />
                    <DropdownItem icon={<span className="text-[10px] font-black text-white">AM</span>} iconBg="bg-emerald-500 shadow-lg shadow-emerald-100" title="Dra. Ana Mendes" subtitle="CLÍNICA GERAL" />
                  </div>
                </div>
              )}
            </div>

            <button
              className="bg-blue-600 text-white p-2.5 lg:px-5 lg:py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors"
              type="button"
              onClick={() => setIsNovoAgendamentoOpen(true)}
            >
              <Calendar size={18} /> <span className="hidden sm:inline">Eventos</span>
            </button>
          </div>
        </header>

        <div className="p-4 lg:p-10 max-w-[1400px] mx-auto space-y-6 lg:space-y-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4">
            <div>
              <h2 className="text-2xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Olá, Recepção</h2>
              <p className="text-slate-400 italic text-sm lg:text-lg mt-1 font-medium">A clínica tem 6 consultas agendadas para hoje.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <StatCard label="Pacientes" value="1284" trend="+12%" icon={<Users className="text-blue-600" size={20} />} />
            <StatCard label="Consultas" value="6" sub="HOJE" icon={<CheckCircle2 className="text-green-500" size={20} />} />
            <StatCard label="Vagas" value="8" sub="16:30" icon={<Clock className="text-orange-400" size={20} />} />
            <StatCard label="Receita" value="R$ 3.200" sub="Qui (Previsto)" icon={<TrendingUp className="text-blue-500" size={20} />} trendColor="bg-blue-50/30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex justify-between items-center px-2">
                <h3 className="font-extrabold text-base lg:text-lg flex items-center gap-2 lg:gap-3">
                  <Calendar size={20} className="text-blue-600" /> Próximos Atendimentos
                </h3>
              </div>
              
              <div className="bg-white rounded-3xl lg:rounded-[2.5rem] border border-slate-100 overflow-x-auto shadow-sm">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="text-slate-300 uppercase text-[10px] font-black tracking-[0.1em] border-b border-slate-50">
                      <th className="px-6 lg:px-8 py-5">Paciente</th>
                      <th className="px-6 lg:px-8 py-5">Serviço</th>
                      <th className="px-6 lg:px-8 py-5">Doutor</th>
                      <th className="px-6 lg:px-8 py-5">Horário</th>
                      <th className="px-6 lg:px-8 py-5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <TableRow name="Ana Clara Oliveira" type="CONSULTA DE ROTINA" doctor="Ricardo" time="09:00" status="CONFIRMADO" />
                    <TableRow name="Bruno Henrique" type="ORTODONTIA" doctor="Ana" time="09:00" status="PENDENTE" />
                    <TableRow name="Carla Souza" type="CLAREAMENTO" doctor="Ana" time="10:00" status="CONFIRMADO" />
                    <TableRow name="Daniel Santos" type="CONSULTA DE ROTINA" doctor="Ricardo" time="10:30" status="PENDENTE" />
                    <TableRow name="Eduarda Lima" type="CANAL" doctor="Ricardo" time="11:30" status="CONFIRMADO" />
                    <TableRow name="Fábio Junior" type="ROTINA" doctor="Ana" time="14:00" status="CONFIRMADO" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ainda preciso decidir se vou manter o qrcode ou se irei remover essa parte, mas deixei aqui para não perder o código */}
            <div className="lg:col-span-4 space-y-6 lg:space-y-8">
              <div className="bg-blue-600 rounded-3xl lg:rounded-[2.5rem] p-6 lg:p-8 text-white shadow-2xl shadow-blue-200">
                <h3 className="font-extrabold text-lg lg:text-xl mb-3">Agendamento Público</h3>
                <p className="text-xs opacity-80 leading-relaxed mb-6">Link para seus pacientes marcarem consultas sozinhos.</p>
                <button className="w-full bg-white text-blue-600 font-black py-4 rounded-2xl text-sm hover:scale-[1.02] transition-transform shadow-xl">
                  Ver QR Code
                </button>
              </div>

              <div className="bg-white rounded-3xl lg:rounded-[2.5rem] border border-slate-100 p-6 lg:p-8 shadow-sm space-y-6 lg:space-y-8">
                <h3 className="font-extrabold text-lg mb-2">Status do Dia</h3>
                <StatusItem icon={<CheckCircle2 size={20} className="text-green-500" />} bg="bg-green-50" label="Confirmados" sub="Fidelidade de 92%" />
                <StatusItem icon={<Clock size={20} className="text-orange-400" />} bg="bg-orange-50" label="Pendentes" sub="Via WhatsApp" />
                <StatusItem icon={<XCircle size={20} className="text-red-500" />} bg="bg-red-50" label="Cancelados" sub="Vaga para encaixe" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <NovoAgendamentoModal
        isOpen={isNovoAgendamentoOpen}
        onClose={() => setIsNovoAgendamentoOpen(false)}
      />
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
        active ? 'bg-blue-50 text-blue-600 font-extrabold' : 'text-slate-400 hover:bg-slate-50 font-bold'
      }`}
    >
      {icon} <span className="text-sm tracking-tight">{label}</span>
    </button>
  );
}


function DropdownItem({ icon, iconBg, title, subtitle }) {
  return (
    <button className="flex items-center gap-4 w-full text-left group">
      <div className={`w-11 h-11 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center shrink-0 ${iconBg}`}>{icon}</div>
      <div>
        <p className="font-black text-slate-900 text-sm lg:text-[15px]">{title}</p>
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{subtitle}</p>
      </div>
    </button>
  );
}

function StatCard({ label, value, trend, sub, icon, trendColor = 'bg-white' }) {
  return (
    <div className={`p-4 lg:p-7 rounded-2xl lg:rounded-[2rem] border border-slate-100 ${trendColor} shadow-sm transition-all hover:shadow-md`}>
      <div className="flex justify-between items-start mb-2 lg:mb-4">
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{label}</p>
        <div className="p-2 lg:p-3 bg-white border border-slate-50 rounded-xl shadow-sm">{icon}</div>
      </div>
      <p className="text-xl lg:text-3xl font-black text-slate-900 mb-1">{value}</p>
      {trend ? <span className="text-[9px] font-black text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{trend}</span> : <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{sub}</p>}
    </div>
  );
}

function TableRow({ name, type, doctor, time, status }) {
  const statusStyles = {
    CONFIRMADO: 'bg-green-50 text-green-600 border-green-100',
    PENDENTE: 'bg-orange-50 text-orange-600 border-orange-100',
  };
  return (
    <tr className="hover:bg-slate-50/50 transition-colors group">
      <td className="px-6 lg:px-8 py-5 font-extrabold text-slate-800 text-sm">{name}</td>
      <td className="px-6 lg:px-8 py-5"><span className="text-[9px] font-black px-2 py-1 rounded-full border bg-blue-50 text-blue-500 uppercase">{type}</span></td>
      <td className="px-6 lg:px-8 py-5">
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black text-white ${doctor === 'Ricardo' ? 'bg-blue-600' : 'bg-emerald-500'}`}>
            {doctor === 'Ricardo' ? 'RS' : 'AM'}
          </div>
          <span className="text-xs font-bold text-slate-600">{doctor}</span>
        </div>
      </td>
      <td className="px-6 lg:px-8 py-5 font-black text-sm text-slate-900">{time}</td>
      <td className="px-6 lg:px-8 py-5 text-right"><span className={`text-[9px] font-black px-2 py-1.5 rounded-lg border ${statusStyles[status] || 'bg-slate-50 text-slate-400'}`}>{status}</span></td>
    </tr>
  );
}

function StatusItem({ icon, bg, label, sub }) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${bg}`}>{icon}</div>
      <div>
        <p className="font-extrabold text-xs lg:text-sm text-slate-900">{label}</p>
        <p className="text-[10px] font-bold text-slate-400">{sub}</p>
      </div>
    </div>
  );
}