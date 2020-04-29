const random = async () => {
    let response = await axios.get(
        `${API_URL}search?sorting=random${API_INDEX}`
    );
    let path = await response.data.data[1].path;
    let image = await response.data.data[1].thumbs.small;
    return {
        path: path,
        image: image,
    };
};