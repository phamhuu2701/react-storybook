import ReactDraftWysiwygDemo from '../Demos/ReactDraftWysiwygDemo'

export default {
    name: 'React Draft Wysiwyg',
    demo: <ReactDraftWysiwygDemo />,
    document: [
        { title: 'Repository', url: 'https://github.com/jpuri/react-draft-wysiwyg' },
        { title: 'npm', url: 'https://www.npmjs.com/package/react-draft-wysiwyg' },
    ],
    github: 'https://github.com/phamhuu2701/react-storybook/tree/master/src/components/ReactDraftWysiwyg',
    usage: {
        name: 'ReactDraftWysiwyg',
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
