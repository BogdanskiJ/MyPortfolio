import "./App.css";
import { FaceSlider } from "./features/faceSlider";
import { Navigation } from "./features/navigation";
import { Page } from "./features/page";
import { Container } from "./styled";

function App() {
	return (
		<Container>
			<FaceSlider />
			<Navigation />
			<Page />
		</Container>
	);
}

export default App;
