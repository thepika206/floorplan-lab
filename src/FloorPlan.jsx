//IMPORT Bath, Bedroom, Kitchen LivingRoom
import Bedroom from "./Bedroom/Bedroom";
import Kitchen from "./Kitchen/Kitchen";
import LivingRoom from "./LivingRoom/LivingRoom";
import Bath from "./Bath/Bath";
const FloorPlan = (props) => {
  return (
    <div id='floor-plan' > 
      <Bedroom bedNum={1} />
      <Kitchen/>
      <Bath size={'Full'} />
      <Bedroom bedNum={2} />
      <LivingRoom/>
      <Bath size={'Half'} />
      <Bedroom bedNum={3} />
    </div>
    
  );
}

export default FloorPlan;