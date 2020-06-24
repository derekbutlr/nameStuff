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


const activityDiv = {
  color: 'blue',
  fontSize: '200px',
};

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
        <div style={{ color: 'green', textAlign: 'center', fontStyle: 'italic' }}>
          <h1> Kill your boredom by:</h1></div>
        <div style={{
          textAlign: 'center',
          fontSize: '55px',
          marginBottom: '35px' 
        }}>
          {this.state.activity} 
        </div>

        <div style={{ color: 'green', textAlign: 'center' }}>
          <p>Type of activity:</p></div>
        <div style={{
          textAlign: 'center', 
          fontStyle: 'bold',
          textTransform: 'uppercase',
        }}>{this.state.type} </div>

          <div style={{ color: 'green', textAlign: 'center' }}>
            <p>People required:</p></div>

          <div style={{
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>{this.state.participants}</div>

          <div style={{ color: 'green', textAlign: 'center' }}>
            <p>Cost:$</p></div>

          <div style={{
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>{this.state.price}</div>

          <div style={{ color: 'green', textAlign: 'center' }}>
            <p>Link(if available!):</p></div>

          <div style={{
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>{this.state.link}</div>

          {/* <div style={{ color: 'green', textAlign: 'center' }}>
            <p>Key:</p></div>

          <div style={{
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>{this.state.key}</div> */}

          {/* <div style={{ color: 'green', textAlign: 'center' }}>
            <p>Accessibility:</p></div>{this.state.accessibility} */}

          <div style={{ textAlign: 'center' }}>

            <button onClick={this.handleClick}>Find something to do!</button></div>
          <div style={{ color: 'green', textAlign: 'center' }}>
            <h1 > or dont </h1></div>
      </>
    )
  }
}

export default App