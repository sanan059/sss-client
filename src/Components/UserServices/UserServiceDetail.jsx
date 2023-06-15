// HOOKS
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// USERSERVICES CSS
import './UserServices.css';
// SERVICES
import { ServicesOfUserServices } from '../../Services/Services_UserServices/Services_UserServices';
// ICONS
import { AiFillStar } from "react-icons/ai"
// APP COMPONENT
import UserNavbar from '../UserNavbar/UserNavbar';



const UserServiceDetail = () => {
  // HOOKS
  const [serviceDetail, setServiceDetail] = useState(null);
  const { id } = useParams();

  // SERVICES
  const ServiceDetail = new ServicesOfUserServices();


  useEffect(() => {
    async function getSingleServiceWithDetails() {
      const { data } = await ServiceDetail.GetSingleServiceDetails(id);
      setServiceDetail(data.service);
    }
    getSingleServiceWithDetails();
  }, []);
  
  console.log(serviceDetail);

  return <>
    <UserNavbar/>
    <div className="container my-5">
      <div className="row">
        <h5>{serviceDetail?.title}</h5>
        {/* <div className="col-md-3 col-sm-6 p-2">
          <div className="card card-block border-0 p-2">
            <h4 className="card-title text-right">
            </h4>
            <img
              src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"
              alt="Photo of sunset"
              className='user-service-img-size'
            />
            <h5 className="card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
            <p className="card-text">
              This is a company that builds websites, web apps and e-commerce
              solutions.
            </p>
          </div>
        </div> */}
        {/* {serviceDetail ? serviceDetail.map((service, i) => {
          return <div key={i} className="col-md-3 col-sm-6 p-2">
            
            <div className="card card-block border-0 p-2">
              <h4 className="card-title text-right">
              </h4>
              <img
                src={service.image}
                alt="Photo of sunset"
                className='user-service-img-size'
              />
              <h5 className="card-title mt-3 mb-3">{service.title}</h5>
              <p className="card-text text-truncate h-25">
                {service.description}
              </p>
              <div className="d-flex">
                <div className="me-3">
                  <AiFillStar fill="#fbc634" />
                </div>
                <h5 className="review-count">{service.rating}</h5>
              </div>
            </div>
          </div>
        }) : <> No Service Here </>} */}
        {/* <div className="col-md-3 col-sm-6 p-2">
          <div className="card card-block border-0 p-2">
            <h4 className="card-title text-right">
            </h4>
            <img
              src="https://static.pexels.com/photos/7357/startup-photos.jpg"
              alt="Photo of sunset"
              className='user-service-img-size'
            />
            <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
            <p className="card-text">
              This is a company that builds websites, web .
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 p-2">
          <div className="card card-block border-0 p-2">
            <h4 className="card-title text-right">
            </h4>
            <img
              src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg"
              alt="Photo of sunset"
              className='user-service-img-size'
            />
            <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
            <p className="card-text">
              This is a company that builds websites, web apps and e-commerce
              solutions.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 p-2">
          <div className="card card-block border-0 p-2">
            <h4 className="card-title text-right">
            </h4>
            <img
              src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg"
              alt="Photo of sunset"
              className='user-service-img-size'
            />
            <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
            <p className="card-text">
              This is a company that builds websites, web apps and e-commerce
              solutions.
            </p>
          </div>
        </div> */}
      </div>
    </div>

  </>
}

export default UserServiceDetail;