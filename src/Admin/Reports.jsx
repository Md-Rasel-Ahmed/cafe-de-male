import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FaUsers, FaShoppingBag, FaMoneyBillWave } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import Loading from "./../Shared/Loading";
import moment from "moment/moment";
const liveUrl = "https://cafe-de-male-server.onrender.com/api";

const localUrl = "http://localhost:5000/api";
const Reports = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [menus, setMenus] = useState([]);
  const [seles, setSels] = useState([]);
  const [topItems, setTopItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${liveUrl}/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        const completedOrders = data.filter(
          (order) => order.status === "Completed"
        );
        const allItems = completedOrders.flatMap((order) => order.items);
        const soldItems = [];
        for (const item of allItems) {
          const findItem = soldItems.find((i) => i.name === item.name);
          if (findItem) {
            findItem.qty += item.qty;
          } else {
            soldItems.push(item);
          }
        }
        const sortArr = soldItems
          .sort((a, b) => {
            return b.qty - a.qty;
          })
          .slice(0, 5);
        setTopItems(sortArr);

        setSels(completedOrders);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    fetch(`${liveUrl}/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
    fetch(`/menus.json`)
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  // ===== Dummy data (later Firestore data replace করবে) =====
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const salesData = daysOfWeek.map((day) => ({
    day: day.slice(0, 3), // Mon, Tue, etc.
    sales: seles
      ?.filter((order) => order.day === day)
      .reduce((total, order) => total + (order.total || 0), 0),
  }));
  const summary = [
    {
      title: "Total Revenue",
      value: "MVR 45,320",
      icon: <FaMoneyBillWave size={28} />,
    },
    {
      title: "Total Orders",
      value: orders?.length,
      icon: <FaShoppingBag size={28} />,
    },
    {
      title: "Total Users",
      value: users?.length,
      icon: <FaUsers size={28} />,
    },
    {
      title: "Menu Items",
      value: menus.length,
      icon: <MdRestaurantMenu size={28} />,
    },
  ];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlySales = monthsOfYear.map((month) => ({
    month: month,
    sales: seles
      .filter((order) => order.month === month)
      .reduce((prev, curr) => prev + (curr.total || 0), 0),
  }));
  // =========================================================
  // console.log(topItems);
  return (
    <div className="p-6 space-y-6">
      {/* ===== Page Title ===== */}
      <h2 className="text-3xl font-bold text-primary">Reports & Analytics</h2>

      {/* ===== Summary Cards ===== */}
      {loading && <Loading></Loading>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summary?.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md p-4 flex flex-row items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
            <div className="text-primary">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* ===== Charts Section ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Line Chart */}
        <div className="card bg-base-100 shadow-md p-4">
          <h3 className="font-semibold mb-4">Weekly Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Monthly sales Line Chart */}
        <div className="card bg-base-100 shadow-md p-4">
          <h3 className="font-semibold mb-4">Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlySales}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" strokeWidth={3} />
              <Tooltip />
              <Line type="monotone" dataKey="month" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Selling Items */}
        <div className="card bg-base-100 shadow-md p-4">
          <h3 className="font-semibold mb-4">Top Selling Items</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topItems}>
              <XAxis dataKey="name" color="" />
              <YAxis width="auto" />

              {/* <YAxis /> */}
              <Tooltip />
              <Bar dataKey="name" />
              <Bar dataKey="qty" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ===== Table Section ===== */}
      <div className="card bg-base-100 shadow-md p-4">
        <h3 className="font-semibold mb-4">Recent Performance</h3>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Item</th>
                <th>Orders</th>
                <th>Revenue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Burger</td>
                <td>320</td>
                <td>MVR 12,800</td>
                <td className="text-green-600 font-semibold">Good</td>
              </tr>
              <tr>
                <td>Pizza</td>
                <td>280</td>
                <td>MVR 14,000</td>
                <td className="text-green-600 font-semibold">Good</td>
              </tr>
              <tr>
                <td>Pasta</td>
                <td>90</td>
                <td>MVR 3,600</td>
                <td className="text-yellow-600 font-semibold">Average</td>
              </tr>
              <tr>
                <td>Salad</td>
                <td>40</td>
                <td>MVR 1,200</td>
                <td className="text-red-600 font-semibold">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
