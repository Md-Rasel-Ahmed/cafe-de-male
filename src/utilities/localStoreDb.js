const getData = () => {
  let stordedData = localStorage.getItem("cart");
  if (stordedData) {
    return (stordedData = JSON.parse(stordedData));
  } else {
    return (stordedData = []);
  }
};

const setData = (id) => {
  let storedData = getData();

  storedData.push(id);
  localStorage.setItem("cart", JSON.stringify(storedData));
};
export { getData, setData };
