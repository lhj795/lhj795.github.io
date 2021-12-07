import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Homepage from './Homepage';
import Hyperlink from './hyperlink/Hyperlink';
import TechnoCat1 from './hyperlink/Technocat1';
import TechnoCat2 from './hyperlink/Technocat2';
import TechnoCat3 from './hyperlink/Technocat3';
import TechnoCat4 from './hyperlink/Technocat4';
import TechnoCat5 from './hyperlink/Technocat5';
import TechnoCat6 from './hyperlink/Technocat6';
import TechnoCat7 from './hyperlink/Technocat7';
import InputAndOutput from './input-and-output/InputAndOutput';
import { Resume } from './change-over-time/InteractiveResume';

function App() {
  return (
    <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/input-and-output" component={InputAndOutput} />
        <Route path="/hyperlink" component={Hyperlink} />
        <Route path="/technocat1" component={TechnoCat1} />
        <Route path="/technocat2" component={TechnoCat2} />
        <Route path="/technocat3" component={TechnoCat3} />
        <Route path="/technocat4" component={TechnoCat4} />
        <Route path="/technocat5" component={TechnoCat5} />
        <Route path="/technocat6" component={TechnoCat6} />
        <Route path="/technocat7" component={TechnoCat7} />
        <Route path="/change-over-time" component={Resume} />
        <Route path='/topic-presentation' component={() => {
          window.location.href = 'https://docs.google.com/presentation/d/1-LFw1YcZnGfeDD1SmCLLhCnABr515LoeM46IK-Bt2hk/edit?usp=sharing';
          return null;
        }}/>
    </Router>
  );
}

export default App;


