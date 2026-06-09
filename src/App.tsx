import { createGlobalStyle, styled } from "styled-components";
import { ZodForm } from "./ZodForm";
import { $signupSchema } from "./schema";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
`;

export function App() {
  return (
    <>
      <GlobalStyle />
      <Page>
        <ZodForm
          //
          schema={$signupSchema}
          onSubmit={async (data) => {
            console.log(data);
          }}
        />
      </Page>
    </>
  );
}
