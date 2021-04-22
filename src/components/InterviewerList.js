import React from "react";
import PropTypes from "prop-types";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

   /*Takes in Three props
  interviewers: array of objs containing info of each interviewer
  interviewer: id
  setInterviewer:function; accepts id of interviewer
  */

export default function InterviewerList(props) {

    InterviewerList.propTypes = {
        value: PropTypes.number,
        onChange: PropTypes.func.isRequired
    };
    
    const interviewers = props.interviewers.map(item => {
        return <InterviewerListItem
            key={item.id}
            onChange={() => props.onChange(item.id)}
            selected = {item.id === props.value}
            name= {item.name}
            avatar={item.avatar}
        />
    })

    return <section>
                <h4 className="interviewers__header text--light">Interviewer</h4>
                <ul className="interviewers__list">
                    {interviewers}
                </ul>
            </section>
}
