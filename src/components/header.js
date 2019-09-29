import React from "react";
//옛날방식
class Header extends React.Component {
  state = {
    title: "TODOS",
    text: ""
  };

  componentDidMount() {
    //http
    console.log("componentDidMount");
  }

  //내부변화값
  handleText = e => {
    this.setState({
      ...this.state,
      text: e.target.value
    });
  };

  handleClick = () => {
    const {
      props: { onAddTodo },
      state: { text }
    } = this;

    if (!text) {
      return;
    }
    onAddTodo(text);

    this.setState({
      ...this.state,
      text: ""
    });
  };
  render() {
    console.log(this.state); //내꺼
    console.log(this.props); //남한테 받은것

    const {
      state: { title, text },
      handleText,
      handleClick
    } = this;

    return (
      <div>
        <h1> {title}</h1>
        <input onChange={handleText} value={text} />
        <button onClick={handleClick}>추가</button>
      </div>
    );
  }
}

export default Header;
