
import './Work.css'

const projects = [
  {
    number: '01',
    title: 'Restaurant application',
    category: 'WEB APPLICATION',
    description:
      'A modern responsive website built with a clean interface and smooth user experience.',
    url: 'https://nammi.free.nf',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=90',
    action: 'Visit website',
  },
  {
    number: '02',
    title: 'Meenaka college',
    category: 'LIVE WEBSITE',
    description:
      'A clean and simple website designed for an easy and engaging browsing experience.',
    url: 'https://meenaka.free.nf',
   image:
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90',
    action: 'Visit website',
  },
  {
    number: '03',
    title: 'Gym Website',
    category: 'LIVE WEBSITE',
    description:
      'A responsive fitness website created for gym services, workouts and fitness information.',
    url: 'https://gymwebsite.free.nf',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90',
    action: 'Visit website',
  },
  {
    number: '04',
    title: 'Restaurant Management',
    category: 'FULL-STACK APPLICATION',
    description:
      'A restaurant management web application developed using PHP, MySQL, HTML and CSS.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=90',
    action: 'Project details',
  },
  {
    number: '05',
    title: 'Plant Leaf Disease Detection',
    category: 'MACHINE LEARNING',
    description:
      'A CNN-based machine learning project for identifying diseases from plant leaf images.',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=90',
    action: 'Project details',
  },
  {
    number: '06',
    title: 'Driver Drowsiness Detection',
    category: 'COMPUTER VISION',
    description:
      'A computer vision project using CNN concepts to detect driver drowsiness and improve road safety.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=90',
    action: 'Project details',
  },
]

export default function Work() {
  return (
    <section className="work-section" id="work">
      <div className="container">

        {/* Header */}
        <div className="row align-items-end gy-4 work-heading">

          <div className="col-lg-7">
            <div className="work-eyebrow">
              <span></span>
              SELECTED PROJECTS
            </div>

            <h1 className="work-title">
              Work I&apos;m <br />
              <span>proud of.</span>
            </h1>
          </div>

          <div className="col-lg-5">
            <p className="work-intro">
              Live websites, full-stack development, web applications
              and machine learning experiments built with modern technologies.
            </p>
          </div>

        </div>

        {/* Project Cards */}
        <div className="row g-4 project-grid">

          {projects.map((project) => (
            <div
              className="col-sm-6 col-lg-4"
              key={project.number}
            >

              <article className="project-card">

                {/* Project Image */}
                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />

                  <div className="project-overlay"></div>

                  {/* Number & Category */}
                  <div className="project-top">

                    <span className="project-number">
                      {project.number}
                    </span>

                    <span className="project-type">
                      {project.category}
                    </span>

                  </div>

                  {/* Image Bottom */}
                  <div className="project-image-bottom">

                    <h2>{project.title}</h2>

                    <span className="project-arrow">
                      ↗
                    </span>

                  </div>

                </div>

                {/* Card Content */}
                <div className="project-content">

                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span className="meta-line"></span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button"
                    >
                      <span>{project.action}</span>
                      <strong>↗</strong>
                    </a>
                  ) : (
                    <span className="project-button project-disabled">
                      <span>{project.action}</span>
                      <strong>↗</strong>
                    </span>
                  )}

                </div>

              </article>

            </div>
          ))}

        </div>

        {/* Footer */}
        <div className="work-footer">
          <span>06 PROJECTS</span>

          <p>
            Building, learning and improving one project at a time.
          </p>
        </div>

      </div>
    </section>
  )
}

