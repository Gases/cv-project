import React from "react";

class DisplayEducation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.map((datum) => {
          return (
            <div key={`education-${Math.random() * 10000}`}>
              <p key={`school-${Math.random() * 10000}`}>
                Company: {datum.school}
              </p>
              <p key={`start-date-${Math.random() * 10000}`}>
                Start date: {datum.startDate}
              </p>
              <p key={`end-date-${Math.random() * 10000}`}>
                End date: {datum.endDate}
              </p>
              <p key={`course-${Math.random() * 10000}`}>
                Description: {datum.course}
              </p>
            </div>
          );
        })}
        <hr />
      </div>
    );
  }
}

export default DisplayEducation;
