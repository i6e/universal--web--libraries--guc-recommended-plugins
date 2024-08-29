import { VariantPlugin } from "@icehouse/universal--web--libraries--guc-core";
import {
  MediaVariantPlugin,
  MediaVariantPluginTheme,
} from "@icehouse/universal--web--libraries--guc-variant-plugin-media";

export interface RecommendedVariantPluginsTheme
  extends MediaVariantPluginTheme {}

export const RecommendedVariantPlugins: VariantPlugin<RecommendedVariantPluginsTheme>[] =
  [MediaVariantPlugin];
