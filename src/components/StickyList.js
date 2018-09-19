import React from 'react'
import { connect } from 'react-redux'

const StickyList = ({stickynotes}) => (
  <ul>
    { stickynotes.map( (t, i) => {
      return (
        <li key={i}>
          {t}
        </li>
      )})}
  </ul>
)

const mapStateToProps = (state) => {
  return { stickynotes: state.stickynotes}
}

export default connect(mapStateToProps)(StickyList)