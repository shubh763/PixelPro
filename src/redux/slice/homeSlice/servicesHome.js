import { axiosBaseURL } from "../../../apis/dharmaApi";

// fetch banners
const fetchTestimonial = async (url) => {
  const response = await axiosBaseURL.get(url);
  return response.data;
};



// fetch gallery
const fetchPageData = async (url) => {
  const response = await axiosBaseURL.get(url);
  return response.data;
};



const servicesHome = {
  fetchTestimonial,
  
  fetchPageData,
 
};

export default servicesHome;
