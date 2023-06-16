// HOOKS
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

// USERSERVICES CSS
import './UserServices.css';

// SERVICES
import { ServicesOfUserServices } from '../../Services/Services_UserServices/Services_UserServices';

// ICONS
import { AiFillStar } from "react-icons/ai"

// APP COMPONENT
import UserNavbar from '../UserNavbar/UserNavbar';

// REACT COMPONENT
import { Tabs, Tab } from 'react-bootstrap'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";



const UserServiceDetail = () => {
  // HOOKS
  const [serviceDetail, setServiceDetail] = useState(null);
  const [key, setKey] = useState('basic-plan');
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
    <UserNavbar />
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8">
          <h2 className='fw-bold'>I will {serviceDetail?.title}</h2>

          <div className='d-flex align-items-center my-3'>
            <h4 className='me-3 service-detail-name'>Ali Abbas</h4>
            <h6 className='me-3 text-secondary'><i><AiFillStar /> {serviceDetail?.rating} (35)</i></h6>
            <h6 className='me-3 text-secondary'>Orders in Queue: <i>{serviceDetail?.ordersInQueue}</i></h6>
            <h6 className='text-secondary'>Completed Orders: <><i>{serviceDetail?.completedOrders}</i></></h6>
          </div>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src={serviceDetail?.image} style={{ maxHeight: "500px" }} /></SwiperSlide>
            </Swiper>
          </div>
          <div className='mt-4'>
            <h5><i>About this service</i></h5>
            <p className=''>
              {serviceDetail?.description}
            </p>
          </div>

        </div>
        <div className="col-lg-4 mt-5 pt-5 position-fixed-top">
          <div className='service-plans px-3 py-2' style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)'}}>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
              fill
            >
              <Tab eventKey="basic-plan" className='text-center' title="Basic Plan">
                <h2 className='py-2'>{serviceDetail?.basicPlan} <span style={{fontSize: "16px", marginLeft: "-2px"}}>PKR</span></h2>
                <p className='text-secondary fw-bold text-start'>I will {serviceDetail?.description}</p>
              </Tab>
              <Tab eventKey="primium-plan" className='text-center' title="Premium Plan">
              <h3 className='py-2'>PKR {serviceDetail?.premiumPlan}</h3>
              <p className='text-secondary fw-bold text-start'>I will {serviceDetail?.description}</p>
              </Tab>
            </Tabs>
          </div>

          <div className="container">
          <div className='row'>
            <h5 className='mt-5 fw-bold'><i>Keywords</i></h5>
            <div className='d-flex d-inline-block'>
              <div className='col-lg-4'><p className='keywords'><i>Advertisement</i></p></div>
              <div className='col-lg-4'><p className='keywords'><i>Youtube</i></p></div>
              <div className='col-lg-4'><p className='keywords'><i>Brand</i></p></div>
              <div className='col-lg-4'><p className='keywords'><i>Video Editting</i></p></div>
            </div>
          </div>
          </div>
        </div>
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