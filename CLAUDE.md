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
