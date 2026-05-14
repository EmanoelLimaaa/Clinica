-- Criação da tabela de agendamentos seguindo o contrato definido
CREATE TABLE public.agendamentos (
  id bigint primary key generated always as identity, -- O "int8" com primary key
  created_at timestamptz default now() not null,      -- Data de criação automática
  nome_cliente text not null,                         -- Nome do cliente (Obrigatório)
  whatsapp text not null,                             -- WhatsApp (Obrigatório)
  data_hora timestamptz not null,                     -- Data e hora no padrão ISO
  servico text not null                               -- Tipo de serviço
);

-- Comentário para documentar a regra de negócio inicial
-- Regra: Todos os agendamentos têm duração padrão de 1 hora