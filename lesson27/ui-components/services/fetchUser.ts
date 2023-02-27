async function fetchUser(username: string) {
  const res = await fetch(`/api/user/${username}`);
  return res.json();
}

export default fetchUser;
