class App extends React.Component {
  // 2022 6. 표준 기술
  // public, private 클래스 필드, 피처

  state = {
    headline: "React Application",
    // isDisabled: false,
    isToggle: false,
  };

  // 클래스에서는 이렇게 기억할 수 있는 임의의 데이터를 관리할 수 있다.
  // 그럼 함수는? 못한다. React Hooks (useRef)
  // 메모이제이션 패턴
  originalHeadline = this.state.headline;
  willUpdateHeadline = 'NEW HEADLINE! 😃';

  handleChangeHeadline = () => {

    let assignHeadlineContent = '';
    
    // this.setState({
    //   headline: "NEW HEADLINE! 😃",
    //   isDisabled: true,
    // });

    // 조건 처리
    //! 문을 사용할 것인가?

    if (this.state.isToggle){
      this.setState({
        isToggle:false,
        headline:this.originalHeadline
      });
    }else{
      this.setState({
        isToggle:true,
        headline: this.willUpdateHeadline
      });
    }

    //! 아니면 식을 사용할 것인가?

  };

  
  render() {

    const { isToggle, headline } = this.state;

    if (this.state.isLoading) {
      return <div role="alert">데이터 로딩 중...</div> 
    }

    return (
      <div data-component="App">
        <h1>{headline}</h1>
        <button
          // disabled={this.state.isDisabled}
          type="button" 
          onClick={this.handleChangeHeadline}
        >
          { isToggle ? '오리지널 헤드라인으로 변경' : '뉴 헤드라인으로 변경' }
        </button>
      </div>
    );
  }
}

export default App;
