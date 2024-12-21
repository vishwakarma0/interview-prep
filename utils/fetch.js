import { toast } from "react-hot-toast";

const fetchCall = async (url, options = {}) => {
    const baseURL = "/api";
    const fullUrl = `${baseURL}${url}`;

    // Set default headers
    options.headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (options.body && typeof options.body === 'object' &&
        options.headers['Content-Type'] === 'application/json') {
        options.body = JSON.stringify(options.body);
    }

    try {
        const response = await fetch(fullUrl, options);
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            const error = new Error(data.error || "An error occurred");
            error.status = response.status;
            throw error;
        }

        return data;
    } catch (error) {
        console.error(error.message);

        toast.error(error.message || "Something went wrong...");

        throw error; 
    }
};

export default fetchCall;