import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Dashboard />
    </Box>
  );
}
