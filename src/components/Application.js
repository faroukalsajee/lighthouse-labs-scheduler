import React, { useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import {  getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

// Web Socket Configuration - localhost:8001 is API port
const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

// Reducer constant definition
const SET_INTERVIEW = 'SET_INTERVIEW';

export default function Application(props) {

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    dispatch
  } = useApplicationData();

  // Sets Interview when Web Socket Message received from Server
	// Message contains ID and interview object
	useEffect(() => {
		socket.onmessage = (event) => {
			const messageData = JSON.parse(event.data);
			setInterviewFromMessage(messageData);
		};
	});

  // Calls reducer dispatch with updated appointment list
	const setInterviewFromMessage = (messageData) => {
		const appointments = changeAppointments(messageData);
		messageData.type === 'SET_INTERVIEW' &&
			dispatch({
				type: SET_INTERVIEW,
				payload: { appointments }
			});
	};

	// Updates appointments object with value received via Web Socket message
	const changeAppointments = (messageData) => {
		const appointment = {
			...state.appointments[messageData.id],
			interview: messageData.interview ? { ...messageData.interview } : null
		};
		const appointments = {
			...state.appointments,
			[messageData.id]: appointment
		};
		return appointments;
	};

  const appointmentObjects = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  const appointment = appointmentObjects.map((appointmentObject) => {
    const interview = getInterview(state, appointmentObject.interview)

    return (
        <Appointment 
          {...appointmentObject}
          key={appointmentObject.id}
          interview={interview}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      )
  });

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointment}
        <Appointment key="last" time="5pm" bookInterview={bookInterview} cancelInterview={cancelInterview} 
        />
      </section>
    </main>
  );
}