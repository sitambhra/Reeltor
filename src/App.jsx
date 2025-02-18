// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageLayout from "./Components/PageLayout";
import Home from "./Pages/Home";
import Discover from "./Pages/Discover";
import Clock from "./Pages/Clock";
import Wallet from "./Pages/Wallet";
import Calendar from "./Pages/Calendar";
import Settings from "./Pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
        <Route
          path="/home"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
        <Route
          path="/discover"
          element={
            <PageLayout>
              <Discover />
            </PageLayout>
          }
        />
        <Route
          path="/clock"
          element={
            <PageLayout>
              <Clock />
            </PageLayout>
          }
        />
        <Route
          path="/wallet"
          element={
            <PageLayout>
              <Wallet />
            </PageLayout>
          }
        />
        <Route
          path="/calendar"
          element={
            <PageLayout>
              <Calendar />
            </PageLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <PageLayout>
              <Settings />
            </PageLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
