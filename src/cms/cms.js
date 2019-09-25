import CMS from "netlify-cms-app"
import React, { Component } from "react"
import { SketchPicker } from "react-color"
import PropTypes from "prop-types"

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      background: "#fff",
    }

    this.handleColorChange = this.handleColorChange.bind(this)
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: "",
  }

  componentDidMount() {
    this.setState({ background: this.props.value || "#fff" })
  }

  handleColorChange = color => {
    this.setState({ background: color.hex })
    console.log(this.state.background);
    
  }

  render() {
    const { forID, classNameWrapper } = this.props

    return (
      <>
        <SketchPicker
          color={this.state.background}
          onChangeComplete={this.handleColorChange}
        />
        <input
          type="text"
          id={forID}
          value={this.state.background}
          className={classNameWrapper}
        />
      </>
    )
  }
}

CMS.registerWidget("test", Test)
