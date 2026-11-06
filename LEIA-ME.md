# Site Hotel Mundo-Livre

Landing page estática (HTML + CSS + JS puro) que leva o tutor a agendar pelo WhatsApp.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Página: textos, seções, links do WhatsApp e ícones SVG |
| `style.css` | Todos os estilos (cores no topo, em `:root`) |
| `script.js` | Menu do celular, animações ao rolar e ano do rodapé |
| `assets/img` | Fotos em AVIF/WebP (480 e 960 px), imagem de compartilhamento (OG) e ícone 512 |
| `assets/fonts` | Fonte Nunito (WOFF2, auto-hospedada) |
| `fotos-originais/` | JPGs originais. **Não sobem para o site** |
| `_headers` | Regras de cache para o Cloudflare Pages |
| `robots.txt`, `sitemap.xml`, `favicon.*`, `apple-touch-icon.png`, `site.webmanifest` | SEO e ícones |

## Como editar

- **Textos**: direto no `index.html`.
- **WhatsApp**: todos os links usam `https://wa.me/5511920687281?text=...`. Para trocar o número, use "Substituir tudo" no editor.
- **Depoimentos**: seção `<!-- DEPOIMENTOS -->`. Cada card tem o texto em `<p class="t-text">`. Hoje são resumos de avaliações do Google; cole o texto original se preferir.
- **Trocar ou adicionar foto**: gere `nome-480.webp/.avif` e `nome-960.webp/.avif` (largura 480 e 960 px) em `assets/img` e copie um bloco `<picture>` existente trocando o nome. Sites como squoosh.app fazem a conversão.

## Site no ar

**https://hotelmundolivre.pages.dev** (Cloudflare Pages, projeto `hotelmundolivre`, plano gratuito).
O endereço já está no `robots.txt`, no `sitemap.xml` e no `index.html` (canonical, og:url, og:image e dados estruturados).
Se um dia usar um domínio próprio, troque `hotelmundolivre.pages.dev` nesses três arquivos.

## Publicar uma nova versão

1. Cloudflare → Workers & Pages → **hotelmundolivre** → **Create deployment**.
2. Arraste os arquivos do site (ou um .zip com eles) **sem** a pasta `fotos-originais`, a pasta `.claude` e este LEIA-ME.
3. Clique em **Deploy site**.

Se for gerar o .zip pelo Windows, use o Explorador (botão direito → Compactar) ou o `tar.exe` do Windows.
O `tar` do Git Bash cria um arquivo .tar com nome de .zip, e o Cloudflare recusa.
