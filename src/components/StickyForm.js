import React from 'react'
import {connect} from 'react-redux'

class StickyForm extends React.Component {
  state = { name: '' }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const {dispatch} = this.state
    const {name} = this.state
    dispatch({type: 'ADD_STICKY', sticky: name})
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }
  
  render() {
    const { name } = this.state

    return(
      <div>
        <h1>Add A Sticky Note</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={ name } onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps)(StickyForm)