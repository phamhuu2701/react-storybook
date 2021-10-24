import React from "react";
import { Stack } from "react-bootstrap";
import DraftJsEditorDemo from "../Demos/DraftJsEditorDemo";

export default {
  name: "Draft Js Editor",
  demo: DraftJsEditorDemo,
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
        <a
          href="https://github.com/facebook/draft-js"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/facebook/draft-js
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
  code: "https://github.com/phamhuu2701/react-storybook/tree/master/src/components/DraftJsEditor",
  usage: {
    name: "DraftJsEditor",
    props: [
      ["textHtml", '""'],
      ["onChange", "{(textHtml) => {}}"],
      ["height", "{200}"],
    ],
  },
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
};
