import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './MainCard.css';



const MainCard = (props) => {
  if(props.buttonDis){
    return(
      <>
      <div className="card">
      <h3 className="title">{props.ProblemData.name}</h3>
      <div className="bar">
        <div className="emptybar" />
        <div className={props.ProblemData.status === "solved"? "filledbar": "exapmplebar"}></div>
      </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div>
        <div className="container_card">
          <Button className="buttondisp" href={props.ProblemData.url}>Solve</Button>
        </div>
      </div>
    </>
    )
  }
  else{
  return(
    <>
      <div className="card">
      <h3 className="title">{props.ProblemData.name}</h3>
      <div className="bar">
        <div className="emptybar" />
        <div className={props.ProblemData.status === "solved"? "filledbar": ""}></div>
      </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle className="stroke" cx="60" cy="60" r="50"/>
          </svg>
        </div>
        <div className="container_card">
          <div className={props.count > 1 ? "lock": "check"}></div>
        </div>
      </div>
    </>
  )
  }
};



export default MainCard;