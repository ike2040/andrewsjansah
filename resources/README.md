# Product Resources Folder

This folder is used to manage and update product information for the Andrews Jhansah Enterprise website.

## How to Update Products

### Method 1: Edit the products.json File

1. Open the `products.json` file in this folder
2. Add, remove, or modify products in the "products" array
3. Each product should follow this structure:

```json
{
  "id": 1,
  "name": "Product Name",
  "category": "engines" or "parts" or "accessories",
  "description": "Product description here",
  "price": "Contact for Price" or "GHS 5,000",
  "image": "URL to product image",
  "inStock": true or false
}
```

### Method 2: Add Product Images

1. Place product images in this `resources` folder
2. Reference them using relative paths:
   - Example: `"image": "resources/engine-part.jpg"`

### Product Categories

- **engines**: Complete engines and engine assemblies
- **parts**: Individual engine parts and components
- **accessories**: Tools, supplies, and other accessories

### Image Guidelines

- Recommended size: 600x400 pixels
- Format: JPG or PNG
- Keep file sizes under 500KB for fast loading
- Use clear, well-lit product photos
- You can use external URLs or local images

### Example Product Entry

```json
{
  "id": 7,
  "name": "Toyota Corolla Engine",
  "category": "engines",
  "description": "1.8L Toyota Corolla engine, low mileage, excellent condition.",
  "price": "Contact for Price",
  "image": "resources/toyota-engine.jpg",
  "inStock": true
}
```

## Sample Free Image Sources

You can use free images from these websites:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

Just copy the image URL and paste it in the "image" field.

## Need Help?

Contact your web developer for assistance with updates.
