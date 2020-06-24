import React from 'react'
import request from 'superagent'

// const defaultState = {
//   activity: '',
//   type: '',
//   participants: '',
//   price: ' ',
//   link: ' ',
//   key: '',
//   accessibility: ''
// }


let activityStuff = {

}

class App extends React.Component {
  state = {
    activity: '',
    type: '',
    participants: '',
    price: ' ',
    link: ' ',
    key: '',
    accessibility: ''
  }



  // componentDidMount() {
  //   this.getMyActivity()
  // }



  handleClick = () => {
    this.getMyActivity()
    this.ControlSection()
  }

  getMyActivity = () => {
    request.get('https://www.boredapi.com/api/activity')
      .then(res => {
        console.log(this.state)
        this.setState({
          activity: res.body.activity,
          type: res.body.type,
          participants: res.body.participants,
          price: res.body.price,
          link: res.body.link,
          key: res.body.key,
          accessibility: res.body.accessibility
        })
      })
  }

  render() {
    return (
      <>
        <div id='activity'>{this.state.activity}</div>
        <div id='type'>{this.state.type}</div>
        <div id='participants'>{this.state.participants}</div>
        <div id='price'>{this.state.price}</div>
        <div id='link'>{this.state.link}</div>
        <div id='key'>{this.state.key}</div>
        <div id='accessibility'>{this.state.accessibility}</div>
        <button onClick={this.handleClick}>Find something to do!</button>
        <h1> TRY THIS! </h1>
      </>
    )
  }
}

export default App