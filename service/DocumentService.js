import axios from "axios";

export const getDocuments = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=12"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDocumentId = async () => {
  const documents = await getDocuments();
  return documents.map((document) => ({
    params: {
      id: `${document.id}`,
    },
  }));
};

export const getDocumentById = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
