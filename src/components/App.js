import React, { useState } from "react";
import "../styles/App.css";

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("")
  const [buttonClicked, setButtonClicked] = useState(false);

  function calculateRelationship(e) {
    e.preventDefault();


    if(name1.trim() === "" || name2.trim() === "") {
        setButtonClicked(false);
        setRelationship("Please Enter valid input");
        return;
    }
    let str1 = name1;
    let str2 = name2;

    for (let t of str1) {
      if (str2.includes(t)) {
        str1 = str1.replace(t, "");
        str2 = str2.replace(t, "");
      }
    }

    setName1(str1);
    setName2(str2);
    setButtonClicked(true);
    setRelationship(arr[(str1.length + str2.length)%6]);
  }

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <form>
        <input
          type="text"
          placeholder="Enter the first name"
          data-testid="input1" name="name1"
          onChange={(e) => setName1(e.target.value)}
          value={name1}
        />

        <input
          type="text"
          placeholder="Enter the second name"
          data-testid="input2" name="name2"
          onChange={(e) => setName2(e.target.value)}
          value={name2}
        />

        <button
          data-testid="calculate_relationship"
          type="submit"
          onClick={calculateRelationship}
        >
          Calculate Relationship Future
        </button>

        <button
          data-testid="clear"
          type="reset"
          onClick={() => {
            setName1("");
            setName2("");
            setButtonClicked(false);
            setRelationship("");
          }}
        >
          Clear
        </button>
      </form>

      <h3 data-testid="answer">
        {/* {
          // relationship
          buttonClicked && arr[(name1.length + name2.length) % 6]
        } */}
        {
          relationship
        }
      </h3>
    </div>
  );
};

export default App;
