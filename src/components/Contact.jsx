export default function Contact() {
  return (
    <section className="contact-section section-space">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <p className="eyebrow"><span /> GET IN TOUCH</p>
            <h1 className="section-title">Let&apos;s make<br /><span>something matter.</span></h1>
            <p className="contact-description">Open to entry-level software engineering opportunities and interesting projects. Drop me a line.</p>
            <a className="contact-email" href="mailto:nammivamsi131@gmail.com">nammivamsi131@gmail.com <span>↗</span></a>
            <a className="contact-phone" href="tel:+918581815125">+91 85818 15125</a>
            <div className="contact-socials">
              <a href="https://linkedin.com/in/nammi-vamsi-414107210" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/nammi948" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="map-heading">
              <div><span className="eyebrow">FIND ME AROUND</span><h2>Cheepurupalli, Andhra Pradesh</h2></div>
              <span className="map-pin" aria-hidden="true">↗</span>
            </div>
            <div className="map-frame">
              <iframe
                title="Map showing Cheepurupalli, Andhra Pradesh"
                src="https://maps.google.com/maps?q=Cheepurupalli%2C%20Vizianagaram%2C%20Andhra%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
