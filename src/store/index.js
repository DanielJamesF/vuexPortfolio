import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    projects: [{
        id: 1,
        title: "Calculator",
        image: "../assets/JSCalculator.png",
        desc: "This is a calculator made using HTML, CSS and JavaScript",
        live: "https://graceful-toffee-220d3a.netlify.app/",
        github: "https://github.com/DanielJamesF/Javascript_Calculator"

      },
      {
        id: 2,
        title: "Holiday destination",
        image: "../assets/holidaydestination.png",
        desc: "This is a hoiliday destination website with a contact page made using HTML, CSS",
        live: "https://dapper-praline-4dabc1.netlify.app",
        github: "https://github.com/DanielJamesF/holiday_destination"

      },
      {
        id: 3,
        title: "Rainbow",
        image: "../assets/rainbow.png",
        desc: "   This is a rainbow made using HTML, CSS",
        live: "https://peaceful-hamster-c0a214.netlify.app",
        github: "https://github.com/DanielJamesF/Rainbow"

      },
      {
        id: 4,
        title: "Website",
        image: "../assets/Website.png",
        desc: "This is a website made using HTML, CSS",
        live: "https://delicate-tartufo-8fde53.netlify.app",
        github: "https://github.com/DanielJamesF/website"

      },
      {
        id: 5,
        title: "Keyboard",
        image: "../assets/keyboard.png",
        desc: "This is a keyboard made using HTML, CSS and JavaScript",
        live: "https://glittering-bavarois-894489.netlify.app/",
        github: "https://github.com/DanielJamesF/keyboard"

      },
      {
        id: 6,
        title: "To do app",
        image: "../assets/ToDoApp.png",
        desc: "This is a calculator made using HTML, CSS and JavaScript",
        live: "https://spontaneous-cannoli-d39645.netlify.app/",
        github: "https://github.com/DanielJamesF/ToDoApp"
      }
    ]
  },
  carousel: [{
      id: 1,
      name: "Joel Mukanya",
      img: "../assets/joel2.jpg",
      comment: "Daniel is respectful and takes his studies seriously. Daniel has demonstrated a key grasp of the Web Design topics we have covered in class. He continues to be an excellent student. Your organization would benefit from his skills. Joel Mukanya- Coding Lecturer."
    },
    {
      id: 2,
      name: "Clayton Adonis",
      img: "../assets/Clayton.png",
      comment: " Daniel is an absolute delight to work with and he always makes any room he is in better."
    },
    {
      id: 3,
      name: "Muddathir Dawood",
      img: "../assets/Muddathir.png",
      comment: "Daniel is a developer with potential to become something great in the future. It is a pleasure watching his skill grow with each project he is given and motivates me and other to do better. He will add an enormous amount of value to any team"
    },
    {
      id: 4,
      name: "Jared Isaacs",
      img: "../assets/Jared.png",
      comment: "Daniel is an outgoing, hardworking, creative web developer. Who sets out to achieve his goals through perseverance and determination. As his colleague I see a bright future filled with prosperity being set in front of him, with his iron will to overcome any impediments that comes he way. As such he has the set skills to fulfill any task that will be given to him, making him a great asset to any business or company."
    },
    {
      id: 5,
      name: "Reagan Carolussen",
      img: "../assets/Reagan1.jpg",
      comment: "Daniel is a trustworthy, multi-talented individual that shows the ability to learn and grasp new concepts quickly. He is focused and works will with others. I highly recommend him to any team or organization."
    }
  ],

  getters: {},
  mutations: {


  },
  actions: {

  },

  modules: {}
})