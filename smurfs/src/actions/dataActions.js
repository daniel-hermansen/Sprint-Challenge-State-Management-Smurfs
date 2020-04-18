import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FAILURE = "FAILURE";
export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";

const source = `http://localhost:3333/smurfs`;

export const getSmurf = () => dispatch => {
    const smurf = axios.get(`${source}`)
        dispatch({type: FETCH_DATA_START });
            smurf
            .then(res => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
                console.log('Fetched Smurf', res.data[0]);
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err });
            });
};


export const addSmurf = smurf => dispatch => {
    const newSmurf = axios.post(`${source}`, smurf);
    dispatch({ type: ADDING_SMURF_START });
    newSmurf
        .then(res => {
            dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: err });
        });
};

export const updateSmurf = (info, id) => dispatch => {
    const updatedSmurf = axios.put(`${source}/${id}`, info);
    dispatch({ type: UPDATING });
    updatedSmurf
      .then(res => {
        dispatch({ type: UPDATED, payload: res.data });
      })
      .catch(err => dispatch({ type: FAILURE, payload: err }));
  };