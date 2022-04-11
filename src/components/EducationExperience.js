import React from "react";

class EducationExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        school: "",
        startDate: "",
        endDate: "",
        course: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      education: {
        ...this.state.education,
        [e.target.name]: e.target.value,
      },
    });
  };

  sendInfo = (e) => {
    e.preventDefault();
    this.props.addDetails(this.state.work);
    this.setState({
      education: {
        school: "",
        startDate: "",
        endDate: "",
        course: "",
      },
    });
  };

  render() {
    return (
      <div className="input-forms">
        <label htmlFor="school">School: </label>
        &nbsp;
        <input
          type="text"
          name="school"
          id="school"
          onChange={this.handleChange}
          value={this.state.education.school}
        />

        <label htmlFor="startDate">Starting date: </label>
        &nbsp;
        <input
          type="text"
          name="startDate"
          id="startDate"
          onChange={this.handleChange}
          value={this.state.education.startDate}
        />

        <label htmlFor="endDate">End date: </label>
        &nbsp;
        <input
          type="text"
          name="endDate"
          id="endDate"
          onChange={this.handleChange}
          value={this.state.education.endDate}
        />

        <label htmlFor="course">Course: </label>
        &nbsp;
        <textarea
          type="text"
          name="course"
          id="course"
          onChange={this.handleChange}
          value={this.state.education.course}
        />

        <button type="button" onClick={this.sendInfo}>
          +
        </button>
      </div>
    );
  }
}

export default EducationExperience;
