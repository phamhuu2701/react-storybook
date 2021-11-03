import React, { Component } from "react"
import PropTypes from "prop-types"
import { Stack } from "react-bootstrap"

class Demo extends Component {
    render() {
        const { selected } = this.props

        return (
            <Stack>
                <h5>{selected.name}</h5>

                {selected.demo}
            </Stack>
        )
    }
}

Demo.propTypes = {
    selected: PropTypes.object.isRequired,
}

export default Demo
