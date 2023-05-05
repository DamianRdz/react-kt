import React, { Component } from "react";

type Props = {
  title: string;
  initialValue: number;
};

type State = {
  count: number;
};

class Counter extends Component<Props, State> {
  state = {
    count: 0,
  };

  componentWillMount() {
    console.log("Mount");
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    console.log("Update");
  }

  componentWillUnmount(): void {
    console.log("UnMount");
  }

  updateCounter(val: number) {
    this.setState({ count: this.state.count + val });
  }
  render() {
    const { title } = this.props;
    const { count } = this.state;
    return (
      <div>
        <p>{title.length > 0 ? title : "Texto default"}</p>
        <p>{count}</p>
        <button onClick={() => this.updateCounter(4)}>Increment</button>
      </div>
    );
  }
}

export default Counter;
