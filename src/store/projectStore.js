import { defineStore } from "pinia";

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 6,
        name: "Kivy-NotePad",
        image: new URL("../assets/imgs/kivy.png", import.meta.url).href,
        description:
            "Simple notepad with GUI made using Kivy and Python",
        tech: ["TypeScript", "Discord.js", "Node.js"],
        link: "https://github.com/MIP01/Kivy-NotePad",
        featured: true,
      },
      {
        id: 1,
        name: "Python-FileAnalizer",
        image: new URL("../assets/imgs/python.png", import.meta.url)
          .href,
        description:
          "Simple program to analize file",
        tech: ["Vue.js", "Pinia", "TailwindCSS"],
        link: "https://github.com/MIP01/Python-FileAnalizer",
        featured: false,
      },
      {
        id: 2,
        name: "Python-BillingWarnet",
        image: new URL("../assets/imgs/python.png", import.meta.url)
          .href,
        description:
          "Simple billing program with GUI using Python",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/MIP01/Python-BillingWarnet",
      },
      {
        id: 3,
        name: "API-Flask",
        image: new URL("../assets/imgs/flask.jpg", import.meta.url).href,
        description:
          "Simple API with CRUD for Backend Website using Python",
        tech: ["Vue.js", "TailwindCSS"],
        link: "https://github.com/MIP01/API-Flask",
        featured: true,
      },
      {
        id: 4,
        name: "Flask-MVC",
        image: new URL("../assets/imgs/flask-MVC.jpg", import.meta.url).href,
        description:
          "Implement API for login using MVC Architecture",
        tech: ["JS", "Node.js", "MongoDB", "Heroku"],
        link: "https://github.com/MIP01/Flask-MVC",
      },
    ],
  }),
  getters: {
    getAllProjects: (state) => state.projects,
    getFeaturedProjects: (state) =>
      state.projects.filter((project) => project.featured),
  },
});
