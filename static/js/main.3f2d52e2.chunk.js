(this["webpackJsonpreact-storybook"]=this["webpackJsonpreact-storybook"]||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(67),a=n.n(c),i=(n(117),n(7)),l=n(8),s=n(10),d=n(9),h=n(228),u=n(226),j=n(227),b=(n(118),n(1)),p=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={},o}return Object(l.a)(n,[{key:"render",value:function(){var e,t,n,o,r,c=this.props.component;return Object(b.jsx)("div",{className:"api",children:Object(b.jsxs)(j.a,{gap:3,children:[c.code&&Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h5",{children:"Code in github"}),Object(b.jsx)("a",{href:c.code,target:"_blank",rel:"noreferrer",children:c.code.replace("tree/master/src/components","...")})]}),c.usage&&Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h5",{children:"Usage"}),Object(b.jsxs)("div",{className:"code-block",style:{fontSize:"1.1em",color:"#ffffff"},children:["<",Object(b.jsx)("span",{className:"component-name",children:null===(e=c.usage)||void 0===e?void 0:e.name}),(null===(t=c.usage)||void 0===t||null===(n=t.props)||void 0===n?void 0:n.length)>0?null===(o=c.usage)||void 0===o?void 0:o.props.map((function(e,t){return Object(b.jsxs)("div",{style:{marginLeft:"1em"},children:[Object(b.jsx)("span",{className:"component-prop-name",children:e[0]}),"=",Object(b.jsx)("span",{className:"component-prop-value",children:e[1]})]},t)})):" ","/>"]})]}),(null===(r=c.api)||void 0===r?void 0:r.length)>0&&Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h5",{children:"API"}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Type"}),Object(b.jsx)("th",{children:"Default"}),Object(b.jsx)("th",{children:"Description"})]})}),Object(b.jsx)("tbody",{children:c.api.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e[0]}),Object(b.jsx)("td",{children:e[1]}),Object(b.jsx)("td",{children:e[2]}),Object(b.jsx)("td",{children:e[3]})]},t)}))})]})]})]})})}}]),n}(o.Component),m=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.component;return Object(b.jsx)(j.a,{children:Object(b.jsx)(e.demo,{})})}}]),n}(o.Component),O=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.component;return Object(b.jsx)(j.a,{children:e.document})}}]),n}(o.Component),f=["Demo","Document","API"],g=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).renderMainContent=function(){var e=o.props.component;switch(o.state.activeKey){case"Demo":return Object(b.jsx)(m,{component:e});case"Document":return Object(b.jsx)(O,{component:e});case"API":return Object(b.jsx)(p,{component:e})}},o.state={activeKey:f[0]},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.activeKey;return Object(b.jsxs)("div",{children:[Object(b.jsx)(u.a,{variant:"tabs",activeKey:t,onSelect:function(t){return e.setState({activeKey:t})},children:f.map((function(e,t){return Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(u.a.Link,{eventKey:e,children:e})},t)}))}),Object(b.jsx)("div",{style:{padding:"1em 0"},children:this.renderMainContent()})]})}}]),n}(o.Component),v=n(5),y=n(32),x=n(11),C=n.n(x),k=n(112),T=n(111),S=(n(220),C.a.Editor),w=C.a.EditorState,E=C.a.RichUtils,_=C.a.getDefaultKeyBinding,D=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).onChange=function(e){o.setState({editorState:e});var t=Object(k.a)(e.getCurrentContent());window.__editorStateChangeTimeout&&clearTimeout(window.__editorStateChangeTimeout),window.__editorStateChangeTimeout=setTimeout((function(){return o.props.onChange("<p><br></p>"===t?"":t)}),400)},o.state={editorState:w.createEmpty()},o.focus=function(){return o.refs.editor.focus()},o.handleKeyCommand=o._handleKeyCommand.bind(Object(y.a)(o)),o.mapKeyToEditorCommand=o._mapKeyToEditorCommand.bind(Object(y.a)(o)),o.toggleBlockType=o._toggleBlockType.bind(Object(y.a)(o)),o.toggleInlineStyle=o._toggleInlineStyle.bind(Object(y.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(this.props.htmlText){var e=Object(T.a)(this.props.htmlText);this.setState({editorState:w.createWithContent(e)})}if(this.props.height){var t=document.querySelector(".RichEditor-editor .public-DraftEditor-content");t&&(t.style.minHeight=this.props.height+"px")}}},{key:"_handleKeyCommand",value:function(e,t){var n=E.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return _(e);var t=E.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(E.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(E.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),Object(b.jsxs)("div",{className:"RichEditor-root",children:[Object(b.jsx)(N,{editorState:e,onToggle:this.toggleBlockType}),Object(b.jsx)(M,{editorState:e,onToggle:this.toggleInlineStyle}),Object(b.jsx)("div",{className:t,onClick:this.focus,children:Object(b.jsx)(S,{blockStyleFn:I,customStyleMap:K,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,placeholder:"",ref:"editor",spellCheck:!0})})]})}}]),n}(r.a.Component),K={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function I(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var B=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(l.a)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),Object(b.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(r.a.Component),H=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],N=function(e){var t=e.editorState,n=t.getSelection(),o=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return Object(b.jsx)("div",{className:"RichEditor-controls",children:H.map((function(t){return Object(b.jsx)(B,{active:t.style===o,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},R=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],M=function(e){var t=e.editorState.getCurrentInlineStyle();return Object(b.jsx)("div",{className:"RichEditor-controls",children:R.map((function(n){return Object(b.jsx)(B,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},L={name:"Draft Js Editor",demo:function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={textHtml:""},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.textHtml;return Object(b.jsxs)(j.a,{gap:3,children:[Object(b.jsx)(D,{textHtml:t,onChange:function(t){return e.setState({textHtml:t})}}),Object(b.jsx)("div",{style:{borderTop:"1px solid #dcdcdc"}}),Object(b.jsx)("div",{style:{background:"#dcdcdc",minHeight:100,borderRadius:4,padding:"1em"},children:t})]})}}]),n}(o.Component),document:Object(b.jsxs)(j.a,{gap:2,children:[Object(b.jsxs)(j.a,{direction:"horizontal",gap:2,children:[Object(b.jsx)("div",{children:"Home page:"}),Object(b.jsx)("a",{href:"https://draftjs.org/",target:"_blank",rel:"noreferrer",children:"https://draftjs.org/"})]}),Object(b.jsxs)(j.a,{direction:"horizontal",gap:2,children:[Object(b.jsx)("div",{children:"Repository:"}),Object(b.jsx)("a",{href:"https://github.com/facebook/draft-js",target:"_blank",rel:"noreferrer",children:"https://github.com/facebook/draft-js"})]}),Object(b.jsxs)(j.a,{direction:"horizontal",gap:2,children:[Object(b.jsx)("div",{children:"NPM:"}),Object(b.jsx)("a",{href:"https://www.npmjs.com/package/draft-js",target:"_blank",rel:"noreferrer",children:"https://www.npmjs.com/package/draft-js"})]})]}),code:"https://github.com/phamhuu2701/react-storybook/tree/master/src/components/DraftJsEditor",usage:{name:"DraftJsEditor",props:[["textHtml",'""'],["onChange","{(textHtml) => {}}"],["height","{200}"]]},api:[["textHtml","string","","The value of the input element, required for a controlled component."],["onChange","func","","Callback fired when the value is changed."],["height","number","200","Number of pixel height to editor form."]]},F=(n(221),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).handleOnScroll=function(){window.__scrollTimeout&&clearTimeout(window.__scrollTimeout),window.__scrollTimeout=setTimeout((function(){window.pageYOffset<=200?o.setState({show:!1}):o.setState({show:!0})}),200)},o.handleScrollToTop=function(){window.scrollTo({top:0,left:0})},o.state={show:!1},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleOnScroll)}},{key:"render",value:function(){return this.state.show&&Object(b.jsx)("div",{className:"scroll-to-top",onClick:this.handleScrollToTop})}}]),n}(o.Component)),P=[L,{name:"Scroll To Top",demo:function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo({top:300,left:0})}},{key:"render",value:function(){return Object(b.jsx)("div",{style:{height:2e3},children:Object(b.jsx)(F,{})})}}]),n}(o.Component),document:null,code:"https://github.com/phamhuu2701/react-storybook/tree/master/src/components/ScrollToTop",usage:{name:"ScrollToTop",props:[]},api:[]}];(P=P.map((function(e,t){return Object(v.a)(Object(v.a)({},e),{},{id:t+1})}))).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));var q=P,z=(n(222),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={selected:null},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({selected:q[0]})}},{key:"render",value:function(){var e=this,t=this.state.selected;return Object(b.jsxs)("div",{style:{margin:"1em",display:"flex",height:"100vh"},children:[Object(b.jsx)("div",{style:{minWidth:200},children:Object(b.jsx)(h.a,{variant:"flush",children:q.map((function(n,o){return Object(b.jsx)(h.a.Item,{action:!0,onClick:function(){return e.setState({selected:n})},variant:(null===t||void 0===t?void 0:t.id)===n.id?"primary":"",children:n.name},o)}))})}),Object(b.jsx)("div",{style:{borderRight:"1px solid #dcdcdc",margin:"0 1em"}}),Object(b.jsx)("div",{style:{flex:1},children:t&&Object(b.jsx)(g,{component:t})})]})}}]),n}(o.Component)),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,229)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),c(e),a(e)}))};n(224);a.a.render(Object(b.jsx)(z,{}),document.getElementById("root")),J()}},[[225,1,2]]]);
//# sourceMappingURL=main.3f2d52e2.chunk.js.map