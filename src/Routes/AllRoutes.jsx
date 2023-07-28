import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={""} />
        </Routes>
    );
};

export default AllRoutes;
