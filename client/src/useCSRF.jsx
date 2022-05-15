import React, { useState, useEffect } from "react";

const useCSRF = () => {
  const [token, setToken] = useState(null);

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  

  useEffect(() => {
    const csrftoken = getCookie("csrftoken");
    setToken(csrftoken);
  })

  return [token];
};

export default useCSRF;
