import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import NavBar from './navbar';

// Class Components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      batchNameIgneel: "Incredible Igneel",
      batchNameHaku: "Healthy Haku",
      changeBatchName: true,
      batch: 9
    };
  }
  addNumber = () => {
    this.setState({
      batch: this.state.batch + 1,
      changeBatchName: !this.state.changeBatchName
    });
  };

  subtractNumber = () => {
    this.setState({
      batch: this.state.batch - 1,
      changeBatchName: !this.state.changeBatchName
    });
  };

  checkboxes = () => {
    // const [state, setState] =
    React.useState({
      checkedA: true
    });

    // handleChange = (name) => event => {
    //     setState({state, [name]:event.target.checked});
    //   }
  };

  render() {
    console.log("ini statenya", this.state);
    console.log("ini propsnya", this.props);
    return (
      <div align="center">
        <NavBar>
        </NavBar>
        <h1>
          Hallo{" "}
          {this.state.changeBatchName
            ? this.state.batchNameIgneel
            : this.state.batchNameHaku}{" "}
          # {this.state.batch}
        </h1>
        <Button style={{
          margin: '5px',
          borderRadius: '50%'
        }}
          variant="outlined"
          color="primary"
          onClick={this.subtractNumber}
        >
          -
        </Button>
        <Button style={{
          margin: '5px',
          borderRadius: '50%'
        }}
        variant="outlined" color="primary" onClick={this.addNumber}>
          +
        </Button>
        <div align="center">
          <Checkbox
            checked={this.state.checkedA}
            // onChange={handleChange('checkedA')}
            value="checkedA"
            inputProps={{
              "aria-label": "primary checkbox"
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
