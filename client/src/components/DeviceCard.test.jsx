
import { render, screen } from "@testing-library/react";
import DeviceCard from "./DeviceCard";

describe("DeviceCard component", () => {
  const mockDevice = {
    name: "Device A",
    status: "Active",
    cpu: "Intel i7",
    ram: "16GB",
  };

  test("renders device details correctly", () => {
    render(<DeviceCard device={mockDevice} />);

    expect(screen.getByText("Device A")).toBeInTheDocument();
    expect(screen.getByText("Status: Active")).toBeInTheDocument();
    expect(screen.getByText("CPU: Intel i7")).toBeInTheDocument();
    expect(screen.getByText("RAM: 16GB")).toBeInTheDocument();
  });
});
