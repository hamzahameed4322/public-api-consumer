import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-hot-toast';

export const useCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Breaking Change Fixed: Appending specified fields to filter the API payload
        const response = await axiosInstance.get('/all', {
          params: {
            fields: 'name,flags,population,region,capital'
          }
        });
        
        setCountries(response.data);
      } catch (err) {
        const errorMessage = err.response?.data?.message || 'Failed to fetch country data';
        setError(errorMessage);
        toast.error(`Network Error: ${errorMessage}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};