import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

describe("App", () => {
  describe("Cuando renderizamos el componente", () => {
    test("No deberia mostrar ningun elemento del usuario", async () => {
      render(
          <Provider store={store}>
            <App />
          </Provider>
      );
      expect(screen.queryByText("Usuario")).not.toBeInTheDocument();
    });
  });
  describe("Cuando la query se esta ejecutando", () => {
    test("Deberia mostrar el mensaje de cargando", async () => {
      render(
          <Provider store={store}>
            <App />
          </Provider>
      );
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
    test("No deberia mostrar ningun elemento del usuario", async () => {
      render(
          <Provider store={store}>
            <App />
          </Provider>
      );
      expect(screen.queryByText("Usuario")).not.toBeInTheDocument();
    });
  });
  describe("Cuando se ejecuta la query con exito", () => {
    test("Ver el email del usuario", async () => {
      render(
          <Provider store={store}>
            <App />
          </Provider>
      );
      expect(  await screen.findByText("Steve Jobs")).toBeInTheDocument();
    });
    test("Ver el email del usuario", async () => {
      render(
          <Provider store={store}>
            <App />
          </Provider>
      );
      expect( await screen.findByText("steve@jobs.com")).toBeInTheDocument();
    });
    test("Ver la foto del usuario", async () => {
      render(
          <Provider store={store}>
            <App />
          </Provider>
      );
      expect( await screen.findByAltText("Steve")).toBeInTheDocument();
    });
    test("No deberia mostrar ningun mensaje de cargando", async () => {
      render(
          <Provider store={store}>
            <App />
          </Provider>
      );
      expect(screen.queryByText("Loading")).not.toBeInTheDocument();
    });
  });


});
