import ReactDraftJsRoute from "./ReactDraftJsRoute"
import ReactDraftWysiwygRoute from "./ReactDraftWysiwygRoute"
import ScrollToTopRoute from "./ScrollToTopRoute"

let routes = [ReactDraftJsRoute, ScrollToTopRoute, ReactDraftWysiwygRoute]

routes = routes.map((item, index) => ({ ...item, id: index + 1 }))

routes.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

export default routes
