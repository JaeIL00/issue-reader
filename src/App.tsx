import { RecoilRoot } from "recoil";
import "./App.css";
import { RootLayout } from "./components";

function App() {
    return (
        <RecoilRoot>
            <RootLayout />
        </RecoilRoot>
    );
}

export default App;
