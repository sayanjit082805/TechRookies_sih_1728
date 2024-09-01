"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

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
  { year: "2015-16", amount: 0 },
  { year: "2015-16", amount: 285718211 },
  { year: "2016-17", amount: 291558030 },
  { year: "2017-18", amount: 342196840 },
  { year: "2018-19", amount: 401587204 },
  { year: "2019-20", amount: 352971626 },
  { year: "2020-21", amount: 532359623 },
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

const rupeeFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function Stats_2() {
  return (
    <Card className="w-[910px] h-[650px] mb-10">
      <CardHeader>
        <CardTitle>Total amount disbursed</CardTitle>
        <CardDescription>2015-2021</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            width={700}
            height={400}
            margin={{
              top: 20,
              left: 12,
              right: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 7)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="amount"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={9}
                formatter={(value) => rupeeFormatter.format(value)}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mb-10">
        <div className="flex gap-2 font-medium leading-none">
          Steady growth since introduction in 2015 <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
