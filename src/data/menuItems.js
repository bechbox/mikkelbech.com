import InfoIcon from "../../static/icons/regular/info.svg"
import FactoryIcon from "../../static/icons/regular/factory.svg"
import UsersIcon from "../../static/icons/regular/users-three.svg"
import CoursesIcon from "../../static/icons/regular/book-bookmark.svg"
import BulbIcon from "../../static/icons/regular/lightbulb.svg"
import DevIcon from "../../static/icons/regular/desktop.svg"
import GuitarIcon from "../../static/icons/regular/guitar.svg"

const menuItems = [
  { key: "1", path: "/", icon: InfoIcon, title: "Introduction" },
  { key: "2", path: "/startups", icon: FactoryIcon, title: "Startups" },
  {
    key: "3",
    path: "/service-design",
    icon: UsersIcon,
    title: "Service Design",
  },
  { key: "4", path: "/courses", icon: CoursesIcon, title: "Courses" },
  { key: "5", path: "/thoughts", icon: BulbIcon, title: "Thoughts" },
  { key: "6", path: "/dev", icon: DevIcon, title: "Dev" },
  { key: "7", path: "/guitar", icon: GuitarIcon, title: "Guitar" },
]

export default menuItems
