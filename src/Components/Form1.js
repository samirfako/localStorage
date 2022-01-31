import { useLocalStorage } from "../useLocalStorage";

const Form1 = () => {
  const [name, setName] = useLocalStorage("name", "");
  // const [name, setName] = useState(() => {
  //   // get stored value
  //   const saved = localStorage.getItem("name");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });
  // useEffect(() => {
  //   // storing inout name
  //   localStorage.setItem("name", JSON.stringify(name));
  // }, [name]);
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
};
export default Form1;
