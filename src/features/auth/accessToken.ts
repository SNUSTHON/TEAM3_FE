export const getAccessToken = () => localStorage.getItem("accessToken");
export const setAccessToken = (accessToken: string) => localStorage.setItem("accessToken", accessToken);
