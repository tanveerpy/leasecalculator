"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { YearBreakdown } from "@/lib/types";

interface LeaseChartProps {
    data: YearBreakdown[];
    leaseType: string;
}

export default function LeaseChart({ data, leaseType }: LeaseChartProps) {
    if (!data || data.length === 0) return <div className="h-full w-full flex items-center justify-center text-muted-foreground">No data available</div>;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip
                    cursor={{ fill: 'transparent' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value) => [`$${Number(value).toLocaleString()}`, undefined]}
                />
                <Legend iconType="circle" />
                <Bar
                    dataKey="baseRent"
                    stackId="a"
                    fill="hsl(var(--primary))"
                    name="Base Rent"
                    radius={[4, 4, 0, 0]}
                />
                {leaseType !== 'GROSS' && (
                    <Bar
                        dataKey="expenses"
                        stackId="a"
                        fill="hsl(var(--secondary-foreground))"
                        name="NNN Expenses"
                        radius={[4, 4, 0, 0]}
                    />
                )}
            </BarChart>
        </ResponsiveContainer>
    );
}
