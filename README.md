# Chân lý trong Triết học Mác – Lênin

Presentation slide về chân lý trong triết học Mác-Lênin với React + Vite

## Tính năng

- 🌙 Dark/Light mode toggle
- 🎨 Responsive design
- 🖼️ Hình ảnh minh họa
- 🌸 Hoa văn trang trí background
- 📱 Mobile friendly

## Development

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

## Deploy lên Vercel

### Cách 1: Deploy từ GitHub (Khuyên dùng)

1. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Add presentation"
   git push origin main
   ```

2. **Kết nối với Vercel:**
   - Truy cập [vercel.com](https://vercel.com)
   - Đăng nhập bằng GitHub
   - Click "New Project"
   - Chọn repository này
   - Click "Deploy"

3. **Cấu hình tự động:**
   - Vercel sẽ tự động detect Vite framework
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`

### Cách 2: Deploy từ CLI

1. **Cài đặt Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login và deploy:**
   ```bash
   vercel login
   vercel --prod
   ```

### Cách 3: Deploy bằng drag & drop

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Upload folder `dist`:**
   - Truy cập [vercel.com/new](https://vercel.com/new)
   - Kéo thả folder `dist` vào
   - Vercel sẽ tự động deploy

## File cấu hình đã thêm

- `vercel.json` - Cấu hình Vercel deployment
- `.vercelignore` - Loại trừ file không cần thiết

## URL Demo

Sau khi deploy thành công, bạn sẽ nhận được URL như:
`https://your-project-name.vercel.app`

## Cấu trúc project

```
presentation/
├── images/           # Hình ảnh
├── index.html       # HTML template
├── index.tsx        # React component chính
├── index.css        # Styles
├── package.json     # Dependencies
├── vercel.json      # Vercel config
└── .vercelignore    # Ignore files
```

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
