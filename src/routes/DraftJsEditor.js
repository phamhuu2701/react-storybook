import React from "react";
import { Stack } from "react-bootstrap";
import DraftJsEditor from "../components/DraftJsEditor";

export default {
  name: "DraftJsEditor",
  component: DraftJsEditor,
  props: {
    textHtml: "",
    onChange: () => console.log(""),
    height: 200,
  },
  onChange: (value) => null,
  document: (
    <Stack gap={2}>
      <Stack direction="horizontal" gap={2}>
        <div>Home page:</div>
        <a href="https://draftjs.org/" target="_blank" rel="noreferrer">
          https://draftjs.org/
        </a>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <div>Repository:</div>
        <a href="github.com/facebook/draft-js" target="_blank" rel="noreferrer">
          github.com/facebook/draft-js
        </a>
      </Stack>
      <Stack direction="horizontal" gap={2}>
        <div>NPM:</div>
        <a
          href="https://www.npmjs.com/package/draft-js"
          target="_blank"
          rel="noreferrer"
        >
          https://www.npmjs.com/package/draft-js
        </a>
      </Stack>
    </Stack>
  ),
  api: [
    [
      "textHtml",
      "string",
      "",
      "The value of the input element, required for a controlled component.",
    ],
    ["onChange", "func", "", "Callback fired when the value is changed."],
    ["height", "number", "200", "Number of pixel height to editor form."],
  ],
  usage: {
    name: "DraftJsEditor",
    props: [
      ["textHtml", '""'],
      ["onChange", "{(textHtml) => {}}"],
      ["height", "{200}"],
    ],
  },
  folder: {
    folder: "DraftJsEditor",
    files: ["index.js", "styles.css"],
  },
  code: {
    js: `
      import React from "react";
      import Draft from "draft-js";
      import { stateToHTML } from "draft-js-export-html";
      import { stateFromHTML } from "draft-js-import-html";
      import "./styles.css";

      const { Editor, EditorState, RichUtils, getDefaultKeyBinding } = Draft;

      export default class DraftJsEditor extends React.Component {
        constructor(props) {
          super(props);
          this.state = { editorState: EditorState.createEmpty() };
          this.focus = () => this.refs.editor.focus();
          this.handleKeyCommand = this._handleKeyCommand.bind(this);
          this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
          this.toggleBlockType = this._toggleBlockType.bind(this);
          this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
        }
        componentDidMount() {
          if (this.props.htmlText) {
            let contentState = stateFromHTML(this.props.htmlText);
            this.setState({
              editorState: EditorState.createWithContent(contentState),
            });
          }

          if (this.props.height) {
            let editorEl = document.querySelector(
              ".RichEditor-editor .public-DraftEditor-content"
            );
            if (editorEl) {
              editorEl.style.minHeight = this.props.height + "px";
            }
          }
        }
        onChange = (editorState) => {
          this.setState({ editorState });

          let htmlText = stateToHTML(editorState.getCurrentContent());

          if (window.__editorStateChangeTimeout) {
            clearTimeout(window.__editorStateChangeTimeout);
          }

          window.__editorStateChangeTimeout = setTimeout(
            () =>
              htmlText !== this.props.htmlText ? this.props.onChange(htmlText) : null,
            400
          );
        };
        _handleKeyCommand(command, editorState) {
          const newState = RichUtils.handleKeyCommand(editorState, command);
          if (newState) {
            this.onChange(newState);
            return true;
          }
          return false;
        }
        _mapKeyToEditorCommand(e) {
          if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(
              e,
              this.state.editorState,
              4 /* maxDepth */
            );
            if (newEditorState !== this.state.editorState) {
              this.onChange(newEditorState);
            }
            return;
          }
          return getDefaultKeyBinding(e);
        }
        _toggleBlockType(blockType) {
          this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
        }
        _toggleInlineStyle(inlineStyle) {
          this.onChange(
            RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
          );
        }
        render() {
          const { editorState } = this.state;
          // If the user changes block type before entering any text, we can
          // either style the placeholder or hide it. Let's just hide it now.
          let className = "RichEditor-editor";
          var contentState = editorState.getCurrentContent();
          if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== "unstyled") {
              className += " RichEditor-hidePlaceholder";
            }
          }
          return (
            <div className="RichEditor-root">
              <BlockStyleControls
                editorState={editorState}
                onToggle={this.toggleBlockType}
              />
              <InlineStyleControls
                editorState={editorState}
                onToggle={this.toggleInlineStyle}
              />
              <div className={className} onClick={this.focus}>
                <Editor
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={editorState}
                  handleKeyCommand={this.handleKeyCommand}
                  keyBindingFn={this.mapKeyToEditorCommand}
                  onChange={this.onChange}
                  placeholder=""
                  ref="editor"
                  spellCheck={true}
                />
              </div>
            </div>
          );
        }
      }
      // Custom overrides for "code" style.
      const styleMap = {
        CODE: {
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
          fontSize: 16,
          padding: 2,
        },
      };
      function getBlockStyle(block) {
        switch (block.getType()) {
          case "blockquote":
            return "RichEditor-blockquote";
          default:
            return null;
        }
      }
      class StyleButton extends React.Component {
        constructor() {
          super();
          this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
          };
        }
        render() {
          let className = "RichEditor-styleButton";
          if (this.props.active) {
            className += " RichEditor-activeButton";
          }
          return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
          );
        }
      }
      const BLOCK_TYPES = [
        { label: "H1", style: "header-one" },
        { label: "H2", style: "header-two" },
        { label: "H3", style: "header-three" },
        { label: "H4", style: "header-four" },
        { label: "H5", style: "header-five" },
        { label: "H6", style: "header-six" },
        { label: "Blockquote", style: "blockquote" },
        { label: "UL", style: "unordered-list-item" },
        { label: "OL", style: "ordered-list-item" },
        { label: "Code Block", style: "code-block" },
      ];
      const BlockStyleControls = (props) => {
        const { editorState } = props;
        const selection = editorState.getSelection();
        const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();
        return (
          <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) => (
              <StyleButton
                key={type.label}
                active={type.style === blockType}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            ))}
          </div>
        );
      };
      var INLINE_STYLES = [
        { label: "Bold", style: "BOLD" },
        { label: "Italic", style: "ITALIC" },
        { label: "Underline", style: "UNDERLINE" },
        { label: "Monospace", style: "CODE" },
      ];
      const InlineStyleControls = (props) => {
        const currentStyle = props.editorState.getCurrentInlineStyle();

        return (
          <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) => (
              <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            ))}
          </div>
        );
      };
    `,
    css: `
      .RichEditor-root {
        background: #fff;
        border: 1px solid #ddd;
        font-family: "Georgia", serif;
        font-size: 14px;
        border: 1px solid #cccccc;
        border-radius: 4px;
      }
      
      .RichEditor-controls {
        margin: 15px;
      }
      
      .RichEditor-editor {
        border-top: 1px solid #ddd;
        cursor: text;
        font-size: 16px;
      }
      
      .RichEditor-editor .public-DraftEditorPlaceholder-root,
      .RichEditor-editor .public-DraftEditor-content {
        padding: 15px;
      }
      
      .RichEditor-editor .public-DraftEditor-content {
        min-height: 200px;
      }
      
      .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
        display: none;
      }
      
      .RichEditor-editor .RichEditor-blockquote {
        border-left: 5px solid #eee;
        color: #666;
        font-family: "Hoefler Text", "Georgia", serif;
        font-style: italic;
        margin: 16px 0;
        padding: 10px 20px;
      }
      
      .RichEditor-editor .public-DraftStyleDefault-pre {
        background-color: rgba(0, 0, 0, 0.05);
        font-family: "Inconsolata", "Menlo", "Consolas", monospace;
        font-size: 16px;
        padding: 20px;
      }
      
      .RichEditor-controls {
        font-family: "Helvetica", sans-serif;
        font-size: 14px;
        margin-bottom: 5px;
        user-select: none;
      }
      
      .RichEditor-styleButton {
        color: #999;
        cursor: pointer;
        margin-right: 16px;
        padding: 2px 0;
        display: inline-block;
      }
      
      .RichEditor-activeButton {
        color: #5890ff;
      }
    `,
  },
};
