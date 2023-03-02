import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Todo Footer", () => {
  it("should render correct amount of incomplete tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    const paragraphElement = screen.getByText(/5 tasks left/i);

    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render 'task' when the number of incomplete task is 1", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const paragraphElement = screen.getByText(/1 task left/i);

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toBeTruthy();

    // for checking visibility
    expect(paragraphElement).toBeVisible();

    expect(paragraphElement).toContainHTML("p");

    expect(paragraphElement).toHaveTextContent("1 task left");

    expect(paragraphElement.textContent).toBe("1 task left");
  });
});
