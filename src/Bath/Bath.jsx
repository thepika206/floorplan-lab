const Bath = (props) => {
  return (  
    <div id={`bath-${props.size}`}>
      {props.size} Bath
    </div>
  );
}
 
export default Bath;