import axios from "axios";

export async function fetchData<T>(url: string): Promise<any> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
