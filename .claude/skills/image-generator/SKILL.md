# Image Generator

Generate photorealistic images for any project. This skill handles model routing, fallback logic, prompt engineering for photorealism, image optimization, and the Baserow + Google Flow extension pipeline.

## Two Generation Tracks

### Track 1: Direct API (Abstract/scene visuals ONLY — NO people, NO products)
For text-to-image generation — backgrounds, abstract visuals, illustrations, textures, and scenes that contain **neither people nor specific products**.

**CRITICAL RULE: Imagen 4 must NEVER be used to generate images of people.** It produces AI-looking faces, uncanny skin, and unrealistic features. Any image containing a person MUST use Track 2 (the extension).

**Use Vertex AI Imagen 4:**
1. `imagen-4.0-ultra-generate-001` — hero images, highest quality
2. `imagen-4.0-generate-001` — standard quality
3. `imagen-4.0-fast-generate-001` — quick iterations, thumbnails

These are text-only models. They do NOT accept image inputs. Use multi-region rotation (10 regions).

### Track 2: Baserow + Google Flow Extension (People, products, or both)
**Use this track whenever the image contains:**
- **A person** (any person, regardless of whether a product is shown)
- **A specific product** (branded items, physical goods)
- **Both a person and a product**

This is the ONLY track that produces realistic-looking people.

**How it works:**
1. Claude populates Baserow table (ID: 890323) with prompts, sets `Mode: Imagegen` and `Status: pending`
2. User runs the VEO AutoFlow browser extension (set to correct aspect ratio in popup UI)
3. Extension generates images via Google Flow API and writes download URLs to `Video_URL` column
4. User tells Claude "it's done"
5. Claude downloads from `Video_URL`, crops/resizes/optimizes, and saves to the correct asset folders

**Baserow credentials:**
- Database token (row CRUD): `5UiyT8Ut9Fj6BJ8HOHxiHguQJ72IMYmf`
- MCP server connected for direct table access
- JWT needed for schema changes (request from user if needed)

**Fallback for image-to-image (if extension unavailable):**
1. **Vertex AI Gemini** (`gemini-3.1-flash-image-preview`) — try first via global endpoint
2. **Alibaba Qwen Image 2.0 Pro** (`qwen-image-2.0-pro`) — if Vertex returns 429
3. **Alibaba Qwen Image 2.0 Standard** (`qwen-image-2.0`) — if Pro quota is exhausted

## API Configuration

### Vertex AI (Primary)
- **API Keys:**
  - Primary: `AQ.Ab8RN6KoaqYo2y4H2BQ3qWKpSCtyY3M1Uq3k_hAFeHBrB5uRZQ`
  - Backup: `AQ.Ab8RN6KmiVC09R_AdLuQmUs2T0D9B1B80o12slCZXNX3QVBJOA`
- **Project:** `gen-lang-client-0950656214`
- **Billing:** GCP $300 credits (expires June 14, 2026)
- **NEVER use the Google AI Studio key** (`AIzaSy...`) — country-blocked for image gen

### Alibaba DashScope (Fallback for image-to-image)
- **API Key:** `sk-d882d1ade6554c4abcb09a5445e58009`
- **Endpoint:** `https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis`
- **Free quota:** 100 images per model (500 total across all Qwen models), valid 90 days
- **Pricing after free:** Pro $0.075/img, Standard $0.035/img

### Multi-Region Rotation (Vertex AI — MANDATORY)
When a region returns 429, immediately try the next. NEVER sleep — rotate instantly.

| Priority | Region |
|----------|--------|
| 1 | us-central1 |
| 2 | us-east1 |
| 3 | europe-west1 |
| 4 | asia-northeast1 |
| 5 | us-west1 |
| 6 | europe-west4 |
| 7 | us-east4 |
| 8 | us-south1 |
| 9 | europe-west2 |
| 10 | europe-north1 |

## Prompt Engineering for Photorealism

### Core Principles
All prompts must produce images that are **indistinguishable from real photography**. Never let images look AI-generated.

### People Photography Prompt Template
```
Candid photograph of [person description]. [Action/pose]. [Setting].

Physical details: natural skin texture with visible pores, subtle under-eye shadows,
individual hair strands visible, asymmetric facial features, natural skin
discoloration and minor blemishes. Clothing has natural fabric wrinkles and drape.

Photography specs: Shot on Sony A7IV with 85mm f/1.4 lens. Shallow depth of field,
bokeh background. Natural window light from [direction]. ISO 200, 1/250s.
Color graded with warm neutral tones, slight film grain.

NOT a 3D render. NOT illustration. NOT AI art. Real editorial photography.
```

### Product Photography Prompt Template
```
Commercial product photography of [product description] on [surface].
[Arrangement if multiple products].

Lighting: Soft directional studio lighting from top-left, creating gentle
shadow on right side. Even illumination on label. No harsh reflections.
Background: [White/light gray gradient / dark background for dramatic].
Camera: Phase One IQ4 150MP, 120mm macro lens, f/11. Tethered studio capture.
Post-production: Minimal retouching, true-to-life color, no over-sharpening.

Professional e-commerce product photography.
```

### Lifestyle Scene Prompt Template
```
Editorial lifestyle photograph of [scene description]. [Time of day]. [Location].

Environment details: [specific details - textures, materials, plants, objects].
Color palette: [project-specific palette].
Composition: Rule of thirds, [main subject] at [position]. Generous negative space.

Shot on Hasselblad X2D with natural light. Shallow depth of field on [focus point].
Warm color temperature (5600K). Subtle film emulation (Kodak Portra 400).
Editorial quality. Clean, minimal, intentional.
```

### Avatar/Headshot Prompt Template
```
Professional headshot portrait of [person description with age, ethnicity,
hair, clothing]. [Expression]. Clean light gray seamless backdrop.

CRITICAL REALISM: Natural skin texture with visible pores and fine lines
appropriate for age. Subtle asymmetry in facial features. Individual eyebrow
hairs visible. Natural lip texture. Minor skin imperfections (small moles,
slight redness, pore visibility). Hair shows individual strands, not a smooth mass.
Eyes have natural catchlights and slight bloodshot detail in sclera.

Photography: Canon R5 with 85mm f/1.8 portrait lens. Butterfly lighting setup
with fill card. f/2.8, ISO 100. Professionally retouched but not over-smoothed.
Color: Natural skin tones, no orange cast, no AI porcelain skin.

This must look like a real LinkedIn headshot, NOT an AI-generated face.
```

### Abstract/Visual Prompt Template
```
[Description of visualization]. [Color palette]. [Mood].

Style: Premium illustration meets fine art. Clean, elegant composition.
Render quality: Cinema 4D + Octane render, 8K, volumetric lighting.
No text, no labels, no UI elements.
```

### Prompt Modifiers for Extra Realism
Add these to any prompt involving people:
- "imperfect skin, real human skin texture"
- "asymmetric features, natural face"
- "candid moment, not posed"
- "shot on [specific camera], [specific lens]"
- "natural lighting, no studio flash"
- "slight motion in hair/clothing"
- "environmental storytelling"

### What to NEVER Include in Prompts
- "perfect skin" or "flawless"
- "beautiful" or "gorgeous" (too generic, triggers AI aesthetic)
- "4K" or "8K" alone (use camera specs instead)
- "hyper-realistic" (paradoxically makes it look more AI)
- "unreal engine" or "octane render" for photos of people
- "stock photo" (triggers the exact look we're avoiding)

## API Request Formats

### Vertex AI — Imagen (text-to-image, no refs)
```bash
curl -s -X POST \
  "https://REGION-aiplatform.googleapis.com/v1/projects/gen-lang-client-0950656214/locations/REGION/publishers/google/models/MODEL:predict?key=API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "instances": [{"prompt": "PROMPT"}],
    "parameters": {"sampleCount": 1, "aspectRatio": "RATIO", "addWatermark": false}
  }'
```
Response: `predictions[0].bytesBase64Encoded`
Aspect ratios: `1:1`, `3:4`, `4:3`, `16:9`, `9:16`

### Vertex AI — Gemini (image-to-image, with refs)
```bash
curl -s -X POST \
  "https://aiplatform.googleapis.com/v1/publishers/google/models/gemini-3.1-flash-image-preview:generateContent?key=API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{"role": "user", "parts": [
      {"inlineData": {"mimeType": "image/jpeg", "data": "BASE64_REF_1"}},
      {"inlineData": {"mimeType": "image/jpeg", "data": "BASE64_REF_2"}},
      {"text": "PROMPT"}
    ]}],
    "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
  }'
```
Response: `candidates[0].content.parts[].inlineData.data`
Max 14 images per request. Images BEFORE text in parts array.

### Alibaba DashScope — Qwen Image 2.0 (fallback, async)
```bash
# Step 1: Submit task
curl -s -X POST \
  "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis" \
  -H "Authorization: Bearer sk-d882d1ade6554c4abcb09a5445e58009" \
  -H "Content-Type: application/json" \
  -H "X-DashScope-Async: enable" \
  -d '{
    "model": "qwen-image-2.0-pro",
    "input": {"prompt": "PROMPT"},
    "parameters": {"n": 1, "size": "1024*1024"}
  }'

# Step 2: Poll for result (every 3 seconds)
curl -s "https://dashscope-intl.aliyuncs.com/api/v1/tasks/TASK_ID" \
  -H "Authorization: Bearer sk-d882d1ade6554c4abcb09a5445e58009"
```
Response: `output.results[0].url` (direct download URL)
Sizes: `512*512`, `768*768`, `1024*1024`, `2048*2048` (native 2K!)

### Vertex AI — Imagen Upscale (MANDATORY post-processing)
Every image generated via the extension MUST be upscaled before use. The extension's built-in upscale feature is broken (returns `encodedImage` but code looks for `fifeUrl`, so upscaled data is silently discarded). Use Vertex AI instead.

```bash
curl -s -X POST \
  "https://REGION-aiplatform.googleapis.com/v1/projects/gen-lang-client-0950656214/locations/REGION/publishers/google/models/imagen-4.0-generate-001:predict?key=API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "instances": [{"prompt": "DESCRIPTION_OF_IMAGE", "image": {"bytesBase64Encoded": "BASE64_IMAGE"}}],
    "parameters": {"sampleCount": 1, "mode": "upscale", "upscaleConfig": {"upscaleFactor": "x2"}}
  }'
```
Response: `predictions[0].bytesBase64Encoded`
- Uses the same `imagen-4.0-generate-001` model with `mode: "upscale"`
- Doubles resolution: 768x1376 → 1536x2752, 1376x768 → 2752x1536
- The `prompt` field should briefly describe the image content (helps the upscaler)
- Uses multi-region rotation (same as text-to-image)
- **Do NOT use the extension's Image Upscale toggle** — it is broken

### Alibaba DashScope — Qwen Image Edit (image-to-image fallback)
```bash
curl -s -X POST \
  "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/image2image/image-synthesis" \
  -H "Authorization: Bearer sk-d882d1ade6554c4abcb09a5445e58009" \
  -H "Content-Type: application/json" \
  -H "X-DashScope-Async: enable" \
  -d '{
    "model": "qwen-image-2.0-pro",
    "input": {
      "prompt": "PROMPT",
      "base_image_url": "URL_TO_REFERENCE_IMAGE"
    }
  }'
```

## Image Dimensions & Optimization

| Use Case | Aspect Ratio | Max Width | JPEG Quality |
|----------|-------------|-----------|-------------|
| Hero banner | 16:9 | 1920px | 92 |
| Square content | 1:1 | 1080px | 90 |
| Card/thumbnail | 4:3 | 800px | 90 |
| Page header | 16:9 | 1200px | 90 |
| Avatar/headshot | 1:1 | 400px | 88 |
| Social media (feed) | 1:1 | 1080px | 90 |
| Portrait/Instagram | 4:5 | 1080px | 90 |

**NEVER compress below quality 88.** Aggressive compression makes images look horrible.

## Photography Guidelines

### Lighting
- Soft directional from top-left
- Gentle shadows, never harsh
- Even illumination on key subjects

### Composition
- Generous negative space
- Rule of thirds for lifestyle/editorial
- Key subjects always in sharp focus

### AVOID
- Generic stock photo aesthetic
- Over-saturated colors
- Busy cluttered backgrounds
- Harsh shadows
- People who look AI-generated (uncanny valley, porcelain skin, symmetrical faces)
- Over-smoothed skin textures

## Extension Aspect Ratio Handling

The VEO AutoFlow extension supports **Landscape**, **Portrait**, **1:1**, **4:3**, and **3:4** aspect ratios. Set the correct ratio in the extension popup before running a batch. The setting applies globally to ALL tasks in a batch — run separate batches for different aspect ratios.

### Landscape Images (hero banners, wide visuals)
- Set extension to **Landscape**
- Images generate at 1376x768

### Portrait/Vertical Images (full-body shots, vertical banners)
- Set extension to **Portrait**
- Images generate at 768x1376

### Square Images (1:1 — avatars, thumbnails, social)
- Set extension to **1:1**
- If 1:1 is not working natively, fallback: use **Portrait** mode + Square-Crop Prompt Technique + post-crop

### 4:3 Images (cards, thumbnails)
- Set extension to **4:3**

### 3:4 Images (taller cards, portraits)
- Set extension to **3:4**

### iPhone Photo Ratio (4:5 — product showcases, Instagram, lifestyle)
Use **Portrait** mode + 4:5 Crop Prompt Technique + post-crop:
```python
from PIL import Image
img = Image.open('portrait.png')  # 768x1376
target_height = int(img.width * 5 / 4)  # 960px (4:5 from 768 width)
top = (img.height - target_height) // 2  # 208px from top
cropped = img.crop((0, top, img.width, top + target_height))  # 768x960
```

### Crop Prompt Techniques

These MANDATORY framing instructions go into ANY prompt that will be cropped after generation.

#### For Square (1:1) Crop — strict centering, 50% subject height
```
CRITICAL FRAMING: Extreme vertical center-weighted composition. The subject
must be positioned exactly at the vertical midpoint of the frame. Use a
[waist-up medium shot / wide shot] with the subject [small in the frame /
occupying only 50% of the image height], perfectly centered vertically with
equal empty space above and below. [Background type] must extend uniformly
to all edges — top, bottom, left, right — with no variation or vignetting.
Portrait 9:16 aspect ratio.
```

#### For 4:5 (iPhone) Crop — relaxed centering, 70% subject height
```
CRITICAL FRAMING: Vertical center-weighted composition shot in the style of
an iPhone 17 Pro photograph. The subject must be positioned at the vertical
center of the frame. Use a [three-quarter body shot / environmental medium shot]
with the subject occupying roughly 70% of the image height, centered vertically
with moderate empty space above and below. [Background type] must extend cleanly
to all edges with no vignetting. The image should feel like a natural, casually
composed iPhone photo — slightly wider framing than a tight portrait, with
environmental context visible. Portrait 9:16 aspect ratio.
```

## Batch Workflow (Extension Track)

### Preparing Batches
1. **Sort all images by orientation:** Group by aspect ratio
2. **Create Baserow rows** for the first batch (all same orientation)
3. **Set fields:** `Name`, `Image Prompt`, `Mode: Imagegen`, `Status: pending`
4. **Tell user** which aspect ratio to select in the extension popup
5. **User runs the batch** and says "it's done"
6. **Claude downloads** from `Video_URL` column
7. **Claude upscales** via Vertex AI Imagen (`mode: "upscale"`, `upscaleFactor: "x2"`)
8. **Claude crops** to target ratio (if needed), resizes to final dimensions, optimizes as JPEG quality 88-92
9. **Claude saves** to appropriate project folder
10. **Clear table and repeat** for next aspect ratio batch

### Baserow Table Fields (Table ID: 890323)
| Field | Purpose |
|-------|---------|
| Name | Image identifier (e.g., `avatar-sarah`, `hero-banner`) |
| Image Prompt | The full generation prompt |
| Imagegen Reference | Reference image URL (if needed) |
| Image URL | (unused for now) |
| Video_URL | **Extension writes the generated image URL here** |
| Status | `pending` → `completed` (managed by extension) |
| Mode | Always `Imagegen` for image generation |
| VEO Prompt | For video prompts (future use) |
| Start Frame / End Frame | For video (future use) |

## Direct API Workflow (Track 1)

1. **Write prompt** using the appropriate template
2. **Try Vertex AI Imagen 4** with multi-region rotation
3. **If 429/error** → rotate to next region instantly (never sleep)
4. **Upscale** via Vertex AI Imagen (`mode: "upscale"`, `upscaleFactor: "x2"`)
5. **Crop** if needed, then resize to final target dimensions
6. **Compress** to JPEG at quality 88-92
7. **Save** to appropriate project folder

## How to Use This Skill

When asked to generate any image:

1. **Does the image contain a person OR a specific product?**
   - YES → **Track 2:** Populate Baserow table → user runs extension → Claude downloads & processes
   - NO (abstract, scenes, backgrounds only) → **Track 1:** Use Vertex AI Imagen 4 directly via API

2. **What aspect ratio?**
   - Landscape → Extension Landscape mode (or Imagen `16:9` / `4:3`)
   - Portrait → Extension Portrait mode (or Imagen `9:16` / `3:4`)
   - Square (1:1) → Extension 1:1 mode (or Imagen `1:1`). Fallback: Portrait + crop technique
   - 4:3 → Extension 4:3 mode (or Imagen `4:3`)
   - 3:4 → Extension 3:4 mode (or Imagen `3:4`)
   - iPhone (4:5) → Extension Portrait mode + 4:5 Crop Prompt Technique + post-crop

3. **Select prompt template** based on content type (person, product, lifestyle, abstract)

4. **Add realism modifiers** for any image with people

5. **Generate, optimize, save** — never wait on rate limits, always rotate/fallback
