const url = 'http://localhost:3001/api/applications';

export async function getApplications(page: number, limit: number) {
  try {
    const response = await fetch(`${url}/?_page=${page}&_limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
