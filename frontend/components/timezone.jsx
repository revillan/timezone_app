import React from 'react';

Date.prototype.addHours = function(h){
  let x = new Date();
  let DST = true;
  let currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
  this.setHours(this.getHours()+ h + currentTimeZoneOffsetInHours + DST);
  return this;
};

class Timezone extends React.Component {
  constructor() {
    super();
  }

  getOffsetTime() {
    let today = new Date();
    // today = today.getUTCDate();
    today.addHours(this.props.timezone.diff);
    let time =  today.toTimeString().slice(0,5);
    if (parseInt(time.slice(0,2)) - 12 >= 1) {
      let hours = (parseInt(time.slice(0,2)) - 12).toString();
      time = hours + time.slice(2,5)+" pm";
    } else {
      time += " am";    }
    return time;
  }

  render () {
    return (
      <div className="timezone-box">
      <div className="heading"><div className="heading-itm">{this.props.timezone.name}</div>
      <div className="heading-itm">{this.getOffsetTime()}</div></div>
      {Object.keys(this.props.timezone.users).map(id => {
        return (<div key={id} className="user-line">
          <img src={this.props.timezone.users[id].image_url} alt={this.props.timezone.users[id].name}/>
          {this.props.timezone.users[id].name}
        </div>);
      })}
    </div>
  );
  }
}

export default Timezone;
