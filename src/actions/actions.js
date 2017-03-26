import axios from 'axios';

export function getData() {
  const request = axios.get('http://reduxblog.herokuapp.com/api/posts?key=43331');
  return (dispatch) => {
    request.then(response =>{
      dispatch({
        type: 'FETCH_DATA', 
        payload: response.data
      });
    });
  };
}


export function postData(title) {  
  const request = axios.get('http://reduxblog.herokuapp.com/api/posts?key=43331');
  return (dispatch) => {
    request.then(reponse =>{
      dispatch({        
        type: 'POST_DATA', 
        payload: reponse.data
      });
      dispatch(getData());
    });
  };
}

