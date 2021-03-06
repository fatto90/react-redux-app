import React from 'react'
import PropTypes from 'prop-types'

const ButtonFilter = ({ active, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
           marginBottom: '10px'
       }}
    >
      {children}
    </button>
)

ButtonFilter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ButtonFilter