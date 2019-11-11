import React, { Component } from 'react';

class WaitTimesDisplay extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
      // fetch request to display wait times
      const waitTimeList = [];
      fetch('/dbRouter/getWaitTimes')
      .then(() => console.log('getWaitTime fetch request successful'))
      .catch((err) => {
        console.log(`${err}: getWaitTime func err when getting wait time`)
      })
  }


  render() {
    return ( 
      <div>
        {/* // allows input of only numbers with max length 3; tel stands for telephone number; used for mobile */}
            <input type="tel" maxLength="3" name="WaitTime" placeholder="enter wait time in minutes" onChange={this.props.setWaitTime}></input>
            <input type="button" onClick={this.props.addWaitTime} value="Add Wait Time"></input>

        {/* render wait times pulled from sql database */}
            <div>
              {waitTimeList}
            </div>
      </div>
     );
  }
}
 
export default WaitTimesDisplay;