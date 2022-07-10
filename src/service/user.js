import axios from "axios";

const getUser = async () => {
  try {
    const resUser = await axios.get("/");
    const data = await resUser.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getUser };
