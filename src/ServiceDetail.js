import { useParams } from 'react-router-dom';
import './styles.css';

function ServiceDetail() {
  const { serviceName } = useParams();
  return (
    <div className="container mt-5">
     
      <h3>{serviceName} Service Details</h3>
      <p>This is the details page for {serviceName} services.</p>
    </div>
  );
}

export default ServiceDetail;
