import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { EditorState, convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'
import { stateFromHTML } from 'draft-js-import-html'
import { unemojify } from 'node-emoji'
import './styles.css'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class ReactDraftWysiwyg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    componentDidMount() {
        const { htmlText, height } = this.props

        if (htmlText) {
            let contentState = stateFromHTML(htmlText)
            this.setState({
                editorState: EditorState.createWithContent(contentState),
            })
        }

        if (height) {
            let editorEl = document.querySelector('.react-draft-wysiwyg-editor > .DraftEditor-root')
            if (editorEl) {
                editorEl.style.minHeight = height + 'px'
            }
        }
    }

    onEditorStateChange = (editorState) => {
        const { htmlText, onChange } = this.props

        this.setState({ editorState })

        if (window.__editorStateChangeTimeout) {
            clearTimeout(window.__editorStateChangeTimeout)
        }

        window.__editorStateChangeTimeout = setTimeout(() => {
            let _htmlText = unemojify(draftToHtml(convertToRaw(editorState.getCurrentContent())))

            if (_htmlText !== htmlText) {
                onChange(_htmlText)
            }
        }, 400)
    }

    render() {
        const { editorState } = this.state

        return (
            <Editor
                editorState={editorState}
                wrapperClassName="react-draft-wysiwyg-wrapper"
                editorClassName="react-draft-wysiwyg-editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                }}
            />
        )
    }
}

ReactDraftWysiwyg.propTypes = {
    htmlText: PropTypes.string,
    onChange: PropTypes.func,
    height: PropTypes.number,
}

ReactDraftWysiwyg.defaultProps = {
    htmlText: '',
    onChange: () => null,
    height: 200,
}

export default ReactDraftWysiwyg
