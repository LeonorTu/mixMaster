import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);

  return <h2>Oops, there was an error...</h2>;
};
export default SinglePageError;
