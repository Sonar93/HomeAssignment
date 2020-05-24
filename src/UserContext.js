import React, { createContext, Component } from "react";
import Axios from "axios";
const UserContext = createContext();

class DataProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [],
      providers: [],
      control: [],
      result: [],
      loading: true,
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get(
      "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services"
    )
      .then((results) => this.setState({ services: results.data }))
      .catch((e) => console.log(e));

    Axios.get(
      "https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10"
    )
      .then((results) => this.setState({ providers: results.data }))
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export { UserContext, DataProvider };
