import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RoutesArray } from "./routes";
const RouterWrapper = () => {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
};

export default RouterWrapper;
