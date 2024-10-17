import { Navigate, useLocation } from "react-router-dom";

export default function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation();

    console.log(location.pathname, isAuthenticated);

    const isLoginOrRegister = location.pathname.includes('/login') || location.pathname.includes('/register');
    const isAdminPage = location.pathname.includes('admin');
    const isServicePage = location.pathname.includes('service');

    if (!isAuthenticated && !isLoginOrRegister) {
        return <Navigate to="/auth/login" />;
    }

    if (isAuthenticated && isLoginOrRegister) {
        return user?.role === 'admin' ? <Navigate to="/admin/dashboard" /> : <Navigate to="/home" />;
    }

    if (isAuthenticated && user?.role !== 'admin' && isAdminPage) {
        return <Navigate to="/unauth-page" />;
    }

    if (isAuthenticated && user?.role === 'admin' && isServicePage) {
        return <Navigate to="/admin/dashboard" />;
    }

    return <>{children}</>;
}
