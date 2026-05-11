# TODO

## Objetivo
Corrigir carregamento de CSS/Tailwind e resolver erros 404 no Next.js (App Router).

## Checklist
- [x] Identificar/endereçar tentativa de carregamento de `assets/index.css`.
- [x] Criar `public/assets/index.css` para eliminar o 404 de stylesheet.
- [x] Garantir existência de rota `/` em `src/app/page.js` renderizando `src/app/Home.js`.
- [x] Garantir que o App Router usa `RootLayout` correto importando `src/styles/globals.css`.
- [ ] Remover duplicidade de layout (`src/app/layout.js` vs `src/app/layout.jsx`) para evitar comportamento inconsistente.
- [ ] Validar que apenas um RootLayout existe (preferir `layout.jsx` ou `layout.js`).
- [ ] Reiniciar dev server e confirmar que Tailwind aplica estilos (não fica “HTML branco”).
- [ ] (Opcional) Criar `public/favicon.ico` para remover 404 do favicon.

