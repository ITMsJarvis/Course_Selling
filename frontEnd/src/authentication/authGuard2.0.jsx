import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = (WrappedComponent) => {
    return function WithAuthGuard(props) {
        const navigate = useNavigate(); // This should be inside the functional component

        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            async function checkAuthentication() {
                try {
                    const token = localStorage.getItem("token");
                    if (token) {
                        // Check token validity and expiry here if necessary
                        setIsAuthenticated(true);
                    }
                } catch (error) {
                    // Handle any errors during authentication
                    console.error("Authentication error:", error);
                } finally {
                    setIsLoading(false);
                }
            }
            checkAuthentication();
        }, []);

        if (isLoading) {
            // You can show a loading spinner here
            return <div>Loading...</div>;
        }

        if (isAuthenticated) {
            return <WrappedComponent {...props} />;
        } else {
            // Redirect unauthenticated users to a login page or show a message
            navigate("/user/login");
            return null; // Return null or another component if necessary
        }
    };
};

export default AuthGuard;
