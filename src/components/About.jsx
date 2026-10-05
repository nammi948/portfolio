import './About.css'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('about-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'SQL',
    'REST API',
    'CNN',
  ]

  const projects = [
    {
      number: '01',
      title: 'Restaurant Management',
      description:
        'Web application developed using PHP, MySQL, HTML and CSS for managing restaurant-related operations.',
      tech: 'PHP · MySQL · HTML · CSS',
    },
    {
      number: '02',
      title: 'Plant Leaf Disease Detection',
      description:
        'CNN-based machine learning project designed to identify diseases from plant leaf images.',
      tech: 'Python · CNN · Machine Learning',
    },
    {
      number: '03',
      title: 'Driver Drowsiness Detection',
      description:
        'Computer vision project using CNN concepts to detect driver drowsiness and improve road safety.',
      tech: 'Python · CNN · Computer Vision',
    },
    {
      number: '04',
      title: 'Gym Website',
      description:
        'Responsive gym website designed to provide information about fitness services and gym activities.',
      tech: 'HTML · CSS · JavaScript',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="about-section"
      id="about"
    >
      <div className="container">

        {/* ================= HEADER ================= */}
        <div className="about-header row align-items-end">

          <div className="col-lg-7">
            <p className="about-eyebrow">
              <span></span>
              ABOUT ME
            </p>

            <h1 className="about-heading">
              Learning today.
              <br />
              <span>Building tomorrow.</span>
            </h1>
          </div>

          <div className="col-lg-5">
            <p className="about-intro">
              Aspiring software engineer with a strong foundation in
              software development, artificial intelligence and
              full-stack web technologies.
            </p>
          </div>

        </div>


        {/* ================= PROFILE ================= */}
        <div className="row about-profile">

          <div className="col-lg-4">
            <div className="profile-card">

              <div className="profile-number">
                01
              </div>

              <h3>
                Vamsi
                <br />
                Nammi
              </h3>

              <p>
                SOFTWARE DEVELOPER
              </p>

              <div className="profile-line"></div>

              <div className="profile-contact">

                <a href="tel:8581815125">
                  +91 85818 15125
                </a>

                <a href="mailto:nammivamsi131@gmail.com">
                  nammivamsi131@gmail.com
                </a>

                <span>
                  Vizianagaram, India
                </span>

              </div>

              <div className="profile-links">

                <a
                  href="https://linkedin.com/in/nammi-vamsi-414107210"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/nammi948"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="/Vamsinammi_Resume.pdf"
                  download="Vamsi_Nammi_Resume.pdf"
                >
                  Download Resume ↓
                </a>

              </div>

            </div>
          </div>


          <div className="col-lg-8">

            <div className="about-story">

              <p className="story-large">
                I&apos;m a Computer Science graduate specializing in
                <strong> Artificial Intelligence & Machine Learning</strong>.
                I enjoy turning ideas into practical, useful and
                visually engaging digital experiences.
              </p>

              <p>
                During my Full Stack Developer internship, I worked
                across frontend and backend development, API
                integration and deployment. These experiences helped
                me understand how real-world applications are
                designed, developed and delivered.
              </p>

              <p>
                I learn best by building. From PHP and SQL based web
                applications to CNN-based machine learning projects,
                I continuously explore new technologies and improve
                my problem-solving skills.
              </p>

              <p>
                My career goal is to join a professional software
                engineering team where I can contribute to meaningful
                products while continuing to grow as a developer.
              </p>

            </div>

          </div>

        </div>


        {/* ================= QUICK FACTS ================= */}
        <div className="about-facts-section">

          <div className="section-mini-title">
            <span>02</span>
            QUICK FACTS
          </div>

          <div className="row g-0 facts-grid">

            <div className="col-6 col-lg-3">
              <div className="fact-card">
                <strong>B.Tech</strong>
                <span>AI & Machine Learning</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fact-card">
                <strong>7.37</strong>
                <span>Graduation CGPA</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fact-card">
                <strong>Full Stack</strong>
                <span>Developer Internship</span>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <div className="fact-card">
                <strong>Google</strong>
                <span>AI Virtual Internship</span>
              </div>
            </div>

          </div>
        </div>


        {/* ================= EDUCATION ================= */}
        <div className="about-block">

          <div className="section-mini-title">
            <span>03</span>
            EDUCATION
          </div>

          <div className="education-list">

            <div className="education-item">
              <div className="education-year">
                2021 — 2024
              </div>

              <div className="education-content">
                <h3>
                  Bachelor of Technology
                </h3>

                <p>
                  Artificial Intelligence & Machine Learning
                </p>

                <span>
                  Avanthi Institute of Engineering and Technology
                </span>

                <b>
                  CGPA: 7.37
                </b>
              </div>
            </div>


            <div className="education-item">
              <div className="education-year">
                2017 — 2020
              </div>

              <div className="education-content">
                <h3>
                  Diploma
                </h3>

                <p>
                  GBR Government Polytechnic
                </p>

                <b>
                  Percentage: 70%
                </b>
              </div>
            </div>


            <div className="education-item">
              <div className="education-year">
                2016 — 2017
              </div>

              <div className="education-content">
                <h3>
                  Secondary Education
                </h3>

                <p>
                  ZPH (Boys) School
                </p>

                <b>
                  CGPA: 8.5
                </b>
              </div>
            </div>

          </div>

        </div>


        {/* ================= SKILLS ================= */}
        <div className="about-block skills-block">

          <div className="row align-items-end">

            <div className="col-lg-5">
              <div className="section-mini-title">
                <span>04</span>
                TECHNICAL SKILLS
              </div>

              <h2 className="skills-heading">
                Tools I use to
                <br />
                <span>build things.</span>
              </h2>
            </div>

            <div className="col-lg-7">

              <div className="skills-grid">

                {skills.map((skill, index) => (
                  <div
                    className="skill-card"
                    key={skill}
                    style={{
                      '--skill-delay': `${index * 0.08}s`,
                    }}
                  >
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <strong>
                      {skill}
                    </strong>

                    <i>↗</i>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ================= EXPERIENCE ================= */}
        <div className="about-block">

          <div className="section-mini-title">
            <span>05</span>
            EXPERIENCE
          </div>

          <div className="experience-card">

            <div className="experience-number">
              01
            </div>

            <div className="experience-main">

              <p>
                FULL STACK DEVELOPER INTERN
              </p>

              <h3>
                Full Stack Developer Internship
              </h3>

              <span>
                Frontend · Backend · API Integration · Deployment
              </span>

              <div className="experience-description">
                Worked on frontend and backend development,
                integrated REST APIs and contributed to application
                deployment. Gained practical experience in building
                complete web application workflows.
              </div>

            </div>

            <div className="experience-status">
              EXPERIENCE
            </div>

          </div>

        </div>


        {/* ================= PROJECTS ================= */}
        <div className="about-block projects-block">

          <div className="section-mini-title">
            <span>06</span>
            PROJECTS
          </div>

          <div className="projects-list">

            {projects.map((project) => (
              <div
                className="project-row"
                key={project.number}
              >

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <span className="project-tech">
                    {project.tech}
                  </span>

                </div>

                <span className="project-arrow">
                  ↗
                </span>

              </div>
            ))}

          </div>

        </div>


        {/* ================= CERTIFICATIONS ================= */}
        <div className="about-block">

          <div className="section-mini-title">
            <span>07</span>
            CERTIFICATIONS
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="certificate-card">

                <span>
                  CERTIFICATION
                </span>

                <h3>
                  Full Stack Developer
                </h3>

                <p>
                  Professional certification focused on
                  full-stack web development.
                </p>

                <strong>
                  ↗
                </strong>

              </div>
            </div>

            <div className="col-md-6">
              <div className="certificate-card">

                <span>
                  VIRTUAL INTERNSHIP
                </span>

                <h3>
                  Artificial Intelligence
                </h3>

                <p>
                  Google AI Virtual Internship focused on
                  artificial intelligence concepts and practical
                  learning.
                </p>

                <strong>
                  ↗
                </strong>

              </div>
            </div>

          </div>

        </div>


        {/* ================= CAREER OBJECTIVE ================= */}
        <div className="career-objective">

          <div className="career-label">
            CAREER OBJECTIVE
          </div>

          <h2>
            Ready to turn
            <br />
            <span>ideas into impact.</span>
          </h2>

          <p>
            Seeking an entry-level software engineering position
            where I can leverage my coding skills, contribute to
            innovative projects and grow alongside an experienced
            engineering team.
          </p>

        </div>


      </div>
    </section>
  )
}
