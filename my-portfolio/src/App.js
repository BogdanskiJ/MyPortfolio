import { useRef } from "react";
import "./App.css";
import { FaceSlider } from "./features/faceSlider";
import { Navigation } from "./features/navigation";
import { Page } from "./features/page";
import { Container } from "./styled";

function App() {
	const pageRef = useRef(null);
	console.log(pageRef.current);
	return (
		<Container>
			<FaceSlider />
			<Navigation pageRef={pageRef} />
			<Page ref={pageRef} />
		</Container>
	);
}

export default App;
