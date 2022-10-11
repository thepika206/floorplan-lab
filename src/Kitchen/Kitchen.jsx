import Sink from "./Sink";
import Oven from "./Oven";
const Kitchen = (props) => {
  return ( 
    <div id='kitchen'>
      <div>
      <Sink/>
      <Oven/>
      </div>
      Kitchen
    </div>
  );
}
export default Kitchen