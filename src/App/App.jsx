// import './App.scss';

import Name from "../components/Name/Name";
import Force from "../components/Force/Force";
import Dexterity from "../components/Dexterity/Dexterity";
import Intellect from "../components/Intellect/Intellect";
import Charisma from "../components/Charisma/Charisma";
import Upload from "../components/Upload/Upload";

function App() {

  return (
    <>
      <Upload />
      <h1>App page</h1>
      <Name />
      <Force />
      <Dexterity />
      <Intellect />
      <Charisma />
    </>

  );
}

export default App;
