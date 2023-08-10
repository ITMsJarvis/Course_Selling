export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  // Add additional token validation logic here if needed
  return !!token; // Return true if the token exists
};
