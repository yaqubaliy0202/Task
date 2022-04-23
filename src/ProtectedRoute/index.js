const { Navigate } = require('react-router-dom');

const ProtectedRoute = ({ user, children }) => {
	if (!user) {
		return <Navigate to='/dashboard' replace />;
	}

	return children;
};

export default ProtectedRoute;
