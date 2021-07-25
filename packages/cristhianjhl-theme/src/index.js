import Root from "./pages/Root";
import link from "@frontity/html2react/processors/link";

const cristhianjhlTheme = {
  name: "cristhianjhl-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: true,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  },
};

export default cristhianjhlTheme;
