import React, { Component } from 'react'
import ReactDraftWysiwyg from '../components/ReactDraftWysiwyg'

class ReactDraftWysiwygDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            htmlText: '',
        }
    }

    render() {
        const { htmlText } = this.state

        return (
            <div>
                <ReactDraftWysiwyg
                    htmlText={htmlText}
                    onChange={(htmlText) => this.setState({ htmlText })}
                    height={200}
                />

                <div
                    style={{
                        background: '#dcdcdc',
                        minHeight: 100,
                        borderRadius: '0.4em',
                        padding: '1em',
                        marginTop: '1em',
                    }}
                >
                    {htmlText}
                </div>
            </div>
        )
    }
}

export default ReactDraftWysiwygDemo
