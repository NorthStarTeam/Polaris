import ErrorMessage from './ErrorMessage';

const NotFound = () => (
  <ErrorMessage
    title="Oops! Page not found."
    message="The page you are looking for does not exist!"
    className="test_404-page"
  />
);
