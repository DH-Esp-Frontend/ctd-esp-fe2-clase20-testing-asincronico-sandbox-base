import { render as rtlRender, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

const render = () =>
  rtlRender(
    <Provider store={store}>
      <App />
    </Provider>
  );

beforeEach(() => render());

describe("Teste assincrônico", () => {
  test("Renderizando component", async () => {
    await screen.findByText("Usuário");
  });

  test("Testando se o 'loading' foi exibido", async () => {
    await screen.findByText("loading");
  });

  test("Testando se a requisição foi chamada com sucesso", async () => {
    await screen.findByText("success");
  });

  test("Exibir o e-mail do usuário", async () => {
    await screen.findByText("steve@jobs.com");
  });

  test("Exibir o nome do usuário", async () => {
    await screen.findByText("Steve Jobs");
  });

  test("Exibir se a foto do usuário foi carregada", async () => {
    await screen.getByAltText("Steve");
  });
});
