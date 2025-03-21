import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = (event) => {
    // console.log(event)
    event.preventDefault();
    console.log(this.state)
    this.props.createProject(this.state)
    this.props.history.push('/') //* redirect homepage
  }
  render() {
    const {auth} = this.props
    if (!auth.uid) return <Redirect to={'/signin'} />
    return (
      <div className="container">
        <form className="white" onSubmit={ this.handleSubmit }>
          <h5 className="grey-text text -darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea className="materialize-textarea" type="text" id="content" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject) // azért rakunk null-t mert a connect fv-nek két paramétere van az
// egyik a mapStateToProps. és annak a  helyére raktuk a null-t