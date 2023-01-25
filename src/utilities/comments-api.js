import sendRequest from './send-request';

const BASE_URL = '/api/comments/:tweetId';

export function getAll() {
  return sendRequest(BASE_URL);
}
export function create(payload) {
  return sendRequest(BASE_URL, "POST", payload);
}

export function updateById(id, payload) {
  return sendRequest(`${BASE_URL}/${id}`, "PUT", payload);
}
export function deleteById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
