import React from "react";

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        title: "",
        phone: "",
        email: "",
        location: "",
      },
      addedDetails: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value,
      },
    });
  };

  sendInfo = (e) => {
    e.preventDefault();
    this.props.addDetails(this.state.personal);
    this.setState({
      personal: {
        name: "",
        title: "",
        phone: "",
        email: "",
        location: "",
      },
      addedDetails: true,
    });
  };

  render() {
    if (!this.state.addedDetails) {
      return (
        <div className="input-forms">
          <label htmlFor="name">Name: </label>
          &nbsp;
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleChange}
            value={this.state.personal.name}
          />
          <label htmlFor="title">Title: </label>
          &nbsp;
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
            value={this.state.personal.title}
          />
          <label htmlFor="phone">Phone number: </label>
          &nbsp;
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={this.handleChange}
            value={this.state.personal.phone}
          />
          <label htmlFor="email">Email: </label>
          &nbsp;
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleChange}
            value={this.state.personal.email}
          />
          <label htmlFor="location">Location: </label>
          &nbsp;
          <input
            type="text"
            name="location"
            id="location"
            onChange={this.handleChange}
            value={this.state.personal.location}
          />
          <button type="button" onClick={this.sendInfo}>
            +
          </button>
        </div>
      )

    }

    return (
      <div className="input-forms">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
          value={this.state.personal.name}
        />
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={this.handleChange}
          value={this.state.personal.title}
        />
        <label htmlFor="phone">Phone number: </label>
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={this.handleChange}
          value={this.state.personal.phone}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={this.handleChange}
          value={this.state.personal.email}
        />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={this.handleChange}
          value={this.state.personal.location}
        />
        <button type="button">Edit</button>
      </div>
    )
  }
}

export default PersonalDetails;
