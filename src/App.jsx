function App() {

  const callApi = async () => {
    try {
      const res = await fetch("https://backend-api-cmxm.onrender.com/");
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("Không gọi được backend");
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React Frontend Deploy</h1>
      <p>Frontend gọi Backend API</p>

      <button onClick={callApi}>
        Gọi API Backend
      </button>
    </div>
  );
}

export default App;
