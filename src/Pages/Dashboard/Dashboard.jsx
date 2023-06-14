// HOOKS
import { useEffect, useState } from "react";
// APP COMPONENT
import MainNavbar from "../../Components/Navbar/Navbar";
// TOKEN
import { decodedToken } from "../../Utilities/AuthUtils/AuthUtils";
// SERVICES
import { UserServices } from "../../Services/UserServices/Userservices";
// ICONS
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
// REACT COMPONENTS
import { Tab, Tabs } from 'react-bootstrap';


const Dashboard = () => {

  // HOOKS
  const [userDetail, setUserDetail] = useState(null);

  // TOKEN
  const userLoggedIn = decodedToken().user;

  // SERVICES
  const UserService = new UserServices();

  // async function getSingleUserDetail() {
  //   const { data } = await UserService.GetSingleUserWithDetail(userLoggedIn._id);
  //   setUserDetail(data.user)
  // }
  // console.log(userDetail);

  useEffect(() => {
    async function getSingleUserDetail() {
      const { data } = await UserService.GetSingleUserWithDetail(userLoggedIn._id);
      setUserDetail(data.user)
    }
    getSingleUserDetail();
  },[])


  return <>
    <MainNavbar />
    <section style={{ backgroundColor: "#eee" }}>
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
            <div className="card mb-4">
              <div className="card-body">
                <Tabs
                  defaultActiveKey="my-orders"
                  id="fill-tab-example"
                  className="mb-3"
                  fill
                >
                  <Tab eventKey="my-orders" title="My Orders">
                    Tab content for My orders
                  </Tab>
                  <Tab eventKey="messages" title="Messages">
                    Tab content for Messages
                  </Tab>
                  <Tab eventKey="earnings" title="Earnings">
                    Tab content for Earnings
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <h6><i>Active Orders</i></h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <h6><i>Previous Orders</i></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
}

export default Dashboard;