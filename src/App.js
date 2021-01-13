import React ,{useState} from "react";
import { BrowserRouter, Switch, Route, useParams, state } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap-theme/bootstrap.min.cyborg.css";
import Container from "react-bootstrap/Container";
import Homepage from "./pages/homepage/homepage.page";
import Problems from "./pages/problems.page";
import Upsolve from "./pages/upsolve/upsolve.page";
import LogReg from "./pages/logreg/LogReg";
import Codeforces from './pages/upsolve/Codeforces'
import Codechef from './pages/upsolve/Codechef'
import Atcoder from './pages/upsolve/Atcoder'
import LaddersLevel from "./pages/ladders/LaddersLevel";
import LaddersTopic from "./pages/ladders/LaddersTopic";
import PracticeLevel from "./pages/practice/PracticeLevel";
import PracticeTopic from "./pages/practice/PracticeTopic"; 
import Profile from './pages/profile/ProfilePage'
import Virtual from './pages/upsolve/virtual.page'
import Info from './pages/profile/FillInfo'
import '../node_modules/aos/dist/aos.css'
import '../node_modules/react-multi-carousel/lib/styles.css'
import "./App.css";
import LaddersQuestionPage from "./pages/ladders/LaddersQuestionPage";
import Validate from './Validate'
import NewpassForm from './pages/logreg/ForgotPass'
//react context
export const CredentialsContext=React.createContext();

const App = () => {
  if(localStorage.getItem("creds")){
    Validate();
  }

  const profile = ({match}) => {
    return(

      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS 
      // ACCORDING TO THE BASE OR RADIX SPECIFIED
      <Profile handle={match.params.id} />
    );
  }
  
 const [creds,setCreds]=useState({});
  return (
    <>
      <Container fluid style={{paddingBottom:'0', paddingTop: '0'}}>
        <CredentialsContext.Provider value={{creds,setCreds}}>
        <BrowserRouter>
        
          <Switch>
            <Route exact path="/problems" component={Problems} />
             <Route exact path="/logreg" component={LogReg}/>
             <Route exact path="/upsolve/codeforces" component={Codeforces}/>   
             <Route exact path="/laddersLevel" component={LaddersLevel}/>
             <Route exact path="/laddersTopic" component={LaddersTopic}/>
             <Route exact path="/practiceTopic" component={PracticeTopic}/>
             <Route exact path="/practiceLevel" component={PracticeLevel}/>
             <Route exact path="/laddersLevel/topic/page1" component={LaddersQuestionPage}/>
<<<<<<< HEAD
             <Route exact path="/upsolve/codechef" component={Codechef}/>
             <Route exact path="/upsolve/atcoder" component={Atcoder}/>
             <Route exact path="/profile" component={Profile}/>
=======
             <Route exact path="/upsolve/virtual" component={Virtual}/>
>>>>>>> 8a861e35c5c1453e56d0c4f8bba17cccc6bfbeba
              <Route exact path="/" component={Homepage}/>
            <Route exact path="/home" component={Homepage}/>
            <Route exact path="/createProfile" component={Info}/>
            <Route exact path="/forgPass" component={NewpassForm}/>
            <Route exact path="/profile/:id" component={profile} />
          </Switch>
        </BrowserRouter>
        </CredentialsContext.Provider>
      </Container>
    </>
  );
};

export default App;
