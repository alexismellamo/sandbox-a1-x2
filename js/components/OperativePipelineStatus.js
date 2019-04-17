function Pipe({pipe: {title, total}}) {
  return (
    <div className="pipe">
      <p className="total">{title}</p>
      <p className="number">{total}</p>
    </div>
  )
}

const OperativePipelineStatus = ({ data }) => {
  return (
    <div className="operative-pipeline-status">
      {data.map(pipe => <Pipe pipe={pipe}/>)}
    </div>
  );
};

ReactDOM.render(<OperativePipelineStatus data={[{title: 'contratar', total: 30}, {title: 'contratar', total: 30}, {title: 'contratar', total: 30}, {title: 'contratar', total: 30}, {title: 'contratar', total: 30}, {title: 'contratar', total: 30}]} />, document.getElementById('operative-pipeline-status'))