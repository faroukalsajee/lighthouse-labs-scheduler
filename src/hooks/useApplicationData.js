import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW,
} from "reducers/Application";

export default function useApplicationData(props) {
  //useReducer call to set state.
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  // Sets current day on sidebar click
  const setDay = (day) => dispatch({ type: SET_DAY, day: day });

  useEffect(() => {
    // Create WebSocket connection.
    const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

    // Connection opened
    socket.addEventListener("open", function (event) {
      socket.send("Hello Server!");
    });

    // Listen for messages
    socket.addEventListener("message", function (event) {
      console.log("Message from server ", event.data);
    });

    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      });
    });
  }, []);

  function bookInterview(id, interview) {
    return axios.put(`/api/appointments/${id}`, { interview }).then((r) =>
      dispatch({
        type: SET_INTERVIEW,
        id,
        interview,
      })
    );
  }

  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`).then((r) =>
      dispatch({
        type: SET_INTERVIEW,
        id,
        interview: null,
      })
    );
  }
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    dispatch,
  };
}
