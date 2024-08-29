import { TypePlugin } from "@icehouse/universal--web--libraries--guc-core";
import {
  MarginTypePlugins,
  MarginTypePluginTheme,
} from "@icehouse/universal--web--libraries--guc-type-plugin-margin";

export interface RecommendedTypePluginsTheme extends MarginTypePluginTheme {}

export const RecommendedTypePlugins: readonly TypePlugin<RecommendedTypePluginsTheme>[] =
  [...MarginTypePlugins];
