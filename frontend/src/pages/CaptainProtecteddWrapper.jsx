import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useState } from "react";
import axios from "axios";
const CaptainProtectedWrapper = ({ children }) => {
  // const {user}=useContext(UserDataContext)
  const token = localStorage.getItem("token");
  // console.log(token)
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);
  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setCaptain(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((err) => {
      navigate("/captain-login");
    });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    // <div>UserProtectedWrapper</div>
    <>{children}</>
  );
};

export default CaptainProtectedWrapper;
