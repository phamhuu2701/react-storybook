import React, { Component } from "react"
import PropTypes from "prop-types"
import { Stack } from "react-bootstrap"
import "./styles.css"

class Api extends Component {
    render() {
        const { selected } = this.props

        return (
            <div className="api">
                <Stack gap={4}>
                    {selected.document?.length > 0 && (
                        <Stack>
                            <h5>Document</h5>

                            {selected.document.map((item, index) => (
                                <Stack direction="horizontal" gap={2} key={index}>
                                    <div>{item.title} :</div>
                                    <div>
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            {item.url}
                                        </a>
                                    </div>
                                </Stack>
                            ))}
                        </Stack>
                    )}

                    {Boolean(selected.github) && (
                        <Stack>
                            <h5>Code in Github</h5>
                            <a href={selected.github} target="_blank" rel="noreferrer">
                                {selected.github.replace("tree/master/src/components", "...")}
                            </a>
                        </Stack>
                    )}

                    {selected.usage && (
                        <Stack>
                            <h5>Usage</h5>
                            <div className="code-block">
                                &#60;
                                <span className="name">{selected.usage?.name} </span>
                                {selected.usage?.props?.length > 0
                                    ? selected.usage.props.map((item, index) => (
                                          <div key={index} style={{ marginLeft: "1em" }}>
                                              <span className="prop-name">{item[0]}</span>=
                                              <span className="prop-value">{item[1]}</span>
                                          </div>
                                      ))
                                    : ""}
                                &#47;&#62;
                            </div>
                        </Stack>
                    )}

                    {selected.api?.length > 0 && (
                        <Stack>
                            <h5>API</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selected.api.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item[0]}</td>
                                            <td>{item[1]}</td>
                                            <td>{item[2]}</td>
                                            <td>{item[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Stack>
                    )}
                </Stack>
            </div>
        )
    }
}

Api.propTypes = {
    selected: PropTypes.object.isRequired,
}

export default Api
