class App extends React.Component {

  // 2022 6. 표준 기술
  // public, private 클래스 필드, 피처


  constructor(props) {
    super(props);

    this.state = {
      headline: "React Application",
      // isDisabled: false,
      isToggle: false,
    };

    this.handleChangeHeadline = this.handleChangeHeadline.bind(this);
  }

  handleChangeHeadline() {
    this.setState({
      headline: "NEW HEADLINE! 😃",
      isDisabled: true,
    });
  }

  render() {
    return (
      <div data-component="App">
        <h1>{this.state.headline}</h1>
        <button
          type="button"
          onClick={this.handleChangeHeadline}
          disabled={this.state.isDisabled}
          // disabled={isDisabled}
        >
          헤드라인 업데이트
        </button>
      </div>
    );
  }
}

export default App;
