// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Create main app structure
    const root = document.getElementById('root');
    createApp(root);
  
    // Initialize navigation
    initNavigation();
  
    // Add scroll animations
    initScrollAnimations();
  });
  
  // Create the application structure
  function createApp(rootElement) {
    // Create header
    const header = document.createElement('header');
    header.innerHTML = `
      <nav>
        <a href="index.html" class="logo">AARON DENIZ</a>
        <ul class="nav-links">
          <li><a href="index.html" class="active">Home</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="passions.html">Passions</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn">☰</button>
      </nav>
    `;
    rootElement.appendChild(header);
  
    // Get current page
    const currentPage = getCurrentPage();
    
    // Create main container with animation
    const main = document.createElement('main');
    main.className = 'page-container';
    
    // Add page content based on current URL
    switch(currentPage) {
      case 'index':
        createHomePage(main);
        break;
      case 'projects':
        createProjectsPage(main);
        break;
      case 'passions':
        createPassionsPage(main);
        break;
      case 'contact':
        createContactPage(main);
        break;
      default:
        createHomePage(main);
    }
    
    rootElement.appendChild(main);
    
    // Create footer
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-content">
        <div class="social-links">
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
        <p class="copyright">© ${new Date().getFullYear()} Aaron Deniz. All rights reserved.</p>
      </div>
    `;
    rootElement.appendChild(footer);
  }
  
  // Initialize mobile navigation
  function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }
    
    // Set active navigation link
    const currentPage = getCurrentPage();
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
      item.classList.remove('active');
      const itemPage = item.getAttribute('href').split('.')[0];
      if (itemPage === currentPage || (currentPage === '' && itemPage === 'index')) {
        item.classList.add('active');
      }
    });
  }
  
  // Get current page from URL
  function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page || 'index';
  }
  
  // Initialize scroll animations
  function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Create Home Page content
  function createHomePage(container) {
    const homeContent = document.createElement('div');
    
    // Hero Section
    homeContent.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <h1>Hi, I'm <span class="highlight">Aaron Deniz</span></h1>
          <p>Engineer, F1 Enthusiast, Runner, and Football Fan</p>
          <a href="contact.html" class="btn">Get In Touch</a>
        </div>
      </section>
      
      <section class="about">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <img src="/src/images/1.JPG" alt="Aaron Deniz" class="about-img">
          <div class="about-text">
            <h3>Engineer & Enthusiast</h3>
            <p>Hello! I'm Aaron Deniz, an engineer with a passion for automotive technology, particularly F1 racing. I specialize in developing innovative solutions that push the boundaries of engineering and performance.</p>
            <p>With experience in various engineering projects, I've developed a keen eye for detail and a problem-solving mindset that allows me to tackle complex challenges. My work combines technical expertise with creativity to deliver exceptional results.</p>
            <p>When I'm not engineering, you can find me running trails, following F1 races, or enjoying a good football match. These passions fuel my creativity and keep me motivated to push boundaries in everything I do.</p>
          </div>
        </div>
      </section>
      
      <section class="testimonials">
        <h2 class="section-title">Testimonials</h2>
        <div class="testimonial-container">
          <div class="testimonial-card fade-in">
            <div class="testimonial-header">
              <img src="/src/images/2.JPG" alt="John Smith" class="testimonial-img">
              <div class="testimonial-info">
                <h4>Ethan Deniz</h4>
                <p>Brother</p>
              </div>
            </div>
            <div class="testimonial-text">
              <p>Aaron's engineering skills are exceptional. His attention to detail and innovative thinking made our project a huge success. He's not just technically skilled but also great at explaining complex concepts.</p>
            </div>
          </div>
          
          <div class="testimonial-card fade-in">
            <div class="testimonial-header">
              <img src="/src/images/3.JPG" alt="Emily Johnson" class="testimonial-img">
              <div class="testimonial-info">
                <h4>Avril</h4>
                <p></p>
              </div>
            </div>
            <div class="testimonial-text">
              <p>Working with Aaron was a pleasure. His passion for engineering and F1 brings a unique perspective to problems. He's dedicated, knowledgeable, and always ready to help the team.</p>
            </div>
          </div>
          
          <div class="testimonial-card fade-in">
            <div class="testimonial-header">
              <img src="/src/images/4.JPG" alt="Michael Chen" class="testimonial-img">
              <div class="testimonial-info">
                <h4>Dev</h4>
                <p></p>
              </div>
            </div>
            <div class="testimonial-text">
              <p>Aaron's contributions to our automotive project were invaluable. His understanding of engineering principles combined with his passion for racing gave us insights that put our product ahead of the competition.</p>
            </div>
          </div>
        </div>
      </section>
    `;
    
    container.appendChild(homeContent);
  }
  
  // Create Projects Page content
  function createProjectsPage(container) {
    const projectsContent = document.createElement('div');
    projectsContent.className = 'container';
    projectsContent.style.padding = '150px 5% 100px';
    
    projectsContent.innerHTML = `
      <h1 class="section-title">My Projects</h1>
      <p style="text-align: center; max-width: 800px; margin: 0 auto 50px;">
        Here are some of my engineering projects focused on automotive technology, F1 racing, and performance optimization.
      </p>
      
      <div class="projects-grid">
        <div class="project-card fade-in">
          <img src="/src/images/5.jpeg" alt="F1 Aerodynamics Simulation" class="project-img">
          <div class="project-info">
            <h3>F1 Aerodynamics Simulation</h3>
            <p>A computational fluid dynamics project that simulates the aerodynamic performance of F1 car components.</p>
            <div class="project-tags">
              <span class="project-tag">Python</span>
              <span class="project-tag">CFD</span>
              <span class="project-tag">F1</span>
            </div>
            <a href="#" class="btn">View Project</a>
          </div>
        </div>
        
        <div class="project-card fade-in">
          <img src="/src/images/6.JPG" alt="Electric Vehicle Battery Management" class="project-img">
          <div class="project-info">
            <h3>EV Battery Management System</h3>
            <p>Designed and implemented an advanced battery management system for electric vehicles to optimize performance and longevity.</p>
            <div class="project-tags">
              <span class="project-tag">C++</span>
              <span class="project-tag">Hardware</span>
              <span class="project-tag">Automotive</span>
            </div>
            <a href="#" class="btn">View Project</a>
          </div>
        </div>
        
        <div class="project-card fade-in">
          <img src="/src/images/7.PNG" alt="Race Telemetry Analysis" class="project-img">
          <div class="project-info">
            <h3>Race Telemetry Analysis Tool</h3>
            <p>A software tool that analyzes telemetry data from racing events to provide insights into performance optimization.</p>
            <div class="project-tags">
              <span class="project-tag">JavaScript</span>
              <span class="project-tag">Data Analysis</span>
              <span class="project-tag">Racing</span>
            </div>
            <a href="#" class="btn">View Project</a>
          </div>
        </div>
        
        <div class="project-card fade-in">
          <img src="/src/images/8.AVIF" alt="Running Performance App" class="project-img">
          <div class="project-info">
            <h3>Runner's Performance Tracker</h3>
            <p>A mobile application that tracks running performance metrics and provides personalized training recommendations.</p>
            <div class="project-tags">
              <span class="project-tag">Swift</span>
              <span class="project-tag">iOS</span>
              <span class="project-tag">Running</span>
            </div>
            <a href="#" class="btn">View Project</a>
          </div>
        </div>
      </div>
    `;
    
    container.appendChild(projectsContent);
  }
  
  // Create Passions Page content
  function createPassionsPage(container) {
    const passionsContent = document.createElement('div');
    passionsContent.className = 'container';
    passionsContent.style.padding = '150px 5% 100px';
    
    passionsContent.innerHTML = `
      <h1 class="section-title">My Passions</h1>
      
      <section class="passion-section fade-in">
        <h2>Formula 1</h2>
        <div class="passion-content">
          <img src="/src/images/9.webp" alt="Formula 1" class="passion-img">
          <div class="passion-text">
            <p>Formula 1 represents the pinnacle of motorsport engineering and human performance. My fascination with F1 goes beyond the races - I'm captivated by the technical innovations, aerodynamic principles, and the constant push for improvement.</p>
            <p>As a dedicated fan of Lando Norris and McLaren, I follow their development closely, analyzing their technical decisions and race strategies. The way McLaren has evolved their car to become competitive again demonstrates the importance of persistence and innovation.</p>
          </div>
        </div>
        
        <div class="f1-grid">
          <div class="f1-card fade-in">
            <img src="/src/images/10.JPG" alt="Lando Norris" class="f1-img">
            <div class="f1-info">
              <h3>Lando Norris</h3>
              <p>My favorite driver, Lando represents the new generation of F1 talent. His skilled driving, technical feedback, and positive personality make him a standout on the grid.</p>
            </div>
          </div>
          
          <div class="f1-card fade-in">
            <img src="/src/images/11.JPG" alt="McLaren F1 Team" class="f1-img">
            <div class="f1-info">
              <h3>McLaren F1 Team</h3>
              <p>McLaren combines rich heritage with cutting-edge innovation. Their journey back to the front of the grid demonstrates resilience and technical excellence.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="passion-section fade-in">
        <h2>Running</h2>
        <div class="passion-content">
          <div class="passion-text">
            <p>Running is more than just exercise for me - it's a way to clear my mind, challenge myself, and connect with nature. I regularly participate in local races and enjoy pushing my limits in both speed and endurance events.</p>
            <p>The discipline and determination required for long-distance running have valuable parallels in engineering. Both require strategic planning, efficient resource management, and continuous adaptation based on feedback.</p>
          </div>
          <img src="/src/images/12.JPG" alt="Running" class="passion-img">
        </div>
      </section>
      
      <section class="passion-section fade-in">
        <h2>Football</h2>
        <div class="passion-content">
          <img src="/src/images/13.avif" alt="Football" class="passion-img">
          <div class="passion-text">
            <p>Football combines individual skill with team strategy, making it both exciting to watch and rich with tactical complexity. I appreciate the beautiful game for its moments of brilliance and the way it brings people together.</p>
            <p>Whether playing casually with friends or analyzing professional matches, football provides both an escape from work and inspiration for problem-solving approaches that can be applied to engineering challenges.</p>
          </div>
        </div>
      </section>
    `;
    
    container.appendChild(passionsContent);
  }
  
  // Create Contact Page content
  function createContactPage(container) {
    const contactContent = document.createElement('div');
    contactContent.className = 'container';
    contactContent.style.padding = '150px 5% 100px';
    
    contactContent.innerHTML = `
      <h1 class="section-title">Get In Touch</h1>
      <p style="text-align: center; max-width: 600px; margin: 0 auto 50px;">
        Have a project in mind or just want to connect? Feel free to reach out using the form below or through my contact information.
      </p>
      
      <div class="contact-container">
        <div class="contact-info fade-in">
          <h3>Contact Information</h3>
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <span class="contact-text">aarondeniz17@gmail.com</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <span class="contact-text">+91 7506642353</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <span class="contact-text">Mumbai, India</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">💼</span>
            <span class="contact-text">Available for freelance projects</span>
          </div>
        </div>
        
        <form class="contact-form fade-in">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    `;
    
    container.appendChild(contactContent);
    
    // Add form submission event
    const form = contactContent.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! I will get back to you soon.');
      form.reset();
    });
  }
  