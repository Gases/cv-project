import React from "react";

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      work: {
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      work: {
        ...this.state.work,
        [e.target.name]: e.target.value,
      },
    });
  };

  sendInfo = (e) => {
    e.preventDefault();
    this.props.addDetails(this.state.work);
    this.setState({
      work: {
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    });
  };

  render() {
    return (
      <div className="input-forms">
        <label htmlFor="company">Company: </label>
        &nbsp;
        <input
          type="text"
          name="company"
          id="company"
          onChange={this.handleChange}
          value={this.state.work.company}
        />

        <label htmlFor="startDate">Starting date: </label>
        &nbsp;
        <input
          type="text"
          name="startDate"
          id="startDate"
          onChange={this.handleChange}
          value={this.state.work.startDate}
        />

        <label htmlFor="endDate">End date: </label>
        &nbsp;
        <input
          type="text"
          name="endDate"
          id="endDate"
          onChange={this.handleChange}
          value={this.state.work.endDate}
        />

        <label htmlFor="description">Description: </label>
        &nbsp;
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={this.handleChange}
          value={this.state.work.description}
        />

        <button type="button" onClick={this.sendInfo}>
          +
        </button>
      </div>
    );
  }
}

export default WorkExperience;
