import decode from 'jwt-decode';
// for login and sigUp
const getUserInfo = (cookieHeader) => {
  const token = cookieHeader[0].split('=')[1];
  if (token) {
    const decoded = decode(token);

    return decoded;
  }
  return null;
};

export default getUserInfo;
