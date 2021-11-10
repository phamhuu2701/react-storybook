import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import Api from './Api'
import Demo from './Demo'

const NAVS = ['Demo', 'API']

class Document extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeKey: NAVS[0],
        }
    }

    renderContent = () => {
        const { selected } = this.props
        const { activeKey } = this.state

        switch (activeKey) {
            case 'Demo':
                return <Demo selected={selected} />

            case 'API':
                return <Api selected={selected} />

            default:
                break
        }
    }

    render() {
        const { activeKey } = this.state

        return (
            <div>
                <Nav
                    variant="tabs"
                    activeKey={activeKey}
                    onSelect={(eventKey) => this.setState({ activeKey: eventKey })}
                >
                    {NAVS.map((item, index) => (
                        <Nav.Item key={index}>
                            <Nav.Link eventKey={item}>{item}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>

                <div className="main-right-body">{this.renderContent()}</div>
            </div>
        )
    }
}

Document.propTypes = {
    selected: PropTypes.object.isRequired,
}

export default Document
