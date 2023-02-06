import "./styles.css";

const GundamTitle = () => {
  return <h1>건담 스토리</h1>;
};

const GundamHeader = () => {
  return <h3>건담</h3>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <GundamTitle />
      <GundamHeader />
      <GundamHeader />
    </div>
  );
}
