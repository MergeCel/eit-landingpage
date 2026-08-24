import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const MEMBERS = [
  { src: '/assets/foto1.png', name: 'Timothy Walukow', role: 'Project Manager', quote: 'makan untuk hidup' },
  { src: '/assets/foto2.png', name: 'Marcello Chrisdiantoro', role: 'Programmer', quote: 'Fokus pada progres, bukan validasi.' },
  { src: '/assets/foto3.png', name: 'Florecita Wenny', role: 'Marketing', quote: 'Quote 03 here.' },
  { src: '/assets/foto4.png', name: 'Aurellya Yocelyn Prasista', role: 'Quality Assurance (QA)', quote: 'it`s fine to fake it `til you make it `til you do `til it`s true.' },
  { src: '/assets/foto5.png', name: 'Kharizma Rizkiah', role: 'UI/UX Designer', quote: 'Quote 05 here.' },
  { src: '/assets/foto6.png', name: 'Raden Aliyah Panji Anom', role: 'System Analyst', quote: 'Don\'t stop exist, live with purpose' },
  { src: '/assets/foto7.png', name: 'Kayla Naomy Nataya', role: 'System Analyst', quote: 'Live life to the fullest' },
  { src: '/assets/foto8.png', name: 'Dzaky Mubarak', role: 'System Analyst', quote: 'Quote 08 here.' },
]

export default function AboutUs() {
  const introRef = useReveal()
  const flick = useReveal(300)
  const spark = useReveal(300)
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <section className="about" id="about">
      {/* Sub-section 1 : Intro / Bio */}
      <div className="about-intro" ref={introRef}>
        <p className="about-intro__count">8 TEAM<br />MEMBERS</p>
        <span className="about-intro__line" aria-hidden="true" />
        <div className="about-intro__circle">
          <p className="about-intro__bio">
            We&apos;re a team of creators, strategists, and tech builders coming
            together to turn complex challenges into seamless digital solutions.
            For us, it&apos;s not just about finishing tasks, it&apos;s about
            creating real business impact, solving problems, and enjoying the
            process every step of the way.
          </p>
        </div>
        <span className="about-intro__line" aria-hidden="true" />
        <p className="about-intro__year">2026</p>
      </div>

      {/* Sub-section 2 : Meet the Squad */}
      <div className="about-squad" ref={flick}>
        <div className="squad-grid">
          <div className="squad-cell squad-cell--1">
            <img
              src="/assets/foto1.png"
              alt="Team member 01"
              className="squad-photo squad-photo--1"
              onClick={() => setSelectedMember(MEMBERS[0])}
            />
            <span className="photo-label">[01]</span>
          </div>
          <div className="squad-intro">
            <h2 className="squad-intro__title">Meet<br />the<br />Squad</h2>
            <span className="squad-intro__dot" aria-hidden="true" />
            <p className="squad-intro__tag">
              We build slick, reliable digital systems that move your business
              forward. Simple as that.
            </p>
          </div>
          <div className="squad-cell squad-cell--2">
            <img
              src="/assets/foto2.png"
              alt="Team member 02"
              className="squad-photo squad-photo--2"
              onClick={() => setSelectedMember(MEMBERS[1])}
            />
            <span className="photo-label">[02]</span>
          </div>
          <div className="squad-cell squad-cell--3">
            <img
              src="/assets/foto3.png"
              alt="Team member 03"
              className="squad-photo squad-photo--3"
              onClick={() => setSelectedMember(MEMBERS[2])}
            />
            <span className="photo-label">[03]</span>
          </div>
          <div className="squad-cell squad-cell--4">
            <img
              src="/assets/foto4.png"
              alt="Team member 04"
              className="squad-photo squad-photo--4"
              onClick={() => setSelectedMember(MEMBERS[3])}
            />
            <span className="photo-label">[04]</span>
          </div>
          <div className="squad-cell squad-cell--5">
            <img
              src="/assets/foto5.png"
              alt="Team member 05"
              className="squad-photo squad-photo--5"
              onClick={() => setSelectedMember(MEMBERS[4])}
            />
            <span className="photo-label">[05]</span>
          </div>
          <div className="squad-cell squad-cell--6">
            <img
              src="/assets/foto6.png"
              alt="Team member 06"
              className="squad-photo squad-photo--6"
              onClick={() => setSelectedMember(MEMBERS[5])}
            />
            <span className="photo-label">[06]</span>
          </div>
          <div className="squad-cell squad-cell--7">
            <img
              src="/assets/foto7.png"
              alt="Team member 07"
              className="squad-photo squad-photo--7"
              onClick={() => setSelectedMember(MEMBERS[6])}
            />
            <span className="photo-label">[07]</span>
          </div>
          <div className="squad-cell squad-cell--8">
            <img
              src="/assets/foto8.png"
              alt="Team member 08"
              className="squad-photo squad-photo--8"
              onClick={() => setSelectedMember(MEMBERS[7])}
            />
            <span className="photo-label">[08]</span>
          </div>
        </div>
      </div>

      {/* Sub-section 3 : Small Squad, Big Energy */}
      <div className="about-energy" ref={spark}>
        <svg
          className="about-energy__spark"
          viewBox="0 0 40 40"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M20 0
              C20 18.5 21.5 20 40 20
              C21.5 20 20 21.5 20 40
              C20 21.5 18.5 20 0 20
              C18.5 20 20 18.5 20 0
              Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="about-energy__title">Small squad, big energy</h2>
      </div>

      {/* Member detail modal */}
      {selectedMember && (
        <div className="member-modal-overlay" onClick={() => setSelectedMember(null)}>
          <button
            className="member-modal__close"
            onClick={() => setSelectedMember(null)}
            aria-label="Close"
          ></button>
          <div className="member-modal" onClick={(e) => e.stopPropagation()}>
            <div className="member-modal__photo">
              <img src={selectedMember.src} alt={selectedMember.name} />
            </div>
            <div className="member-modal__info">
              <h3 className="member-modal__name">{selectedMember.name}</h3>
              <p className="member-modal__role">{selectedMember.role}</p>
              <p className="member-modal__quote">&ldquo;{selectedMember.quote}&rdquo;</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
