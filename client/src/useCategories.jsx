import axios from 'axios';
import React ,{useState, useEffect} from 'react'

const useCategories = () => {
  
  const [categories, setCategories] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/categories/")
    .then(res => setCategories(res.data));
  }, [])
  
  return [categories,];
}

export default useCategories