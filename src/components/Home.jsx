import './Home.css'
import portrait from '../assets/vamsi.jpeg'

export default function Home() {
  return (
    <section className="home-section" id="home">
      <img className="home-backdrop" src={portrait} alt="" aria-hidden="true" />

      {/* Full screen image */}
      <img
        className="home-portrait"
        src={portrait}
        alt="Vamsi Nammi outdoors"
      />

      {/* Dark overlay */}
      <div className="home-shade" aria-hidden="true" />

      {/* Name on image */}
      <div className="container home-copy">
        <div className="home-title">
          <p>FULL STACK DEVELOPER</p>
          <h1>Vamsi Nammi</h1>
          <h2> Web Developer</h2>
        </div>
      </div>

    </section>
  )
}
