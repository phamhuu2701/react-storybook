import ReactDraftJsDemo from '../Demos/ReactDraftJsDemo'

export default {
    name: 'React Draft Js',
    demo: <ReactDraftJsDemo />,
    document: [
        { title: 'Home page', url: 'https://draftjs.org' },
        { title: 'Repository', url: 'https://github.com/facebook/draft-js' },
        { title: 'npm', url: 'https://www.npmjs.com/package/draft-js' },
    ],
    github: 'https://github.com/phamhuu2701/react-storybook/tree/master/src/components/ReactDraftJs',
    usage: {
        name: 'ReactDraftJs',
        props: [
            ['htmlText', '""'],
            ['onChange', '{(htmlText) => {}}'],
            ['height', '{200}'],
        ],
    },
    api: [
        [
            'htmlText',
            'string',
            '',
            'The value of the input element, required for a controlled component.',
        ],
        ['onChange', 'func', '', 'Callback fired when the value is changed.'],
        ['height', 'number', '200', 'Number of pixel height to editor form.'],
    ],
}
