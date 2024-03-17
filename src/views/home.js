import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Features from '../components/features'
import Practice from '../components/practice'
import Doctor from '../components/doctor'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Medica template</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading">
            <span className="home-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section">
              <div className="home-heading01">
                <span className="home-header01">Cardiology</span>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-section1">
              <div className="home-heading02">
                <span className="home-header02">Orthopedics</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading03">
                <span className="home-header03">Ophtalmology</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading04">
                <span className="home-header04">Pediatrics</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading05">
                <span className="home-header05">Nutrition</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading06">
                <span className="home-header06">General</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <div className="home-left">
            <img
              alt="image"
              src="/Branding/logo-1500h.png"
              className="home-logo"
            />
            <nav className="home-links">
              <a href="#features" className="home-link">
                Features
              </a>
              <a href="#how-it-works" className="home-link01">
                How it works
              </a>
              <span className="home-link02">Prices</span>
              <a href="#schedule" className="home-link03">
                Contact
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-phone button">
              <img
                alt="image"
                src="/Icons/phone.svg"
                className="home-image06"
              />
              <span className="home-text06">+0 123-456-789</span>
            </button>
            <a href="#book" className="home-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image07"
              />
              <span className="home-text07">Book an appointment</span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home-image08"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text08">Features</span>
                <span className="home-text09">How it works</span>
                <span className="home-text10">Prices</span>
                <span className="home-text11">Contact</span>
                <a href="#book" className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image09"
                  />
                  <span className="home-text12">Book an appointment</span>
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">
                Experienced general practitioners who have an eye for your care
              </h1>
              <p className="home-caption6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button button-main home-book2">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image10"
              />
              <span>Book an appointment</span>
            </button>
          </div>
          <div className="home-image11">
            <img
              alt="image"
              src="/doctor-image-1500w.png"
              className="home-image12"
            />
          </div>
        </div>
        <div id="features" className="home-features">
          <div className="home-content01">
            <Features></Features>
            <Features title="Virtual Clinic"></Features>
            <Features title="Clinical results"></Features>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section className="home-practices1">
        <div className="home-heading08">
          <h2 className="home-text14">Our practices</h2>
          <p className="home-text15">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-content02">
          <div className="home-grid1">
            <Link to="/">
              <div className="home-practice-wrapper">
                <Practice></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper1">
                <Practice title="Orthopedics"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper2">
                <Practice title="Ophtalmology"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper3">
                <Practice title="Pediatrics"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper4">
                <Practice title="Nutrition"></Practice>
              </div>
            </Link>
            <Link to="/">
              <div className="home-practice-wrapper5">
                <Practice title="General"></Practice>
              </div>
            </Link>
          </div>
          <button data-open="practices" className="button button-main">
            <span>All practices</span>
          </button>
        </div>
      </section>
      <section id="how-it-works" className="home-why">
        <div className="home-heading09">
          <h2 className="home-header08">Why choose us</h2>
          <p className="home-header09">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-content03">
          <div className="home-video">
            <video
              src
              poster="/video-1500w.png"
              className="home-video1"
            ></video>
            <div className="home-play">
              <img alt="image" src="/Icons/play.svg" className="home-image13" />
            </div>
          </div>
          <div className="home-caption7">
            <h3 className="home-header10">
              Consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h3>
            <p className="home-header11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </section>
      <section className="home-features1">
        <div className="home-section6">
          <div className="home-content04">
            <div className="home-header12">
              <h2 className="home-heading10">
                Dedicated doctors with the core mission to help.
              </h2>
              <p className="home-capton">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="read-more">
              <span className="home-text17">See our doctors</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="home-image14"
              />
            </div>
          </div>
          <img alt="image" src="/xray-1500w.png" className="home-image15" />
        </div>
        <div className="home-section7">
          <div className="home-content05">
            <div className="home-header13">
              <h2 className="home-heading11">
                Get access to specialty tests and breakthrough information.
              </h2>
              <p className="home-capton1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="read-more">
              <span className="home-text18">Find test</span>
              <img
                alt="image"
                src="/Icons/arrow-2.svg"
                className="home-image16"
              />
            </div>
          </div>
          <img alt="image" src="/lab-1500w.png" className="home-image17" />
        </div>
        <div className="home-section8">
          <div className="home-content06">
            <div className="home-header14">
              <h2 className="home-heading12">
                Find out how we can help you help you.
              </h2>
              <p className="home-capton2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <button className="button button-main home-book3">
              <span>Book a virtual appointment</span>
            </button>
          </div>
          <img
            alt="image"
            src="/examination-1500w.png"
            className="home-image18"
          />
        </div>
        <button className="home-book4 button button-main">
          <span>Book a virtual appointment</span>
        </button>
      </section>
      <section id="schedule" className="home-schedule">
        <div className="home-content07">
          <div className="home-header15">
            <h2 className="home-heading13">
              Schedule an in person or virtual appointment today
            </h2>
            <p className="home-caption8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="home-types">
            <a
              href="#book"
              className="home-book-person button button-main button-white"
            >
              <span>Book in person appointment</span>
            </a>
            <button className="button button-main button-white home-book-person1">
              <span>Book virtual appointment</span>
            </button>
          </div>
        </div>
      </section>
      <div className="home-search">
        <div className="home-heading14">
          <h2 className="home-text23">Search diseases &amp; conditions</h2>
          <p className="home-text24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-content08">
          <div className="home-type-one">
            <div className="home-alphabet">
              <div data-letter="a" className="letter">
                <span className="home-text25">A</span>
              </div>
              <div data-letter="b" className="letter">
                <span className="home-text26">B</span>
              </div>
              <div data-letter="c" className="letter">
                <span className="home-text27">C</span>
              </div>
              <div data-letter="d" className="letter">
                <span className="home-text28">D</span>
              </div>
              <div data-letter="e" className="letter">
                <span className="home-text29">E</span>
              </div>
              <div data-letter="f" className="letter">
                <span className="home-text30">F</span>
              </div>
              <div data-letter="g" className="letter">
                <span className="home-text31">G</span>
              </div>
              <div data-letter="h" className="letter">
                <span className="home-text32">H</span>
              </div>
              <div data-letter="i" className="letter">
                <span className="home-text33">I</span>
              </div>
              <div data-letter="j" className="letter">
                <span className="home-text34">J</span>
              </div>
              <div data-letter="k" className="letter">
                <span className="home-text35">K</span>
              </div>
              <div data-letter="l" className="letter">
                <span className="home-text36">L</span>
              </div>
              <div data-letter="m" className="letter">
                <span className="home-text37">M</span>
              </div>
              <div data-letter="n" className="letter">
                <span className="home-text38">N</span>
              </div>
              <div data-letter="o" className="letter">
                <span className="home-text39">O</span>
              </div>
              <div data-letter="p" className="letter">
                <span className="home-text40">P</span>
              </div>
              <div data-letter="q" className="letter">
                <span className="home-text41">Q</span>
              </div>
              <div data-letter="r" className="letter">
                <span className="home-text42">R</span>
              </div>
              <div data-letter="s" className="letter">
                <span className="home-text43">S</span>
              </div>
              <div data-letter="t" className="letter">
                <span className="home-text44">T</span>
              </div>
              <div data-letter="u" className="letter">
                <span className="home-text45">U</span>
              </div>
              <div data-letter="v" className="letter">
                <span className="home-text46">V</span>
              </div>
              <div data-letter="w" className="letter">
                <span className="home-text47">W</span>
              </div>
              <div data-letter="x" className="letter">
                <span className="home-text48">X</span>
              </div>
              <div data-letter="y" className="letter">
                <span className="home-text49">Y</span>
              </div>
              <div data-letter="z" className="letter">
                <span className="home-text50">Z</span>
              </div>
            </div>
            <p className="home-text51">
              You don’t know it’s name? Check out symptom checker below
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div data-teleport="results" className="home-results">
              <span className="home-heading15">Results:</span>
              <div data-results="letters" className="home-list"></div>
            </div>
          </div>
          <div className="home-type-two">
            <div className="home-heading16">
              <h3 className="home-text52">Symptom checker</h3>
              <p className="home-text53">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="home-symptoms">
              <div className="home-row">
                <div className="symptom">
                  <span className="home-text54">Abdominal pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text55">Chest pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text56">Constipation</span>
                </div>
                <div className="symptom">
                  <span className="home-text57">Cough</span>
                </div>
                <div className="symptom">
                  <span className="home-text58">Breath difficulty</span>
                </div>
              </div>
              <div className="home-row1">
                <div className="symptom">
                  <span className="home-text59">Red eye</span>
                </div>
                <div className="symptom">
                  <span className="home-text60">Foot pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text61">Foot swelling</span>
                </div>
                <div className="symptom">
                  <span className="home-text62">Headache</span>
                </div>
                <div className="symptom">
                  <span className="home-text63">Heart palpitation</span>
                </div>
              </div>
              <div className="home-row2">
                <div className="symptom">
                  <span className="home-text64">Knee pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text65">Hip pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text66">Low back pain</span>
                </div>
                <div className="symptom">
                  <span className="home-text67">Nasal congestion</span>
                </div>
                <div className="symptom">
                  <span className="home-text68">Neck pain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="book" className="home-book5">
        <div className="home-heading17">
          <h2 className="home-text69">Book an appointment</h2>
          <p className="home-text70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-form">
          <div className="home-types1">
            <div className="book-type">
              <span className="home-text71">In person appointment</span>
            </div>
            <div className="book-type">
              <span className="home-text72">Virtual appointment</span>
            </div>
          </div>
          <div className="home-inputs">
            <input
              type="text"
              placeholder="Name"
              autoComplete="name"
              className="input book-input"
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="input book-input"
            />
            <input
              type="tel"
              placeholder="Phone"
              autoComplete="tel"
              className="input book-input"
            />
            <div className="home-date">
              <input
                type="date"
                placeholder="Date"
                className="input book-input"
              />
              <img
                alt="image"
                src="/Icons/calendar-2.svg"
                className="home-image19"
              />
            </div>
            <input
              type="text"
              placeholder="Practice"
              className="input book-input"
            />
            <div className="home-lower">
              <p className="home-text73">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="home-button">
                <button className="home-book6 button button-main">
                  <span>Book</span>
                </button>
                <p className="home-text75">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text77">adipiscing elit</span>
                  <span>
                    , sed do eiusmod tempor
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text79">incididunt</span>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-meet">
        <div className="home-heading18">
          <h2 className="home-text81">Meet our doctors</h2>
          <p className="home-text82">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-list1">
          <div className="home-controls">
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="previous"
              className="arrow"
            />
            <img
              alt="image"
              src="/Icons/circle-arrow.svg"
              data-doctors="next"
              className="home-forward arrow"
            />
          </div>
          <div data-teleport="doctors" className="home-doctors">
            <Doctor></Doctor>
            <Doctor imageSrc="/Doctors/doctor-2-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-3-300w.png"></Doctor>
            <Doctor imageSrc="/Doctors/doctor-4-300w.png"></Doctor>
          </div>
        </div>
        <div className="home-search1">
          <input
            type="text"
            placeholder="Search by name"
            className="home-textinput5 input book-input"
          />
          <button className="button button-main home-book7">
            <span>Search doctor</span>
          </button>
        </div>
      </section>
      <section className="home-news">
        <div className="home-heading19">
          <h2 className="home-text84">Read our latest news</h2>
          <p className="home-text85">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
        <div className="home-list2">
          <div className="home-item">
            <div className="home-image20">
              <img
                alt="image"
                src="/News/news-logo-1500w.png"
                className="home-image21"
              />
            </div>
            <div className="home-content09">
              <div className="home-details">
                <span className="home-date1">November 23, 2022</span>
                <p className="home-quick-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text86">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image22"
                />
              </div>
            </div>
          </div>
          <div className="home-item1">
            <div className="home-image23">
              <img
                alt="image"
                src="/News/news-1-1500w.png"
                className="home-image24"
              />
            </div>
            <div className="home-content10">
              <div className="home-details1">
                <span className="home-date2">November 23, 2022</span>
                <p className="home-quick-description1">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text87">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image25"
                />
              </div>
            </div>
          </div>
          <div className="home-item2">
            <div className="home-image26">
              <img
                alt="image"
                src="/News/news-2-1500w.png"
                className="home-image27"
              />
            </div>
            <div className="home-content11">
              <div className="home-details2">
                <span className="home-date3">November 23, 2022</span>
                <p className="home-quick-description2">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text88">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image28"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-download">
        <div className="home-main1">
          <img alt="image" src="/phone-1500w.png" className="home-image29" />
          <div className="home-content12">
            <h2 className="home-text89">
              Download our mobile app and book your next appointment
            </h2>
            <div className="home-buttons">
              <button className="home-i-os button button-main">
                <img
                  alt="image"
                  src="/Icons/apple.svg"
                  className="home-image30"
                />
                <span>Download for iOS</span>
              </button>
              <button className="button button-main home-android">
                <img
                  alt="image"
                  src="/Icons/android.svg"
                  className="home-image31"
                />
                <span>Download for Android</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-left1">
          <div className="home-brand">
            <img
              alt="image"
              src="/Branding/logo-2.svg"
              className="home-image32"
            />
            <p className="home-text92">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home-image33"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image34"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image35"
              />
            </div>
          </div>
          <div className="home-legal">
            <span className="home-copyright">
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home-right1">
          <div className="home-list3">
            <span className="home-header16">Menu</span>
            <div className="home-links1">
              <span className="home-link04">Home</span>
              <span className="home-link05">About</span>
              <span className="home-link06">Services</span>
              <span className="home-link07">Blog</span>
              <span className="home-link08">Support</span>
            </div>
          </div>
          <div className="home-list4">
            <span className="home-header17">Resources</span>
            <div className="home-links2">
              <span className="home-link09">Test Results</span>
              <span className="home-link10">Patients</span>
              <span className="home-link11">Doctors</span>
              <span className="home-link12">Health</span>
            </div>
          </div>
          <div className="home-list5">
            <span className="home-header18">Contact</span>
            <div className="home-links3">
              <span className="home-link13">
                24 Street Name, City FI 01234, RO
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="home-link14"
              >
                contact@template.new
              </a>
              <a href="tel:(004) 234 - 5678" className="home-link15">
                (004) 234 - 5678
              </a>
            </div>
          </div>
        </div>
        <div className="home-legal1">
          <div className="home-row3">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright5">
            © 2022 finbest. All Rights Reserved.
          </span>
        </div>
      </div>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container5">
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container7">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
