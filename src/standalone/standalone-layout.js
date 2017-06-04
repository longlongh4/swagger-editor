import React, { PropTypes } from "react"

export default class StandaloneLayout extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  componentDidMount= () => {
    window.document.addEventListener('SET_SWAGGER_CONTENT', (e) => {
      this.props.specActions.updateSpec(e.detail.swagger)
    }, false )
    window.document.addEventListener('GET_SWAGGER_CONTENT', (e) => {
      let editorContent = this.props.specSelectors.specStr()
      let swaggerData = { swagger: editorContent }
      let event = new CustomEvent('RETURN_SWAGGER', { detail: swaggerData })
      window.parent.document.dispatchEvent(event)
    }, false )
  }

  static propTypes = {
    errSelectors: PropTypes.object.isRequired,
    errActions: PropTypes.object.isRequired,
    specActions: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    layoutSelectors: PropTypes.object.isRequired,
    layoutActions: PropTypes.object.isRequired
  }

  render() {
    let { getComponent } = this.props

    let EditorLayout = getComponent("EditorLayout", true)

    return (
      <div>
        <EditorLayout></EditorLayout>
      </div>
    )
  }

}
