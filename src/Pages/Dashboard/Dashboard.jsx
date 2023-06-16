// HOOKS
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
// TOKEN
import { decodedToken } from "../../Utilities/AuthUtils/AuthUtils";
// SERVICES
import { UserServices } from "../../Services/UserServices/Userservices";
import { ServicesOfUserServices } from '../../Services/Services_UserServices/Services_UserServices';
// ICONS
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
// APP COMPONENT
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import "../../Components/UserServices/UserServices.css"

const Dashboard = () => {

  // HOOKS
  const [userDetail, setUserDetail] = useState(null);
  const [services, setServices] = useState();
  const navigate = useNavigate();

  // TOKEN
  const userLoggedIn = decodedToken().user;

  // SERVICES
  const UserService = new UserServices();
  const Service = new ServicesOfUserServices();

  useEffect(() => {
    async function getSingleUserDetail() {
      const { data } = await UserService.GetSingleUserWithDetail(userLoggedIn._id);
      setUserDetail(data.user)
    }
    getSingleUserDetail();
  }, [])

  useEffect(() => {
    async function getAllUserServices() {
      const { data } = await Service.GetAllServicesOfAUsers();
      setServices(data.AllServices);
      console.log(services && services);
    }
    getAllUserServices();
  }, []);


  return <>
    <UserNavbar />
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="mt-3">{userDetail?.firstName + ' ' + userDetail?.lastName}</h5>
                <span style={{ lineHeight: "1.2px" }}>{userDetail?.email}</span>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="me-3 mb-2">
                    <AiFillStar fill="#fbc634" />
                    <AiFillStar fill="#fbc634" />
                    <AiFillStar fill="#fbc634" />
                    <AiFillStar fill="#fbc634" />
                    <AiOutlineStar fill="#fbc634" />
                  </div>
                  <h5 className="review-count">4.0(12)</h5>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-3">
                <h6><i>Description</i></h6>
                <div>
                  <p>{userDetail?.description}</p>
                </div>
              </div>
            </div>
            <div className="card my-4 mb-lg-0">
              <div className="card-body p-3">
                <h6><i>Education</i></h6>
                <div>
                  <p>{userDetail?.degree}</p>
                </div>
                <h6><i>Institute</i></h6>
                <div>
                  <p>{userDetail?.institute}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="d-flex justify-content-between">
              <h5 className="mt-2">My Services</h5>
              <button className="btn service-button text-light" onClick={() => {navigate("/dashboard/create-service")}}>Add New Service</button>
            </div>
            {/* SERVICE TABLE */}
            <table className="table mt-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th style={{width: "230px"}}>Title</th>
                  <th>Description</th>
                  <th style={{width: "auto", textAlign: "end"}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services ? services.map((service, i) => {
                  return <tr key={i} style={{ height: "50px" }}>
                    <td>{i + 1}</td>
                    <td>{service.title}</td>
                    <td>{service.description}</td>
                    <td style={{width: "auto", textAlign: "end"}}>
                      <div class="dropdown">
                        <button class="btn btn-success dropdown-toggle service-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          More
                        </button>
                        <ul class="dropdown-menu">
                          <li><button className="dropdown-item btn" onClick={() => {navigate(`/dashboard/service-detail/${service._id}`)}}> Preview </button></li>
                          <li><button className="dropdown-item btn"> Edit </button></li>
                          <li><button className="dropdown-item btn"> Share </button></li>
                          <li><button className="dropdown-item btn"> Delete </button></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                }) : <tr><td>No data to display</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <Outlet />

  </>
}

export default Dashboard;