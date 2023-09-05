import "./App.css";

function App() {
  const addUserButton = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('Users added successfully');
          form.reset();
        }
        // const newUsers =[...users,data]
        // setUsers(newUsers);
        // form.reset();
      });
  };

return (
  <div>
    <h1>SIMPLE CRUD</h1>
    <form onSubmit={addUserButton}>
      <input type="text" name="name" id="" />
      <br></br>
      <input type="email" name="email" id="" />
      <br></br>
      <input type="submit" value="add user" />
    </form>
  </div>
);
}
export default App;
