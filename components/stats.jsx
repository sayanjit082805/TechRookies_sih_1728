"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


const chartData = [
  { year: "2015-16", boys: 5581, girls: 5492 },
  { year: "2016-17", boys: 5598, girls: 5712 },
  { year: "2017-18", boys: 6636, girls: 6614 },
  { year: "2018-19", boys: 7046, girls: 7242 },
  { year: "2019-20", boys: 5185, girls: 5443 },
  { year: "2020-21", boys: 8061, girls: 7892 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export function Stats() {
  return (
      <Card className="w-[900px] h-[650px] mb-10">
        <CardHeader>
          <CardTitle>Total number of candidates granted scholarship</CardTitle>
          <CardDescription>2015-2021</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
           
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 7)}
                padding={{ left: 20, right: 20 }}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="boys" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="girls" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
  );
}
