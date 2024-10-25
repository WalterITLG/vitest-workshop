export async function getUserData(apiClient, userId) {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
}
