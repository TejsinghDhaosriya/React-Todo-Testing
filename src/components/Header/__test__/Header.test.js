import { render, screen } from "@testing-library/react";
import Header from "../Header";

// Get By
it("should render same test as passed in the prop", async () => {
  // Arrange
  render(<Header title="todo" />);

  //Act
  const headingElement = screen.getByText(/todo/i);

  //Assert
  expect(headingElement).toBeInTheDocument();
});

it("should render same test as passed in the prop get all by role", async () => {
  // Arrange
  render(<Header title="todo" />);

  //Act
  const headingElements = screen.getAllByRole(/heading/i);

  //Assert
  expect(headingElements.length).toBe(2);
});
it("should render same test as passed in the prop by role", async () => {
  // Arrange
  render(<Header title="todo" />);

  //Act
  const headingElement = screen.getByRole("heading", { name: "todo" });

  //Assert
  expect(headingElement).toBeInTheDocument();
});

it("should render same test as passed in the prop by title", async () => {
  // Arrange
  render(<Header title="todo" />);

  //Act
  const headingElement = screen.getByTitle("cat");

  //Assert
  expect(headingElement).toBeInTheDocument();
});

it("should render same test as passed in the prop by test id", async () => {
  // Arrange
  render(<Header title="todo" />);

  //Act
  const headingElement = screen.getByTestId("header-2");

  //Assert
  expect(headingElement).toBeInTheDocument();
});

// Find By

it("should render same test as passed in the prop find by text", async () => {
  // Arrange
  render(<Header title="todo" />);

  //Act
  const headingElement = await screen.findByText(/todo/i);

  //Assert
  expect(headingElement).toBeInTheDocument();
});

// Query By

it("should render same test as passed in the prop query by text", async () => {
  // Arrange
  render(<Header title="todo" />);

  //Act
  const headingElement = screen.queryByText(/t2odo/i);

  //Assert
  expect(headingElement).not.toBeInTheDocument();
});
