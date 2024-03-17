import React from 'react'

import PropTypes from 'prop-types'

import './doctor.css'

const Doctor = (props) => {
  return (
    <div className="doctor-doctor">
      <img alt={props.imageAlt} src={props.imageSrc} className="doctor-image" />
      <div className="doctor-heading">
        <h2 className="doctor-text">{props.heading}</h2>
        <p className="doctor-text1">{props.text}</p>
      </div>
    </div>
  )
}

Doctor.defaultProps = {
  heading: 'Dr. Audrey Smith',
  imageSrc: '/Doctors/doctor-1-300w.png',
  imageAlt: 'image',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Doctor.propTypes = {
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
}

export default Doctor
