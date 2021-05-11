export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "609abdbbabddeb5ceaec10e8",
                  title: "Sanity Studio",
                  name: "carole-web-studio",
                  apiId: "5e04b2b5-f2d5-46ee-acf6-49e59e4ca7a1",
                },
                {
                  buildHookId: "609abdbc26fdbd48c749dc03",
                  title: "Blog Website",
                  name: "carole-web",
                  apiId: "88a9a298-0db9-4a3d-97ad-1e8c2932aaf3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/institut-carolec/carole-web",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://carole-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
