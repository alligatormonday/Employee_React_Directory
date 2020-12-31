import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomAPI
export default {
    getTeam: () => {
        return axios.get("https://randomuser.me/api/?results=100&nat=US");
    }
};