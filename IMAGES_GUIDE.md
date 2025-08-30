# Image Integration Guide for LabelSquor

## 🖼️ Current Image Placeholders

The website is now ready to receive images. All image locations have placeholders that can be easily replaced.

## 📁 Where to Add Images

1. **Create an images folder:**
   ```
   public/images/
   ```

2. **Organize by section:**
   ```
   public/images/products/     - Product images
   public/images/hero/         - Hero section visuals
   public/images/features/     - Feature illustrations
   public/images/icons/        - Custom icons
   ```

## 🔄 How to Replace Placeholders

### For Interactive Demo Products:

1. Open `src/components/InteractiveDemo.tsx`
2. Find the products array
3. Replace `imageUrl` values:

```typescript
// Current:
imageUrl: '/api/placeholder/300/400',

// Replace with:
imageUrl: '/images/products/protein-bar.jpg',
```

### For Other Sections:

1. Open `src/config/images.ts`
2. Update the paths:

```typescript
export const productImages = {
  organicProteinBar: '/images/products/protein-bar.jpg',
  naturalFaceCream: '/images/products/face-cream.jpg',
  kidsFruitJuice: '/images/products/juice.jpg',
};
```

## 📐 Recommended Image Sizes

### Product Images:
- **Thumbnails**: 300×400px
- **Main Display**: 600×800px
- **Format**: JPG or PNG with transparent background

### Hero Section:
- **Product Card Mock**: 400×500px
- **Background Pattern**: SVG or high-res PNG

### Feature Icons:
- **Size**: 200×200px
- **Format**: SVG preferred, PNG with transparency

### How It Works Icons:
- **Size**: 200×200px
- **Format**: SVG or PNG

## 🎨 Image Guidelines

1. **Consistency**: Use similar lighting and style across all product images
2. **Quality**: Minimum 2x resolution for retina displays
3. **Optimization**: Compress images using tools like TinyPNG
4. **Naming**: Use descriptive, lowercase names with hyphens (e.g., `organic-protein-bar.jpg`)

## 🚀 Quick Start

1. **Add your images to `public/images/`**
2. **Update paths in components or config**
3. **Deploy:**
   ```bash
   npm run deploy
   ```

## 📝 Components Ready for Images

- ✅ **InteractiveDemo**: 3 product slots ready
- ✅ **Hero**: Product card mockup
- ✅ **HowItWorks**: 3 step icons
- ✅ **ForConsumers**: 3 feature illustrations
- ✅ **ForRetailers**: 3 feature illustrations
- ✅ **DemoSection**: Multiple product examples

## 💡 Tips

- The `ImagePlaceholder` component automatically handles missing images
- Images in the `public` folder are served directly (no import needed)
- Use `/images/...` paths (starting with `/`) for public folder images

When you're ready to add images, just drop them in the appropriate folders and update the paths!
