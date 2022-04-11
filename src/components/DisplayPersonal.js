import React from "react";

class DisplayPersonal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.map((datum) => {
          return (
            <div key="name">
              <p>Name: {datum.name}</p>
              <p key="title">Title: {datum.title}</p>
              <p key="phone">Phone: {datum.phone}</p>
              <p key="email">Email: {datum.email}</p>
              <p key="location">Location: {datum.location}</p>
            </div>
          );
        })}
        <hr />
      </div>
    );
  }
}

export default DisplayPersonal;
