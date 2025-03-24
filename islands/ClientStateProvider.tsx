import { ComponentChildren, createContext } from "preact";
import { Dispatch, useReducer } from "preact/hooks";

export const ClientState = createContext<[ClientState, Dispatch<ClientAction>]>(
  [{}, () => {}],
);

export interface ClientState {
  username?: string;
}

export type ClientAction =
  | { type: "sign-in"; username: string }
  | { type: "sign-out" };

export interface ClientStateProviderProps {
  children: ComponentChildren;
}

export default function ClientStateProvider(props: ClientStateProviderProps) {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <ClientState.Provider value={[state, dispatch]}>
      {props.children}
    </ClientState.Provider>
  );
}

function reducer(state: ClientState, action: ClientAction): ClientState {
  switch (action.type) {
    case "sign-in": {
      return { ...state, username: action.username };
    }
    case "sign-out": {
      return { ...state, username: undefined };
    }
  }
}
