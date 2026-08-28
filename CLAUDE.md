# pedroavila.me

Vite + React portfolio site, deployed to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml). GitHub Pages serves everything in `public/` as-is — it does **not** compress, resize, or transcode images/video/audio. Any optimization has to happen before the file lands in this repo.

## Adicionando imagens, vídeos ou áudio novos em `public/`

Sempre otimize antes de commitar. Isso já causou um problema real de carregamento lento em produção (ago/2026) — 158 MB de assets sem compressão.

**Imagens (png/jpg/jpeg) → converter para WebP:**
```bash
cwebp -q 82 -m 6 input.png -o output.webp
```
Para logos/imagens com transparência e poucas cores (flat design), use lossless em vez de lossy se o resultado lossy ficar maior que o original:
```bash
cwebp -lossless -z 9 input.png -o output.webp
```
**Exceção:** `public/og-image.jpg` (o card de preview social) tem que continuar JPEG/PNG — vários scrapers (LinkedIn, Slack, WhatsApp) não renderizam WebP. Não converta. Pra regerar, rode `python3 scripts/make_og.py`: ele reproduz o efeito do [RainbowText.tsx](src/components/RainbowText.tsx) em PIL, em 1200x630.

**GIFs animados → converter para MP4, não para WebP animado** (webp animado geralmente não comprime bem screen recordings; MP4 costuma ficar 80–95% menor):
```bash
ffmpeg -i input.gif -movflags +faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 26 -preset slow output.mp4
```
O componente [FadeImage.tsx](src/components/FadeImage.tsx) detecta automaticamente extensão `.mp4`/`.webm` no `src` e renderiza `<video autoPlay loop muted playsInline>` em vez de `<img>` — só aponte o `src` pro arquivo de vídeo, nada mais precisa mudar no call site.

**Vídeos (mp4/mov) → recomprimir e redimensionar pro tamanho real de exibição**, não pro tamanho da gravação original. Antes de comprimir, confira o CSS onde o vídeo aparece (ex: `max-w-[220px]`) e escale pra ~2x esse valor (retina), não mais:
```bash
ffmpeg -i input.mov -movflags +faststart -pix_fmt yuv420p \
  -vf "scale=440:-2,fps=30" -c:v libx264 -crf 27 -preset slow -an output.mp4
```
Referência real: `playground-stella-timer.mov` era 43 MB (886×1920 @ 60fps) exibido num preview de 220px — virou 1.3 MB só ajustando escala/fps/crf.

**Áudio** — nunca use `preload="auto"` em `<audio>`/`<video>` que não faz parte do carregamento inicial da página (ex: easter eggs, música de fundo). Use `preload="none"` ou `"metadata"` pra só baixar quando o usuário interagir.

**Lazy loading** — todo `<img>`/`<FadeImage>` que não é o elemento principal acima da dobra (LCP) deve ter `loading="lazy"`.

## Depois de otimizar

1. Apague o arquivo original (png/jpg/gif/mov) — não deixe os dois versionados.
2. Atualize as referências no código (`src/data/*.ts`, componentes) pra apontar pro novo arquivo/extensão.
3. Rode `npm run build` pra garantir que nenhuma referência ficou quebrada.

## Adicionando ou mudando texto visível (i18n)

O site é escrito em inglês. O português é uma camada de lookup por cima: todo texto que aparece na tela passa por `t()` (de [useLanguage.ts](src/i18n/useLanguage.ts)), que troca a string inglesa pela entrada correspondente em [src/i18n/](src/i18n/). O que não estiver no dicionário cai de volta pro inglês, então uma string esquecida vira uma frase em inglês no meio da página, não um erro visível.

Ao adicionar ou editar copy:

1. Escreva o texto em inglês normalmente, em `src/data/*.ts` ou no componente.
2. No componente, envolva com `t(...)` — `{t(section.content)}`, `alt={t(item.title)}`.
3. Adicione a tradução no arquivo certo, usando **a string inglesa exata como chave**:
   - [pt.ui.ts](src/i18n/pt.ui.ts) — chrome, navegação, playground, diagramas
   - [pt.work.ts](src/i18n/pt.work.ts) — cases de cliente (HelloFresh, TPT, Móvix, MVP Factory)
   - [pt.personal.ts](src/i18n/pt.personal.ts) — Trexs, StellaTimer, C.
   - [pt.keep.ts](src/i18n/pt.keep.ts) — nomes próprios e termos que ficam em inglês de propósito (mapeados pra si mesmos)
4. Se editar uma string inglesa já traduzida, **atualize a chave também** — a antiga vira órfã e o texto volta pro inglês.

```bash
npm run check:i18n
```

Esse script falha se houver chave duplicada entre os arquivos, string em `src/data` sem tradução, ou `t('...')` num componente sem entrada no dicionário. Rode junto com `npm run build` antes de commitar copy nova.

O inglês é o padrão e o `<html lang>` do [index.html](index.html) continua `en` — as meta tags de Open Graph são estáticas e servem os scrapers, então não devem ser traduzidas. O `LanguageProvider` ajusta `document.documentElement.lang` em runtime.
