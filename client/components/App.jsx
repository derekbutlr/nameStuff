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
        {this.state.activity ?
          <p>{this.state.activity}
           <p></p>{this.state.type} {this.state.participants}
            {this.state.price}
             {this.state.link}
              {this.state.key}
               {this.state.accessibility}</p>
          : <h1>Welcome</h1>}
        <button onClick={this.handleClick}>You are bored</button>
      </>
    )
  }
}

export default App