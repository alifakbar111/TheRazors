import axios from 'axios';
import url from "./URL";

async function submitOrders({ name, total, items, image, userToken }) {
  const fd = new FormData();
  fd.append("files", image);
  console.log(fd);
  let resp = false;
  const response = await axios
    .post(`${url}/upload`, fd, {
      headers: {
        Authorization: `Bearer ${userToken}`
      },
    }).then(({ data }) => {
      const imageId: number = data[0].id;
      resp = true;
      axios
        .post(`${url}/orders`, {
          image: imageId,
          name,
          total,
          items,
        }, {
          headers: {
            Authorization: `Bearer ${userToken}`
          },
        }).catch(error => console.log(error))
    })
    .catch(error => console.log(error));
  response;
  return resp;
}

export default submitOrders;