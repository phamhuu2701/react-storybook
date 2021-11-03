import React, { Component } from "react"
import "./App.css"
import routes from "./routes"
import Document from "./Document"
import { Button, Stack } from "react-bootstrap"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: routes[0],
        }
    }

    render() {
        const { selected } = this.state

        return (
            <div className="app-main">
                <div className="main-left">
                    <Stack gap={2}>
                        {routes.map((item, index) => (
                            <Button
                                variant={item.id === selected?.id ? "light" : "outline-primary"}
                                key={item.id}
                                disabled={item.id === selected?.id}
                                onClick={() => this.setState({ selected: item })}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Stack>
                </div>

                <div className="main-right">{selected && <Document selected={selected} />}</div>
            </div>
        )
    }
}

export default App
