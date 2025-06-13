'use client'
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return ( <></>
    );
  }
  return null;
};
export const LinearChartComponent = ({ data, selectedMetric = "all", height = 515 }) => {
   const [animationKey, setAnimationKey] = useState(0);
   useEffect(() => {
     setAnimationKey(Date.now());
  }, []);
  return (
    <ResponsiveContainer width="101%" height={height}>
      <LineChart  key={animationKey} data={data} className="-ml-6">
        {/* Updated Grid Color */}
        <CartesianGrid vertical={false} stroke="#FFFFFF"  strokeOpacity={0.3} />
        <XAxis dataKey="date" tickLine={false} axisLine={false} className="text-[10px] font-medium " />
        <YAxis  tickLine={false} axisLine={false} className="text-[10px]  font-medium " />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "none" }} />
        {(selectedMetric === "totalSent" || selectedMetric === "all") && (
          <Line type="monotone" dataKey="totalSent" stroke="#2F0AFF" strokeWidth={4} dot={false} activeDot={{ r: 8 }} />
        )}
        {(selectedMetric === "totalOpened" || selectedMetric === "all") && (
          <Line type="monotone" dataKey="totalOpened" stroke="#660BD4" strokeWidth={4} dot={false} activeDot={{ r: 8 }} />
        )}
        {(selectedMetric === "totalClicked" || selectedMetric === "all") && (
          <Line type="monotone" dataKey="totalClicked" stroke="#F4BB00" strokeWidth={4} dot={false} activeDot={{ r: 8 }} />
        )}
        {(selectedMetric === "totalReplied" || selectedMetric === "all") && (
          <Line dataKey="totalReplied" stroke="#009FBD" strokeWidth={4} dot={false} activeDot={{ r: 8 }} />
        )}
        {(selectedMetric === "totalPositiveReply" || selectedMetric === "all") && (
          <Line type="monotone" dataKey="positiveReplies" stroke="#942AFE" strokeWidth={4} dot={false} activeDot={{ r: 8 }} />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LinearChartComponent;