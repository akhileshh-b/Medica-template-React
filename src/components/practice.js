import React from 'react'

import PropTypes from 'prop-types'

import './practice.css'

const Practice = (props) => {
  return (
    <div className="practice-practice">
      <div className="practice-heading">
        <h3 className="practice-header">{props.title}</h3>
        <p className="practice-caption">{props.description}</p>
      </div>
      <div className="read-more">
        <span className="practice-text">Read more</span>
        <img alt="image" src="/Icons/arrow-2.svg" className="practice-image" />
      </div>
    </div>
  )
}

Practice.defaultProps = {
  title: 'Cardiology',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Practice.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Practice
