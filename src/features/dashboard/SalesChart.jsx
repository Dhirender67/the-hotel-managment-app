import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDarkMode } from "../../contextApi/DarkModeTheme";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

// const fakeData = [
//   { label: "Jan 09", totalSales: 480, extrasSales: 20 },
//   { label: "Jan 10", totalSales: 580, extrasSales: 100 },
//   { label: "Jan 11", totalSales: 550, extrasSales: 150 },
//   { label: "Jan 12", totalSales: 600, extrasSales: 50 },
//   { label: "Jan 13", totalSales: 700, extrasSales: 150 },
//   { label: "Jan 14", totalSales: 800, extrasSales: 150 },
//   { label: "Jan 15", totalSales: 700, extrasSales: 200 },
//   { label: "Jan 16", totalSales: 650, extrasSales: 200 },
//   { label: "Jan 17", totalSales: 600, extrasSales: 300 },
//   { label: "Jan 18", totalSales: 550, extrasSales: 100 },
//   { label: "Jan 19", totalSales: 700, extrasSales: 100 },
//   { label: "Jan 20", totalSales: 800, extrasSales: 200 },
//   { label: "Jan 21", totalSales: 700, extrasSales: 100 },
//   { label: "Jan 22", totalSales: 810, extrasSales: 50 },
//   { label: "Jan 23", totalSales: 950, extrasSales: 250 },
//   { label: "Jan 24", totalSales: 970, extrasSales: 100 },
//   { label: "Jan 25", totalSales: 900, extrasSales: 200 },
//   { label: "Jan 26", totalSales: 950, extrasSales: 300 },
//   { label: "Jan 27", totalSales: 850, extrasSales: 200 },
//   { label: "Jan 28", totalSales: 900, extrasSales: 100 },
//   { label: "Jan 29", totalSales: 800, extrasSales: 300 },
//   { label: "Jan 30", totalSales: 950, extrasSales: 200 },
//   { label: "Jan 31", totalSales: 1100, extrasSales: 300 },
//   { label: "Feb 01", totalSales: 1200, extrasSales: 400 },
//   { label: "Feb 02", totalSales: 1250, extrasSales: 300 },
//   { label: "Feb 03", totalSales: 1400, extrasSales: 450 },
//   { label: "Feb 04", totalSales: 1500, extrasSales: 500 },
//   { label: "Feb 05", totalSales: 1400, extrasSales: 600 },
//   { label: "Feb 06", totalSales: 1450, extrasSales: 400 },
// ];

function SalesChart({ bookingDate, numDays }) {
  const { isDarkMode } = useDarkMode();

  // Calculate Days Between start and End date
  const allDate = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  // console.log("DAYES", allDayes);
  // console.log("NO. DAYE", numDays);

  // Calulate Extra Price, Total Price, Date,
  const dataCharts = allDate.map((dateItem) => {
    return {
      label: format(dateItem, "MMM, dd"),
      totalSales: bookingDate
        .filter((booking) => isSameDay(dateItem, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.totalPrice, 0),
      extrasSales: bookingDate
        .filter((booking) => isSameDay(dateItem, new Date(booking.created_at)))
        .reduce((acc, curr) => acc + curr.extraPrice, 0),
    };
  });

  //console.log("DATE LIST", dataCharts);

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <div className="col-span-full rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-[#18212f]">
      <h2 className="text-xl mb-4 font-semibold text-gray-800 dark:text-gray-200">
        Sales From {format(allDate.at(0), "MMM dd yyy")} &mdash; {""} to &mdash;{" "}
        {format(allDate.at(-1), "MMM dd yyy")}
      </h2>
      <div class="h-[300px] w-full">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={dataCharts}>
            <CartesianGrid strokeDasharray="3" />
            <Tooltip
              contentStyle={{
                backgroundColor: colors.background,
                color: colors.text,
              }}
            />
            <XAxis
              dataKey="label"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <YAxis
              unit="$"
              tick={{ fill: colors.text }}
              tickLine={{ stroke: colors.text }}
            />
            <Area
              type="monotone"
              dataKey="totalSales"
              stroke={colors.totalSales.stroke}
              fill={colors.totalSales.fill}
              name="Total Sales"
            />
            <Area
              type="monotone"
              dataKey="extrasSales"
              stroke={colors.extrasSales.stroke}
              fill={colors.extrasSales.fill}
              name="Extra Sales"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SalesChart;
