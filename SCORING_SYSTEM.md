# LabelSquor Scoring System

## 🎯 Live Implementation

The scoring system is now live with real Indian product data at https://labelsquor.com

## 📊 Score Ranges & Colors

| Score Range | Color | Meaning |
|------------|-------|---------|
| 80-100 | Green | Excellent |
| 60-79 | Amber | Good |
| 40-59 | Orange | Moderate |
| 0-39 | Red | Poor |

## 🏷️ Four Core Scores

### 1. Health Score (0-100)
Based on nutritional composition:
- Sugar content
- Sodium levels
- Saturated fat
- Fiber content
- Protein density

### 2. Safety Score (0-100)
Compliance and certification:
- FSSAI license presence
- Batch/expiry clarity
- Regulatory compliance
- Ingredient transparency

### 3. Sustainability Score (0-100)
Environmental impact:
- Packaging type (plastic vs paper)
- Organic certification
- Palm oil usage (RSPO)
- Carbon footprint

### 4. Verification Score (0-100)
Label accuracy:
- GTIN/barcode validity
- License number presence
- Claims verification
- Information completeness

## 🇮🇳 Current Products in Demo

1. **Maggi Instant Noodles** - Health: 24 (Poor)
2. **Lay's Potato Chips** - Health: 41 (Moderate)
3. **Coca-Cola** - Health: 47 (Moderate)
4. **Aashirvaad Whole-Wheat Atta** - Health: 100 (Excellent)
5. **Amul Plain Curd** - Health: 75 (Good)
6. **Mother Dairy Paneer** - Health: 65 (Good)
7. **Parle-G Glucose Biscuits** - Health: 11 (Poor)
8. **Britannia Whole-Wheat Bread** - Health: 82 (Excellent)

## 📱 Components

### InteractiveDemo
- Product carousel with navigation
- Detailed score breakdown
- Why Card explanations
- Flags/chips for certifications

### ProductGrid
- All products in grid layout
- Compact score display
- Quick overview cards
- "Experience Squor" CTA

## 🖼️ Adding Product Images

1. Add images to `/public/images/`
2. Name them exactly as in products.json:
   - maggi_noodles.jpg
   - lays_chips.jpg
   - coca_cola.jpg
   - aashirvaad_atta.jpg
   - amul_curd.jpg
   - motherdairy_paneer.jpg
   - parle_g.jpg
   - britannia_bread.jpg

## 🎨 Design System

- **Scores Font**: Space Grotesk (bold)
- **Why Card Font**: Inter
- **Headers**: Outfit
- **Body Text**: DM Sans
- **Primary CTA**: Trust Blue (#2A66FF)

## 📝 Data Structure

```json
{
  "name": "Product Name",
  "brand": "Brand Name",
  "category": "Category",
  "pack_size": "Size",
  "scores": {
    "health": 0-100,
    "safety": 0-100,
    "sustainability": 0-100,
    "verification": 0-100
  },
  "why_card": [
    "Reason 1",
    "Reason 2"
  ],
  "flags": [
    "FSSAI # present",
    "Plastic packaging"
  ],
  "image": "/images/product.jpg"
}
```

## 🚀 Future Enhancements

- Real product images from Indian brands
- More products (target: 50+)
- Category filtering
- Search functionality
- Comparison tool
- Barcode scanner integration
