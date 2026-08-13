from PIL import Image, ImageDraw
import os

size = 256
img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
draw = ImageDraw.Draw(img)

cx, cy = size // 2, size // 2
radius = 118

# Brighter gradient background circle - red to dark
for r in range(radius, 0, -1):
    t = r / radius
    # Gradient from bright red center to darker red edge
    red = int(255 - (255 - 26) * (1 - t))
    green = int(45 * (1 - t) + 10)
    blue = int(85 * (1 - t) + 12)
    alpha = 255
    draw.ellipse(
        [cx - r, cy - r, cx + r, cy + r],
        fill=(red, green, blue, alpha),
    )

# Accent red border ring
for w in range(4):
    draw.ellipse(
        [cx - radius + w, cy - radius + w, cx + radius - w, cy + radius - w],
        outline=(255, 82, 110, 255),
        width=2,
    )

# Draw bold "V" in white for high contrast
v_color = (255, 255, 255, 255)
draw.polygon(
    [
        (cx - 62, cy - 62),
        (cx - 32, cy - 62),
        (cx, cy + 32),
        (cx + 32, cy - 62),
        (cx + 62, cy - 62),
        (cx + 14, cy + 68),
        (cx - 14, cy + 68),
    ],
    fill=v_color,
)

# Subtle glow ring for flair
glow_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_img)
for r in range(135, 120, -1):
    alpha = int(60 * (1 - (r - 120) / 15))
    glow_draw.ellipse(
        [cx - r, cy - r, cx + r, cy + r],
        outline=(255, 45, 85, alpha),
        width=2,
    )
img = Image.alpha_composite(img, glow_img)

out_dir = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(out_dir, exist_ok=True)

out_path = os.path.join(out_dir, "logo.png")
img.save(out_path, "PNG")
print(f"Logo saved to {out_path}")

favicon = img.resize((64, 64), Image.LANCZOS)
favicon_path = os.path.join(os.path.dirname(__file__), "..", "public", "favicon.png")
favicon.save(favicon_path, "PNG")
print(f"Favicon saved to {favicon_path}")