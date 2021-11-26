import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Togglable({ children, buttonLabel }) {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  return (
    <div>
      <button type="button" onClick={() => setVisible(true)} style={hideWhenVisible}>
        Show {buttonLabel}
      </button>

      <div style={showWhenVisible}>
        {children}

        <button type="button" onClick={() => setVisible(false)}>
          Hide {buttonLabel}
        </button>
      </div>
    </div>
  )
}

Togglable.propTypes = {
  children: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}
