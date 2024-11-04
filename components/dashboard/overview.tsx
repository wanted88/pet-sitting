'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', total: 167 },
  { name: 'Feb', total: 245 },
  { name: 'Mar', total: 321 },
  { name: 'Apr', total: 289 },
  { name: 'May', total: 403 },
  { name: 'Jun', total: 356 },
  { name: 'Jul', total: 420 },
];

export function Overview() {
  return (
    <div className="p-6 pt-0">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}