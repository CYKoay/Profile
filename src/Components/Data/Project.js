import eTracker from "../../assets/project_eTracker.jpg"
import gameHub from "../../assets/project_game-hub.jpg"
import profile from "../../assets/project_profile.jpg"
import upcoming from "../../assets/project_upcoming.jpg"

const projectList = [
    {
        name: "eTracker",
        id: 0,
        tech: ["React", "Typescript",  "ChakraUI" ,"Firebase", "ChartJS"],
        description: "A project driven by my own interest and passion, which serve the purpose to organise my daily task in order to improve my daily efficiency and productivity.",
        image: eTracker,
        completion: true,
        website: "https://cykoay.github.io/eTracker",
        code: "https://github.com/CYKoay/eTracker"
    },
    {
        name: "game-hub",
        id: 1,
        tech: ["React", "Typescript",  "ChakraUI" ],
        description: `This was the first ever APP I've ever created with React. The project was done during my enrolment in the course named "React 18 for Beginners" with Mosh Hamedani.`,
        image: gameHub,
        completion: true,
        website: "https://vercel.com/cykoay/game-hub/2GKUHk4PemAAzezfuFrAhB58MdYG",
        code: "https://github.com/CYKoay/game-hub"
    },
    {
        name: "Portfolio_CY",
        id: 2,
        tech: ["React", "Javascript",  "Bootstrap", "Sass", "Animate.js", "FramerMotion" ],
        description: "Project created with the purpose to demonstrate my tech portfolio, which would come in handy for my future job hunting.",
        image: profile,
        completion: true,
        website: "https://profile-gilt-theta.vercel.app/",
        code: "https://github.com/CYKoay/Profile"
    },
    {
        name: "Lee's Bakery",
        id: 3,
        tech: ["React", "Typescript",  "Firebase",  "ChakraUI", "FramerMotion", "Animate.js" ],
        description: "A web APP created to serve as a platform for browsing menus, ordering items from a bakery. The shop owner could also use this APP to manage orders and handle payments.",
        image: upcoming,
        completion: false,
        website: "",
        code: ""
    },
]

export default projectList;