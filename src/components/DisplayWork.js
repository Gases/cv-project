import React from "react";

class DisplayWork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.map((datum) => {
          return (
            <div key={`work-${Math.random() * 10000}`}>
              <p key={`company-${Math.random() * 10000}`}>
                Company: {datum.company}
              </p>
              <p key={`start-date-${Math.random() * 10000}`}>
                Start date: {datum.startDate}
              </p>
              <p key={`end-date-${Math.random() * 10000}`}>
                End date: {datum.endDate}
              </p>
              <p key={`description-${Math.random() * 10000}`}>
                Description: {datum.description}
              </p>
            </div>
          );
        })}
        <hr />
      </div>
    );
  }
}

export default DisplayWork;
