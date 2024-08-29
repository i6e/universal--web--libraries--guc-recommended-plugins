import { RecommendedTypePluginsTheme } from "./lib/RecommendedTypePlugins";
import { RecommendedVariantPluginsTheme } from "./lib/RecommendedVariantPlugins";

export interface RecommendedPluginsTheme
  extends RecommendedTypePluginsTheme,
    RecommendedVariantPluginsTheme {}

export { RecommendedTypePlugins } from "./lib/RecommendedTypePlugins";
export { RecommendedVariantPlugins } from "./lib/RecommendedVariantPlugins";
