import React, { Component } from 'react';

class WaitTimesDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      waitTimeList: []
    }

  }
  
  updateWaitList() {
    // fetch request to display wait times
    const body = {
      venueId: this.props.venueId
    }
    fetch('/dbRouter/getWaitTimes', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {"Content-type": "application/json"}
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      const waitTimes = [];
      for (let i = 0; i <= data.length; i++) {
        if (data[i]) {
          waitTimes.push(<div key={i}>{data[i]["waittime"]} minutes</div>)
        }
      }
      this.setState({
        waitTimeList: waitTimes
      })
    })
    .catch((err) => {
      console.log(`${err}: getWaitTime func err when getting wait time`)
    })
  }


  componentDidUpdate() {
    this.updateWaitList();
  }
  
  componentDidMount() {
    this.updateWaitList();
  }
  
  
  render() {
    return ( 
      <div>
        {/* // allows input of only numbers with max length 3; tel stands for telephone number; used for mobile */}
            <input type="number" name="WaitTime" placeholder="enter wait time in minutes" onChange={this.props.setWaitTime}></input>
            <input type="button" onClick={this.props.addWaitTime} value="Add Wait Time"></input>

        {/* render wait times pulled from sql database */}
            <div>
              Most Recent Wait Times
              {this.state.waitTimeList}
            </div>
      </div>
     );
  }
}
 
export default WaitTimesDisplay;