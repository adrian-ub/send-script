import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
const site = "https://send-script.adrianub.dev/";
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: "Send Movie Script",
      tableOfContents: false,
      defaultLocale: "root",
      lastUpdated: true,
      editLink: {
        baseUrl: "https://github.com/adrian-ub/send-script/edit/main",
      },
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
      },
      social: {
        github: "https://github.com/adrian-ub/send-script",
      },
      sidebar: [
        {
          label: "Getting Started",
          link: "/getting-started",
        },
        {
          label: "Movies",
          autogenerate: {
            directory: "movies",
          },
        },
      ],
      components: {
        MarkdownContent: "./src/components/MarkdownContent.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: { property: "og:image", content: site + "og.png" },
        },
        {
          tag: "meta",
          attrs: { property: "twitter:image", content: site + "og.png" },
        },
      ],
    }),
  ],
});
