import DraftJsEditor from "./DraftJsEditor";
import ScrollToTop from "./ScrollToTop";

let routes = [DraftJsEditor, ScrollToTop];

routes = routes.map((item, index) => ({ ...item, id: index + 1 }));

routes.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

export default routes;
