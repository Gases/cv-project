import React from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkExperience from "./components/WorkExperience";
import EducationExperience from "./components/EducationExperience";
import DisplayPersonal from "./components/DisplayPersonal";
import DisplayWork from "./components/DisplayWork";
import DisplayEducation from "./components/DisplayEducation";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personal: [],
      work: [],
      education: [],
    };
  }

  addPersonalDetails = (details) => {
    this.setState({
      personal: this.state.personal.concat(details)
    })
  }

  addWorkExperience = (details) => {
    this.setState({
      work: this.state.work.concat(details)
    })
  }

  addEducationExperience() {}

  render() {
    return (
      <div className="screen">
        <div className="inputs">
          <form>
            <PersonalDetails addDetails={this.addPersonalDetails} />
          </form>
          <hr />
          <form>
            <WorkExperience addDetails={this.addWorkExperience} />
          </form>
          <hr />
          <form>
            <EducationExperience addEducation={this.addEducationExperience} />
          </form>
        </div>
        <div className="display">
          <DisplayPersonal data={this.state.personal} />
          <DisplayWork data={this.state.work} />
          <DisplayEducation data={this.state.education} />
        </div>
      </div>
    );
  }
}

export default App;
