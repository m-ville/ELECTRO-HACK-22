import Home from './Pages/Home/Home';
import News from './Pages/News/News'
import Community from './Pages/Community/Community'
import SurveyForm from './Pages/Survey/SurveyForm'
import ChatRoom from './Pages/ChatRoom/ChatRoom'
// import Navbar from './Components/Navbar/Navbar'
// import Footer from './Components/Footer/Footer'

export const Routee = [
    {
        id: 1,
        component: <Home/>,
        path: "/",
        exact: true,  
    },
    {
      id: 2,
      component: <ChatRoom/>,
        path: "/chat",
      exact: true,
    },
    {
      id: 3,
      component: <Community/>,
      path: "/community",
      exact: true,
    },
    {
      id: 4,
      component: <News/>,
      path: "/news",
      exact: true,
    },
    {
      id: 5,
      component: <SurveyForm/>,
      path: "/survey",
      exact: true,
    },
    // {
    //   id: 6,
    //   component: <Navbar/>,
    //   path: "/navbar",
    //   exact: true,
    // },
    // {
    //   id: 7,
    //   component: <Footer/>,
    //   path: "/footer",
    //   exact: true,
    // }
 
]