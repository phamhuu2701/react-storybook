import Test from "./Test";
import DraftJsEditor from "./DraftJsEditor";

let routes = [Test, DraftJsEditor];

routes = routes.map((item, index) => ({ ...item, id: index + 1 }));

routes.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

export default routes;
