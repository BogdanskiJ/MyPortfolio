import "./App.css";
import { Navigation } from "./features/navigation";
import { Projects } from "./features/projects";

function App() {
	return (
		<div className="appDiv">
			<Navigation />
			<Projects />
		</div>
	);
}

export default App;
