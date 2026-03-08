# Mobin Miah - MERN Stack Developer Portfolio

> A modern, responsive portfolio website showcasing my skills and projects as a MERN stack developer.

## 🌐 Live Portfolio

**[https://portfolio-ayubb.netlify.app](https://portfolio-ayubb.netlify.app)**

## 🚀 About

Professional portfolio website built with React.js and Vite, featuring modern animations, responsive design, and a complete showcase of my MERN stack development expertise.

## ✨ Key Features

- **Modern Design** - Clean, professional interface with smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Theme toggle with persistent preferences
- **Active Navigation** - Scroll spy with active route highlighting
- **Working Contact Form** - Integrated with Formspree
- **Resume Download** - One-click PDF download
- **Real Projects** - Live demos and GitHub repositories
- **SEO Optimized** - Comprehensive meta tags and structured data
- **Fast Performance** - Vite-powered build with code splitting

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling
- **shadcn/ui** - UI components

### Tools & Services
- **Formspree** - Contact form handling
- **Hostinger** - Production hosting (mobinmiah.com)
- **Netlify** - Development and staging deployment
- **Git & GitHub** - Version control
- **VS Code** - IDE
- **ChatGPT & Kiro** - AI-assisted development

## 📂 Project Structure

```
├── public/
│   ├── assets/
│   ├── favicon.png
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── Header.jsx       # Navigation with scroll spy
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # About me
│   │   ├── Services.jsx     # Services offered
│   │   ├── Process.jsx      # Work process
│   │   ├── Skills.jsx       # Technical skills
│   │   ├── Projects.jsx     # Portfolio projects
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── assets/              # Images and static files
│   ├── lib/                 # Utility functions
│   ├── App.jsx              # Main app component
│   ├── index.jsx            # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayub660/portfolio1.git
   cd portfolio1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information
- Edit components in `src/components/`
- Update project data in `src/components/Projects.jsx`
- Modify skills in `src/components/Skills.jsx`
- Change social links in `src/components/Header.jsx`

### Update Resume
- Replace `public/resume.pdf` with your resume

### Update Colors
- Modify `tailwind.config.js` and `index.html`




### Netlify (Development/Staging)
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Auto-deploy on push to main branch

### Vercel (Alternative)
1. Import GitHub repository
2. Auto-detect Vite configuration
3. Deploy with zero configuration

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+


🔗 **Live Portfolio**: [https://portfolio-ayubb.netlify.app](https://portfolio-ayubb.netlify.app)