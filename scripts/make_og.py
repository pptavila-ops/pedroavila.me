"""Generate the Open Graph card for pedroavila.me.

Reproduces the site's RainbowText effect (src/components/RainbowText.tsx):
a 35x35 procedural HSL wave field, upscaled + blurred, multiplied over white
headline text so only the headline picks up colour.
"""
import colorsys
import math
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
PAD = 80
FONTS = os.path.expanduser("~/Library/Fonts")

semi = ImageFont.truetype(f"{FONTS}/InstrumentSans-SemiBold.ttf", 26)
reg = ImageFont.truetype(f"{FONTS}/InstrumentSans-Regular.ttf", 27)

HEADLINE = ["Rebuilding how", "design gets done."]


def fit_headline(lines, max_width, start=108, floor=44):
    """Largest bold size at which every line clears the content width."""
    for size in range(start, floor - 1, -2):
        font = ImageFont.truetype(f"{FONTS}/InstrumentSans-Bold.ttf", size)
        if all(font.getbbox(l)[2] <= max_width for l in lines):
            return font, size
    return ImageFont.truetype(f"{FONTS}/InstrumentSans-Bold.ttf", floor), floor


bold, bold_size = fit_headline(HEADLINE, W - 2 * PAD)

# --- rainbow field, same wave math as RainbowText.tsx at t=0.9 ---
N = 35
field = Image.new("RGB", (N, N))
fp = field.load()
t = 0.9
for x in range(N):
    for y in range(N):
        hue = (
            math.sin((x * x - y * y) / 300 + t)
            + math.cos((x * y) / 200 - t * 1.3)
            + math.sin((x + y) / 50 + t * 0.7)
            + math.cos((x - y) / 80 - t * 1.8)
            + math.sin((x * y) / 400 + t * 0.5)
        ) * 80
        r, g, b = colorsys.hls_to_rgb((hue % 360) / 360.0, 0.60, 0.65)
        fp[x, y] = (int(r * 255), int(g * 255), int(b * 255))

rainbow = field.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(70))

# --- headline drawn white, then multiplied by the rainbow ---
head_layer = Image.new("RGB", (W, H), "black")
hd = ImageDraw.Draw(head_layer)
line_height = round(bold_size * 1.15)
# keep the two-line block optically centred above the rule at y=452
y = 452 - 70 - line_height * len(HEADLINE)
for line in HEADLINE:
    hd.text((PAD, y), line, font=bold, fill="white")
    y += line_height

# multiply: the rainbow shows through the white glyphs, black stays black
card = Image.composite(rainbow, Image.new("RGB", (W, H), "black"), head_layer.convert("L"))

d = ImageDraw.Draw(card)
# eyebrow
d.text((PAD, PAD + 4), "P E D R O   Á V I L A", font=semi, fill=(255, 255, 255))
# rule under headline
d.rectangle([PAD, 452, W - PAD, 453], fill=(38, 38, 38))
# footer
d.text((PAD, 486), "Senior Product Designer  ·  Berlin  ·  9+ years", font=reg, fill=(150, 150, 150))
d.text((PAD, 528), "pedroavila.me", font=reg, fill=(105, 105, 105))

out = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "og-image.jpg")
card.save(out, "JPEG", quality=92, optimize=True, progressive=True)
print("wrote", out, card.size, "headline", bold_size, "px")
