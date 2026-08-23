import homeHtml from "./content/home.html?raw";
import workHtml from "./content/work.html?raw";
import aboutHtml from "./content/about.html?raw";
import canaryWharfHtml from "./content/canary-wharf.html?raw";
import centiHtml from "./content/centi.html?raw";
import propertyCompanyHtml from "./content/greystar.html?raw";

export const routeDocuments: Record<string, string> = {
  "/": homeHtml,
  "/work": workHtml,
  "/about": aboutHtml,
  "/work/canary-wharf": canaryWharfHtml,
  "/work/centi": centiHtml,
  "/work/london-property-company": propertyCompanyHtml,
};

export function documentForPath(path: string) {
  return routeDocuments[path];
}
