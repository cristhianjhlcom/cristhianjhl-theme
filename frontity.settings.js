const settings = {
  name: "cristhianjhl",
  state: {
    frontity: {
      "url": "https://cristhianjhl.com/",
      "title": "Cristhian Hernández Desarrollador Frontend Freelancer en Lima",
      "description": "Tienes un negocio digital en mente, pero aun no sabes como empezar. Te ayudo a que tu producto o servicio tenga prencencia en Internet."
    },
    googleAnalytics: {
      trackingId: "UA-167480853-1",
    },
  },
  packages: [
    {
      name: "cristhianjhl-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://wp.cristhianjhl.com/",
          homepage: "/homepage",
          postsPage: "/blog",
          postTypes: [
            {
              type: "proyecto",
              endpoint: "proyecto",
              archive: "/proyecto"
            }
          ],
          taxonomies: [
            {
              taxonomy: "proyecto_cat",
              endpoint: "proyecto_cat",
              postTypeEndpoint: "proyecto_cat"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
