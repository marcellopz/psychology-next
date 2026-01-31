# 📈 Guia Completo de Otimização SEO

Este documento contém um guia detalhado sobre os próximos passos para otimizar o SEO do website após as melhorias já implementadas.

---

## ✅ Melhorias Já Implementadas

As seguintes otimizações de SEO já foram aplicadas ao projeto:

- ✅ Idioma corrigido (`lang="pt-BR"`)
- ✅ Metadata global completa com Open Graph e Twitter Cards
- ✅ Metadata específica para cada página
- ✅ Arquivos `robots.ts` e `sitemap.ts` criados
- ✅ Dados estruturados (JSON-LD) para LocalBusiness, ProfessionalService, Person e FAQPage
- ✅ URLs canônicas configuradas

---

## 🚀 Próximos Passos Detalhados

### 1. Configurar Variável de Ambiente (OBRIGATÓRIO)

**O que fazer:**
Criar um arquivo `.env.local` na raiz do projeto com a URL do seu site.

**Por que é importante:**
- Garante que todas as URLs geradas (sitemap, metadata, etc.) usem o domínio correto
- Evita problemas com URLs hardcoded
- Facilita mudanças entre ambientes (desenvolvimento/produção)

**Como fazer:**

1. Na raiz do projeto, crie um arquivo chamado `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://www.psiwelligtonqueiroz.com.br
```

2. O domínio padrão do site é `www.psiwelligtonqueiroz.com.br`. Altere apenas se usar outro domínio.

3. Reinicie o servidor de desenvolvimento após criar/alterar o arquivo.

**⚠️ Importante:** Não commite o arquivo `.env.local` no Git (ele já deve estar no `.gitignore`).

---

### 2. Configurar Google Search Console (RECOMENDADO)

**O que fazer:**
- Verificar propriedade do site no Google
- Enviar o sitemap
- Monitorar indexação e erros

**Por que é importante:**
- Ajuda o Google a encontrar e indexar seu site mais rapidamente
- Mostra problemas de rastreamento
- Permite monitorar como seu site aparece nos resultados de busca

**Como fazer:**

#### Passo 1: Acessar Google Search Console
- Acesse: https://search.google.com/search-console
- Faça login com uma conta Google

#### Passo 2: Adicionar Propriedade
- Clique em "Adicionar propriedade"
- Escolha "Propriedade de URL" e digite a URL exata do seu site (com ou sem www)
- Escolha um método de verificação (recomendado: tag HTML)

#### Passo 3: Obter Código de Verificação
- Copie o código fornecido pelo Google (exemplo: `abc123xyz`)

#### Passo 4: Adicionar Código no Código
No arquivo `app/layout.tsx`, linha 78-81, substitua por:

```typescript
verification: {
  google: "abc123xyz", // Cole o código do Search Console aqui
},
```

#### Passo 5: Enviar Sitemap
- No Google Search Console, vá em "Sitemaps"
- Adicione: `https://www.psiwelligtonqueiroz.com.br/sitemap.xml`
- Clique em "Enviar"
- Aguarde o processamento (pode levar alguns dias)

#### Passo 6: Verificar robots.txt
- Acesse: `https://www.psiwelligtonqueiroz.com.br/robots.txt`
- Deve mostrar as regras configuradas corretamente

---

### 3. Adicionar Códigos de Verificação (OPCIONAL)

Além do Google, você pode verificar seu site em outros serviços:

**Bing Webmaster Tools:**
- Acesse: https://www.bing.com/webmasters
- Processo similar ao Google
- Adicione o código em `verification.yandex` (mesmo campo serve para Bing)

No `app/layout.tsx`:
```typescript
verification: {
  google: "seu-codigo-google",
  yandex: "seu-codigo-bing", // Bing usa o mesmo campo
},
```

---

### 4. Otimizações Adicionais (OPCIONAL, mas Recomendado)

#### A) Breadcrumbs Estruturados

**O que são:** Navegação hierárquica que mostra onde o usuário está (ex: Home > Serviços > Psicoterapia Individual).

**Benefício:** Melhora navegação e pode aparecer nos resultados do Google.

**Como implementar:**
Criar um componente `Breadcrumbs.tsx` e adicionar dados estruturados:

```typescript
// Exemplo de schema para breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Serviços",
      item: `${siteUrl}/servicos`,
    },
  ],
};
```

#### B) Páginas Individuais para Posts do Blog

**Situação atual:** Os posts do blog estão apenas listados na página `/blog`.

**O que fazer:** Criar páginas individuais para cada post do blog.

**Estrutura sugerida:**
```
app/blog/
  page.tsx (lista de posts - já existe)
  [slug]/
    page.tsx (página individual do post)
```

**Benefícios:**
- Cada post pode ser indexado separadamente
- Metadata específica por post
- Melhor compartilhamento em redes sociais

#### C) Schema Review (Avaliações)

**O que fazer:** Adicionar schema de avaliações quando tiver depoimentos/avaliações de clientes.

**Benefício:** Pode aparecer com estrelas nos resultados do Google.

**Exemplo de implementação:**
```typescript
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#business`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "25",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Nome do Cliente",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      reviewBody: "Depoimento do cliente...",
    },
  ],
};
```

**⚠️ Importante:** Só adicione avaliações reais e verificáveis.

#### D) Otimização de Imagens

**Status atual:** As imagens já têm `alt` text adequado.

**Melhorias possíveis:**
- Adicionar `loading="lazy"` em imagens abaixo da dobra
- Usar WebP quando possível (Next.js já otimiza automaticamente)
- Adicionar `title` em imagens importantes

**Exemplo:**
```tsx
<Image
  src="/xib4.jpeg"
  alt="Consultório psicológico - espaço acolhedor e acolhedor para sessões de terapia em Vitória-ES"
  title="Espaço terapêutico do consultório de Welligton Queiroz"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
  className="object-cover"
  priority
/>
```

---

### 5. Checklist Pós-Implementação

Após fazer o deploy do site, verifique:

- [ ] Site está acessível: `https://www.psiwelligtonqueiroz.com.br`
- [ ] Robots.txt funciona: `https://www.psiwelligtonqueiroz.com.br/robots.txt`
- [ ] Sitemap funciona: `https://www.psiwelligtonqueiroz.com.br/sitemap.xml`
- [ ] Verificar metadata com ferramentas:
  - Google Rich Results Test: https://search.google.com/test/rich-results
  - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
  - Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] Verificar dados estruturados:
  - Schema Markup Validator: https://validator.schema.org/
- [ ] Testar velocidade:
  - PageSpeed Insights: https://pagespeed.web.dev/
  - GTmetrix: https://gtmetrix.com/

---

### 6. Monitoramento Contínuo

Após a configuração inicial:

- **Semanalmente:** Verificar Google Search Console por erros
- **Mensalmente:** Revisar palavras-chave e posicionamento
- **Quando necessário:** Atualizar sitemap ao adicionar novas páginas

---

## 📊 Prioridade de Implementação

### 🔴 Alta Prioridade (Faça Primeiro)
1. ✅ Configurar `.env.local` com URL do site
2. ✅ Configurar Google Search Console
3. ✅ Enviar sitemap

### 🟡 Média Prioridade (Nas Próximas Semanas)
4. Adicionar breadcrumbs
5. Criar páginas individuais para posts do blog
6. Otimizar imagens adicionais

### 🟢 Baixa Prioridade (Quando Tiver Conteúdo)
7. Adicionar schema de avaliações (quando tiver depoimentos)
8. Configurar Bing Webmaster Tools

---

## 🔗 Links Úteis

### Ferramentas de Teste
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Markup Validator:** https://validator.schema.org/
- **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/

### Documentação
- **Next.js Metadata:** https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- **Schema.org:** https://schema.org/
- **Google Search Central:** https://developers.google.com/search/docs

---

## 📝 Notas Importantes

1. **Variável de Ambiente:** Sempre use `NEXT_PUBLIC_SITE_URL` para URLs do site. Nunca hardcode URLs.

2. **Dados Estruturados:** Só adicione informações verdadeiras e verificáveis nos schemas.

3. **Sitemap:** O sitemap é gerado automaticamente pelo Next.js. Ao adicionar novas páginas, elas aparecerão automaticamente.

4. **Robots.txt:** O arquivo é gerado automaticamente. Não precisa criar manualmente.

5. **Performance:** Mantenha o site rápido. Velocidade é um fator de ranking importante.

---

## ❓ Dúvidas Frequentes

**P: Preciso fazer tudo de uma vez?**
R: Não. Comece com as tarefas de alta prioridade. As outras podem ser feitas gradualmente.

**P: Quanto tempo leva para ver resultados?**
R: Geralmente 2-4 semanas após a configuração do Search Console. SEO é um processo contínuo.

**P: Posso usar o mesmo código de verificação em múltiplos sites?**
R: Não. Cada site precisa de seu próprio código de verificação.

**P: O sitemap atualiza automaticamente?**
R: Sim, o Next.js gera o sitemap dinamicamente a cada build.

---

**Última atualização:** Dezembro 2024
