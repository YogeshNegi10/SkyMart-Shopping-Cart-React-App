import { toast } from 'react-toastify';


export const notify = (message) => toast(message,{
   duration: 1000,
   position: "top-center",})