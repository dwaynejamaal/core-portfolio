# React Capstone Project: Personal Software Engineering Portfolio


## 🎯 Project Overview

Create a professional personal portfolio website that showcases your software engineering journey and skills. This project will demonstrate your mastery of React fundamentals including components, routing, state management, and modern UI design.

Your portfolio will serve as a professional showcase that you can share with potential employers, clients, and the developer community.

## 📋 Requirements Checklist

Your portfolio website **MUST** include all of the following:

### ✅ **1. Page Structure (3+ Components)**
- **Home/Splash Page** - Professional introduction and overview
- **Portfolio Page** - Project gallery with thumbnails and links
- **Contact Page** - Resume display and contact form
- *Optional:* Additional pages (About, Blog, Skills, etc.)

### ✅ **2. React Router Implementation**
- BrowserRouter setup with navigation
- Routes for all pages
- Active navigation states
- 404/Not Found handling

### ✅ **3. Props or Context Usage**
- Pass data between components using props
- **OR** implement Context for theme/state management
- Demonstrate component communication

### ✅ **4. Conditional Rendering**
- At least one component with conditional logic
- Examples: form validation, loading states, responsive menus, theme toggles

### ✅ **5. Polished UI Design**
- Professional, elegant CSS styling
- Responsive design (mobile-friendly)
- Consistent color scheme and typography
- Smooth transitions and hover effects

## 🏗️ Detailed Requirements

### **Page 1: Home/Splash Page**

Create an engaging landing page that introduces you professionally:

**Required Elements:**
- Professional headshot or avatar
- Name and professional title
- Brief elevator pitch (2-3 sentences)
- Key skills or technologies
- Call-to-action buttons (View Portfolio, Contact Me)

**Example Content:**
```
Welcome! I'm [Your Name]
Full-Stack Developer & Problem Solver

I'm passionate about creating efficient, user-friendly web applications 
that solve real-world problems. With expertise in JavaScript, React, 
and modern web technologies, I bring ideas to life through code.

[View My Portfolio] [Get In Touch]
```

### **Page 2: Portfolio Page**

Showcase your development projects with a professional gallery:

**Required Elements:**
- Project thumbnails/screenshots
- Project titles and brief descriptions
- Technology stack used for each project
- Links to live sites and/or GitHub repositories
- Filtering or categorization (optional)

**Minimum Projects to Include:**
- Previous capstone projects from this course
- Personal projects or school assignments
- Code snippets or mini-applications
- *Note: If you have fewer than 3 projects, create placeholder projects with mockup descriptions*

**Project Card Example:**
```
[Project Screenshot]
Task Manager App
A full-stack todo application with user authentication 
and real-time updates.
Tech: React, Node.js, MongoDB
[Live Demo] [View Code]
```

### **Page 3: Contact Page**

Professional contact information and resume display:

**Required Elements:**
- HTML-formatted resume/CV
- Contact form with validation
- Professional contact information
- Social/professional links (LinkedIn, GitHub, etc.)

**Contact Form Fields:**
- Name (required)
- Email (required, with validation)
- Subject (required)
- Message (required)
- Submit button with form validation

**Resume Sections:**
- Contact Information
- Professional Summary
- Education
- Technical Skills
- Experience (if applicable)
- Projects

## 🛠️ Technical Implementation Guide

### **1. Project Setup**

```bash
# Create new Vite React project
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install

# Install React Router
npm install react-router-dom

# Start development server
npm run dev
```

### **2. Folder Structure**

```
src/
├── components/
│   ├── Layout/
│   │   ├── Navigation.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── Portfolio/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectGallery.jsx
│   ├── Contact/
│   │   ├── ContactForm.jsx
│   │   └── Resume.jsx
│   └── Common/
│       ├── Button.jsx
│       └── Loading.jsx
├── pages/
│   ├── Home.jsx
│   ├── Portfolio.jsx
│   └── Contact.jsx
├── styles/
│   ├── globals.css
│   └── components/
├── data/
│   └── projects.js
└── App.jsx
```

### **3. Router Implementation**

```jsx
// App.jsx example structure
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Layout/Navigation'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
```

### **4. Props Example - Project Data**

```jsx
// data/projects.js
export const projects = [
  {
    id: 1,
    title: "Task Manager App",
    description: "Full-stack todo application with authentication",
    image: "/images/task-manager.png",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://my-task-app.com",
    githubUrl: "https://github.com/username/task-manager"
  },
  // ... more projects
]

// Portfolio.jsx
import { projects } from '../data/projects'
import ProjectCard from '../components/Portfolio/ProjectCard'

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
```

### **5. Conditional Rendering Example - Contact Form**

```jsx
// ContactForm.jsx
function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form validation logic
    if (isValid) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="contact-form">
      {isSubmitted ? (
        <div className="success-message">
          <h3>Thank you for your message!</h3>
          <p>I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          {errors.email && <span className="error">{errors.email}</span>}
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  )
}
```

## 🎨 Design Guidelines

### **Color Scheme Suggestions**
- **Professional:** Navy blue, white, light gray
- **Creative:** Teal, orange, cream
- **Minimalist:** Black, white, one accent color
- **Modern:** Dark theme with bright accent colors

### **Typography**
- Use max 2-3 font families
- Ensure readability across devices
- Create clear hierarchy with font sizes

### **Layout Principles**
- Clean, uncluttered design
- Consistent spacing and alignment
- Responsive grid systems
- Mobile-first approach

## 📱 Responsive Design Requirements

Your portfolio must work well on:
- **Desktop:** 1200px+ screens
- **Tablet:** 768px - 1199px screens  
- **Mobile:** 320px - 767px screens

### **Mobile Considerations:**
- Hamburger menu for navigation
- Stacked layout instead of side-by-side
- Touch-friendly button sizes
- Readable text without zooming

## 🚀 Bonus Features (Optional)

Enhance your portfolio with these additional features:

- **Dark/Light Theme Toggle** (great for Context demonstration)
- **Project Filtering** by technology or category
- **Animated Transitions** with CSS or libraries
- **Contact Form Integration** with EmailJS or similar service
- **Blog Section** for technical writing
- **Skills Progress Bars** or interactive elements
- **Testimonials Section** from peers or instructors

## 📤 Submission Requirements

### **Deliverables:**

1. **GitHub Repository**
   - Clean, organized code with descriptive commits
   - README.md with project description and setup instructions
   - Live demo link (deploy to Netlify, Vercel, or GitHub Pages)

2. **Live Website**
   - Deployed and accessible via URL
   - All features working properly
   - Responsive on multiple devices

3. **Documentation**
   - Brief project reflection (what you learned, challenges faced)
   - Future improvements you'd like to make

### **Submission Format:**
```
Portfolio Submission - [Your Name]

Live Site: [URL]
GitHub Repo: [URL]

Brief Description:
[2-3 sentences about your portfolio and key features]

Technical Highlights:
- React Router implementation
- [Your props/context usage]
- [Your conditional rendering feature]
- [CSS technique you're proud of]

Reflection:
[What you learned and what you'd improve]
```

## 📊 Grading Rubric

| Criteria | Excellent (A) | Good (B) | Satisfactory (C) | Needs Improvement (F) |
|----------|---------------|----------|------------------|-----------------------|
| **React Implementation** | All requirements met with advanced features | All requirements met | Most requirements met | Missing key requirements |
| **UI/UX Design** | Professional, polished, exceptional design | Clean, professional appearance | Basic but functional design | Poor design or usability |
| **Code Quality** | Clean, well-organized, documented | Good structure and readability | Functional but messy | Poor code organization |
| **Responsiveness** | Perfect on all devices | Works well on most devices | Basic mobile support | Not mobile-friendly |
| **Content Quality** | Compelling, professional content | Good, relevant content | Basic content present | Incomplete or poor content |

## 💡 Tips for Success

### **Planning Phase:**
1. Sketch your layout before coding
2. Choose your color scheme and fonts first
3. Gather all content (text, images, project info)
4. Plan your component structure

### **Development Phase:**
1. Start with basic functionality, add styling later
2. Build one page at a time
3. Test responsiveness frequently
4. Commit your code regularly

### **Polish Phase:**
1. Get feedback from peers
2. Test on different devices and browsers
3. Optimize images and performance
4. Proofread all content

### **Common Mistakes to Avoid:**
- Starting with complex styling before basic functionality works
- Not planning responsive design from the beginning
- Forgetting to test the live deployed version
- Using placeholder text instead of real, professional content

## 🆘 Getting Help

If you're stuck:
1. Review previous exercises and examples
2. Check React Router and React documentation
3. Ask classmates or instructors
4. Search for specific solutions online
5. Start with a simpler version and build up

Remember: This portfolio represents you as a developer. Take pride in creating something that showcases your skills and personality!

---

**Due Date:** [Insert Due Date]  
**Estimated Time:** 15-25 hours over the week  
**Good Luck!** 🚀