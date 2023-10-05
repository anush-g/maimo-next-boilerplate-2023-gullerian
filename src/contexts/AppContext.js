import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [shows, setShows] = useState([]);
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [cast, setCast] = useState([]);

  const getShows = useCallback(async () => {
    setLoading(true);
    try {
      const showsReq = await axios.get(
        `https://api.tvmaze.com/shows`
      );
      setShows(showsReq.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getShows();
  }, [getShows]);

  const getShow = useCallback(async (id) => {
    setShowLoading(true);
    try {
      const show = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      console.log(show.data);
      setShow(show.data);
      setShowLoading(false);
    } catch (error) {
      console.log('ERRORRR NO EXISTE SHOW');
    }
  }, []);

  const getCast = useCallback(async (id) => {
    try {
      const castReq = await axios.get(
        `https://api.tvmaze.com/shows/${id}/cast`
      );
      setCast(castReq.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [crew, setCrew] = useState([]);

  const getCrew = useCallback(async (id) => {
    try {
      const crewReq = await axios.get(
        `https://api.tvmaze.com/shows/${id}/crew`
      );
      setCrew(crewReq.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        shows,
        loading,
        getShow,
        show,
        showLoading,
        cast,
        getCast, // Agregamos la función getCast al contexto
        crew, // Nuevo estado para el equipo de producción
        getCrew,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContexts must be used within a AppContextProvider');
  }
  return context;
};

export default AppContext;