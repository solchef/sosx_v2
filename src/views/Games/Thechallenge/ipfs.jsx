// import { useState, useEffect } from 'react'
// import { create } from 'ipfs-http-client'

// const IpfsComponent = () => {
//   const [id, setId] = useState(null);
//   const [ipfs, setIpfs] = useState(null);
//   const [version, setVersion] = useState(null);
//   const [isOnline, setIsOnline] = useState(false);

//   useEffect(() => {
//     const init = async () => {
//       if (ipfs) return

//       const node = create('https://ipfs.infura.io:5001/api/v0')
//       const nodeId = await node.id()
//       const nodeVersion = await node.version();
//       const nodeIsOnline = node.isOnline();

//       setIpfs(node);
//       setId(nodeId.id);
//       setVersion(nodeVersion.version);
//       setIsOnline(nodeIsOnline);
//       console.log
//     }

//     init()
//   }, [ipfs]);

//   if (!ipfs) {
//     return <h4>Connecting to IPFS...</h4>
//   }

//   return (
//     <div>
//       <h4 data-test="id">ID: {id}</h4>
//       <h4 data-test="version">Version: {version}</h4>
//       <h4 data-test="status">Status: {isOnline ? 'Online' : 'Offline'}</h4>
//     </div>
//   )
// }

// export default IpfsComponent