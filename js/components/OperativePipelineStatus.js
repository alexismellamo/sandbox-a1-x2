function useFetchStatus() {
  const [status, setStatus] = React.useState([])

  React.useEffect(function() {
    function handleRequest(_, response) {
      setStatus(response.data)
    }
    jb_api.process_status.list({}, handleRequest)
  }, [])

  return status
}

function Pipe({pipe: {id, name}}) {
  return (
    <div className="pipe">
      <p className="name">{name}</p>
      <p className="id">{id}</p>
    </div>
  )
}

const OperativePipelineStatus = ({ data }) => {
  const status = useFetchStatus()
  return (
    <div className="operative-pipeline-status">
      {status.map(pipe => <Pipe key={pipe.id} pipe={pipe}/>)}
    </div>
  );
};

ReactDOM.render(<OperativePipelineStatus/>, document.getElementById('root'))