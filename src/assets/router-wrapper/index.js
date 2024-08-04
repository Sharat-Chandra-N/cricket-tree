import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { RoutesArray } from "./routes";
const RouterWrapper = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/tree" replace />} />
          {RoutesArray?.map((routeObj, i) => {
            return (
              <Route
                key={i}
                path={routeObj?.path}
                element={routeObj?.elementKey}
              />
            );
          })}
        </Routes>
      </HashRouter>
    </>
  );
};

export default RouterWrapper;
