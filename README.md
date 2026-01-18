# Welligton Queiroz - Site Profissional

Site profissional do psicólogo clínico Welligton Queiroz, desenvolvido com Next.js e TypeScript.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o site.

## 🛠️ Scripts

```bash
pnpm dev      # Servidor de desenvolvimento
pnpm build    # Build para produção
pnpm start    # Servidor de produção
pnpm lint     # Verificar código
```

## 📁 Estrutura

```
app/
  ├── page.tsx          # Página inicial
  ├── sobre/            # Sobre mim
  ├── servicos/         # Serviços oferecidos
  ├── perguntas/        # FAQ
  └── blog/             # Blog
components/              # Componentes reutilizáveis
public/                  # Arquivos estáticos
```

## 🔍 SEO

O projeto inclui otimizações completas de SEO:
- Metadata e Open Graph
- Dados estruturados (JSON-LD)
- Sitemap e robots.txt automáticos
- Breadcrumbs estruturados

Consulte `GUIA-SEO.md` para mais detalhes sobre otimizações e próximos passos.

## 🌐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

## 📄 Licença

Projeto privado - Todos os direitos reservados.
