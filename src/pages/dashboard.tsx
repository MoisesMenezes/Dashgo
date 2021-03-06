import { Header } from "../components/Header";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime" as const,
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T:00:00:00.000Z",
      "2021-03-19T:00:00:00.000Z",
      "2021-03-20T:00:00:00.000Z",
      "2021-03-21T:00:00:00.000Z",
      "2021-03-22T:00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [80, 50, 120, 180, 40] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text>Inscritos da semana</Text>
            <Chart type="area" series={series} height={160} options={options} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text>Taxa de Abertura</Text>
            <Chart type="area" series={series} height={160} options={options} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
