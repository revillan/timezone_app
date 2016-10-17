import React from 'react';

class Timezone extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
      {this.props.timezone.name}
      {Object.keys(this.props.timezone.users).map(id => {
        return (<div key={id}>
          <img src={this.props.timezone.users[id].image_url} alt={this.props.timezone.users[id].name}/>
          {this.props.timezone.users[id].name}
        </div>);
      })}
    </div>
  );
  }
}

export default Timezone;
