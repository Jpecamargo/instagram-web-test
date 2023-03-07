export default function InstagramApi() {
  const clientID = "741667847546702";
  const redirectURI = "https://instagram-api-v2e0.onrender.com/";

  // Get the access token from the URL fragment
  const getAccessToken = (): string | null => {
    const match = window.location.hash.match(/#access_token=([^&]*)/);
    return match ? match[1] : null;
  };

  // If the access token is not already present in the URL, redirect the user to the authorization URL
  if (!getAccessToken()) {
    const authorizationUrl = `https://api.instagram.com/oauth/authorize/?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token`;
    window.location.href = authorizationUrl;
  }

  // Use the access token to make a GET request to the Instagram API
  const accessToken = getAccessToken();
  const url = `https://api.instagram.com/v1/users/self/?access_token=${accessToken}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
