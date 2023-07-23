import React, { useMemo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "./components/navigation";

export const ApiContext = React.createContext({});

export const ApiProvider = () => {
  const [token, setToken] = useState<string>("");

  const value = useMemo(() => ({}), []);

  return (
    <ApiContext.Provider value={value}>
      <Navigation></Navigation>

      <div className="mt-20 relative w-screen">
        <Outlet />
      </div>
    </ApiContext.Provider>
  );
};
