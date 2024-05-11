import "./App.css";
import Weather from "./assets/component/Weather";

function App() {
  return (
    <div
      className=" flex w-full h-screen justify-center items-center"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh", // Set your desired height
        // You can add more background properties as needed
      }}
    >
      <Weather />
    </div>
  );
}

export default App;
