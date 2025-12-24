import Swal from "sweetalert2";

const getData = (apiName, changeFn) => {
  fetch(`http://localhost:5000/${apiName}`)
    .then((res) => res.json())
    .then((data) => {
      changeFn(data);
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
      fetch(`http://localhost:5000/${apiName}`, {
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
  fetch(`http://localhost:5000/${apiName}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id, status }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.modifiedCount == 1) {
        const findOrder = stodedData?.find((order) => order._id === id);
        findOrder.role = status;
        changeFn([...stodedData]);
      }
    });
};
export { deleteData, updateData, getData };
