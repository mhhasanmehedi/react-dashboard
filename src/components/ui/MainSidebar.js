import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MainSidebar() {
  return (
    <Sidebar
      className="min-h-[100vh] border-r fixed basis-72 overflow-auto top-0 left-0 "
      aria-label="Sidebar with multi-level dropdown example"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/">
            <Sidebar.Item icon={HiChartPie}>
              <p>Dashboard</p>
            </Sidebar.Item>
          </Link>
          <Sidebar.Collapse icon={FaUsers} label="Users">
            <Link to="/users/addUser">
              <Sidebar.Item>Add Users</Sidebar.Item>
            </Link>
            <Link to="/users/allUser">
              <Sidebar.Item>All Users</Sidebar.Item>
            </Link>
          </Sidebar.Collapse>
          <Sidebar.Collapse icon={FaUsers} label="Charts">
            <Link to="/charts/customShapeBarChart">
              <Sidebar.Item className="pl-0">
                Custom Shape Bar Chart
              </Sidebar.Item>
            </Link>
            <Link to="/charts/twoLevelPieChart">
              <Sidebar.Item>Two Level Pie Chart</Sidebar.Item>
            </Link>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
