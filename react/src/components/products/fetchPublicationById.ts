
import { Publication } from "@types/models";

const fetchUserById = async (publicationId:any) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/publication/" + publicationId,
        requestOptions
      );
      const result:Publication = await response.json();

      return result;

    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  export default fetchUserById;