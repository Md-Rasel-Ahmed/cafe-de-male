import Swal from "sweetalert2";
import Loading from "../Shared/Loading";
const liveUrl = "https://cafe-de-male-server.onrender.com/api";
// const localUrl = "http://localhost:5000/api";
const getData = (apiName, changeFn) => {
  fetch(`${liveUrl}/${apiName}`)
    .then((res) => res.json())
    .then((data) => {
      changeFn(data);
      console.log(data);
    });
};

// delete data
const deleteData = (id, stodedData, changeFn, name, apiName) => {
  Swal.fire({
    title: `Do you want to Delete the ${name}?`,
    showCancelButton: true,
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`${liveUrl}/${apiName}/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            const filter = stodedData.filter((data) => data._id !== id);
            changeFn(filter);
          }
        });
      Swal.fire("The order has been deleted!", "", "success");
    }
  });
};

const updateData = (id, status, stodedData, changeFn, apiName) => {
  console.log(status, apiName);
  fetch(`${liveUrl}/${apiName}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id, status }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const findData = stodedData?.find((order) => order._id === id);
      if (apiName === "orders") {
        findData.status = status;
        console.log(findData);
      }
      if (apiName === "users") {
        findData.role = status;
        console.log(findData);
      }

      changeFn([...stodedData]);
      // console.log(findData);
    });
};

export { deleteData, updateData, getData };
