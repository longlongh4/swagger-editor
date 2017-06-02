import React, { PropTypes } from "react"
import Swagger from "swagger-client"
import "whatwg-fetch"
import Modal from "boron/DropModal"
import downloadFile from "react-file-download"
import YAML from "js-yaml"
import beautifyJson from "json-beautify"

import "react-dd-menu/dist/react-dd-menu.css"
import "./topbar.less"

export default class Topbar extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  saveFile() {
    console.log("save")
    var myCustomData = { foo: 'bar' }
    var event = new CustomEvent('myEvent', { detail: myCustomData })
    window.parent.document.dispatchEvent(event)
  }

  render() {
    let { getComponent } = this.props
    const Link = getComponent("Link")

    return (
      <div>
        <div className="topbar">
          <div className="topbar-wrapper">
            <Link href="#" onClick={this.saveFile}>
              <span className="topbar-logo__title">Save</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

Topbar.propTypes = {
  specSelectors: PropTypes.object.isRequired,
  specActions: PropTypes.object.isRequired,
  getComponent: PropTypes.func.isRequired
}
