# Mobin Miah - MERN Stack Developer Portfolio

> A modern, responsive portfolio website showcasing my skills and projects as a MERN stack developer.

## 🌐 Live Portfolio

**[https://mobinmiah.com](https://mobinmiah.com)**

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
   git clone https://github.com/mobinmiah/profolio.git
   cd profolio
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

## 📧 Contact Form Setup

The contact form uses Formspree:
1. Form ID: `mlgdaqrk`
2. Emails sent to: `mdmobinmiah1998@gmail.com`
3. Update form ID in `src/components/Contact.jsx` if needed

## 🚀 Deployment

### Hostinger (Production)
**Current live site**: [https://mobinmiah.com](https://mobinmiah.com)

1. Build the project: `npm run build`
2. Upload `dist` folder contents to your Hostinger hosting
3. Configure domain settings in Hostinger control panel
4. Ensure `.htaccess` or server configuration for SPA routing

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

## 🎯 Featured Projects

### 1. AssetVerse
Enterprise asset management platform with role-based access control
- **Live**: [asset-verse-by-me.netlify.app](https://asset-verse-by-me.netlify.app)
- **GitHub**: [mobinmiah/asset-verse-client](https://github.com/mobinmiah/asset-verse-client)
- **Tech**: React, Node.js, MongoDB, Stripe, Firebase Auth, JWT

### 2. TravelEase
Vehicle booking and trip management platform
- **Live**: [travel-ease-vehicles.netlify.app](https://travel-ease-vehicles.netlify.app)
- **GitHub**: [mobinmiah/travel-ease-client](https://github.com/mobinmiah/travel-ease-client)
- **Tech**: React, Node.js, MongoDB, Express.js, Firebase, Tailwind CSS

### 3. ZapShift
Parcel and delivery management system
- **Live**: [zap-shift-transportation.netlify.app](https://zap-shift-transportation.netlify.app)
- **GitHub**: [mobinmiah/zap-shift-client](https://github.com/mobinmiah/zap-shift-client)
- **Tech**: React, Node.js, MongoDB, Express.js, Firebase Auth, JWT

## 👨‍💻 Author

**Mobin Miah**
- Portfolio: [mobinmiah.com](https://mobinmiah.com)
- LinkedIn: [linkedin.com/in/mobin-miah](https://www.linkedin.com/in/mobin-miah)
- GitHub: [github.com/mobinmiah](https://github.com/mobinmiah)
- Repository: [github.com/mobinmiah/profolio](https://github.com/mobinmiah/profolio)
- Email: mdmobinmiah1998@gmail.com
- Phone: +8801878014535

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [GSAP](https://greensock.com/gsap/) - Animation Library
- [Formspree](https://formspree.io/) - Form Handling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Hostinger](https://www.hostinger.com/) - Production Hosting
- [Netlify](https://www.netlify.com/) - Development Hosting

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Portfolio**: [https://mobinmiah.com](https://mobinmiah.com)