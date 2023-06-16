import { useState, useEffect, useRef } from 'react';
// COMPONENTS
import UserNavbar from "../UserNavbar/UserNavbar";
import { Container, Row, Col, InputGroup, Form, Card, FloatingLabel } from "react-bootstrap";

// TEXT EDITOR
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useForm } from 'react-hook-form';

// SERVICES
import { ServicesOfUserServices } from '../../Services/Services_UserServices/Services_UserServices';
import { decodedToken } from '../../Utilities/AuthUtils/AuthUtils';

import "./UserServices.css"

const CreateNewService = () => {

  // HOOKS
  const editorRef = useRef();
  const [content, setContent] = useState(null);
  const [contentHTML, setContentHTML] = useState(null);
  const [image, setImage] = useState(null);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      subCategory: "",
    }
  });
  const userLoggedIn = decodedToken().user;
  // const [contentLength, setContentLength] = useState(0);

  // SERVICE
  const CreateService = new ServicesOfUserServices();
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
      ['clean']                                         // remove formatting button
    ]
  };

  const categories = [
    {
      "_id": "646b1832f9b1570742c4a04d",
      "title": "SOCIAL MEDIA MARKETING"
    },
    {
      "_id": "646b1859f9b1570742c4a050",
      "title": "CONTENT CREATION"
    },
    {
      "_id": "646b186af9b1570742c4a053",
      "title": "BRAND COLLABORATION"
    },
    {
      "_id": "646b187bf9b1570742c4a056",
      "title": "ACCOUNT MANAGEMENT"
    },
    {
      "_id": "646b1895f9b1570742c4a059",
      "title": "PAID ADVERTISING"
    },
    {
      "_id": "646b18a7f9b1570742c4a05c",
      "title": "TRAINING & CONSULTATION"
    },
    {
      "_id": "646b18d5f9b1570742c4a05f",
      "title": "INFLUENCER EVENTS"
    },
    {
      "_id": "646b18e2f9b1570742c4a062",
      "title": "OTHERS"
    },
    {
      "_id": "6476e5899e364a99b56bc947",
      "title": "TEST 1"
    }
  ]

  const subCategories = [
    {
      "_id": "646b1b855d4ff11dfcd816f6",
      "title": "INSTAGRAM MARKETING",
      "category": "646b1832f9b1570742c4a04d"
    },
    {
      "_id": "646b1ba35d4ff11dfcd816fa",
      "title": "YOUTUBE MARKETING",
      "category": "646b1832f9b1570742c4a04d"
    },
    {
      "_id": "646b1baa5d4ff11dfcd816fe",
      "title": "TIKTOK MARKETING",
      "category": "646b1832f9b1570742c4a04d"
    },
    {
      "_id": "646b1c615d4ff11dfcd81702",
      "title": "VIDEO EDITING",
      "category": "646b1859f9b1570742c4a050"
    },
    {
      "_id": "646b1c6b5d4ff11dfcd81706",
      "title": "PHOTO EDITING",
      "category": "646b1859f9b1570742c4a050"
    },
    {
      "_id": "646b1c815d4ff11dfcd8170a",
      "title": "GRAPHIC DESIGN",
      "category": "646b1859f9b1570742c4a050"
    },
    {
      "_id": "646b1c925d4ff11dfcd8170e",
      "title": "COPYWRITING",
      "category": "646b1859f9b1570742c4a050"
    },
    {
      "_id": "646b1c9f5d4ff11dfcd81712",
      "title": "BLOG WRITING",
      "category": "646b1859f9b1570742c4a050"
    },
    {
      "_id": "646b1cbf5d4ff11dfcd8171a",
      "title": "CONTENT STRATEGY PLANNING",
      "category": "646b1859f9b1570742c4a050"
    },
    {
      "_id": "646b1eea5d4ff11dfcd8171e",
      "title": "SPONSORED POSTS",
      "category": "646b186af9b1570742c4a053"
    },
    {
      "_id": "646b1f035d4ff11dfcd81722",
      "title": "PRODUCT REVIEWS",
      "category": "646b186af9b1570742c4a053"
    },
    {
      "_id": "646b1f1f5d4ff11dfcd81726",
      "title": "BRAND AMBASIDORSHIP",
      "category": "646b186af9b1570742c4a053"
    },
    {
      "_id": "646b1f685d4ff11dfcd8172a",
      "title": "INFLUENCER EVNETS",
      "category": "646b186af9b1570742c4a053"
    },
    {
      "_id": "646b1f8a5d4ff11dfcd8172e",
      "title": "GIVEAWAYS & CONTESTS",
      "category": "646b186af9b1570742c4a053"
    },
    {
      "_id": "646b1fca5d4ff11dfcd81732",
      "title": "PROFILE OPTIMIZATION",
      "category": "646b187bf9b1570742c4a056"
    },
    {
      "_id": "646b20405d4ff11dfcd81737",
      "title": "COMMUNITY MANAGEMENT",
      "category": "646b187bf9b1570742c4a056"
    },
    {
      "_id": "646b20565d4ff11dfcd8173b",
      "title": "ENGAGEMENT STRATEGY",
      "category": "646b187bf9b1570742c4a056"
    },
    {
      "_id": "646b206c5d4ff11dfcd8173f",
      "title": "ACCOUNT MANAGEMENT",
      "category": "646b187bf9b1570742c4a056"
    },
    {
      "_id": "646b20ae5d4ff11dfcd81743",
      "title": "INSTAGRAM ADS",
      "category": "646b1895f9b1570742c4a059"
    },
    {
      "_id": "646b20b75d4ff11dfcd81747",
      "title": "YOUTUBE ADS",
      "category": "646b1895f9b1570742c4a059"
    },
    {
      "_id": "646b20d65d4ff11dfcd8174c",
      "title": "TIKTOK ADS",
      "category": "646b1895f9b1570742c4a059"
    },
    {
      "_id": "646b20f55d4ff11dfcd81750",
      "title": "INFLUENCER COMPAIGNS",
      "category": "646b1895f9b1570742c4a059"
    },
    {
      "_id": "646b311a5d4ff11dfcd81758",
      "title": "CONTENT PLANNING",
      "category": "646b18a7f9b1570742c4a05c"
    },
    {
      "_id": "646b31305d4ff11dfcd8175c",
      "title": "AUDIENCE GROWTHHH",
      "category": "646b18a7f9b1570742c4a05c"
    },
    {
      "_id": "646b31685d4ff11dfcd81764",
      "title": "INFLUENCER PERSONAL BRANDING",
      "category": "646b18a7f9b1570742c4a05c"
    },
    {
      "_id": "646b31d15d4ff11dfcd81774",
      "title": "PANEL DISCUSSION",
      "category": "646b18d5f9b1570742c4a05f"
    },
    {
      "_id": "646b32175d4ff11dfcd81778",
      "title": "PUBLIC SPEAKING",
      "category": "646b18e2f9b1570742c4a062"
    },
    {
      "_id": "646b322f5d4ff11dfcd8177c",
      "title": "PRODUCT PHOTOGRAPHY",
      "category": "646b18e2f9b1570742c4a062"
    },
    {
      "_id": "646c9bf577f62e1d8400a6c7",
      "title": "SUB TEST",
      "category": "646c991177f62e1d8400a6bb"
    },
    {
      "_id": "646c9eae77f62e1d8400a6d4",
      "title": "TEST",
      "category": "646b18e2f9b1570742c4a062"
    },
    {
      "_id": "6476e5af9e364a99b56bc94b",
      "title": "MY SUB TEST",
      "category": "6476e5899e364a99b56bc947"
    },
    {
      "_id": "6476e5bd9e364a99b56bc950",
      "title": "MY SUB TEST 2",
      "category": "6476e5899e364a99b56bc947"
    },
    {
      "_id": "647d90fb5a34ecec5be29cad",
      "title": "SUB-TEST-1",
      "category": "6476e5899e364a99b56bc947"
    },
    {
      "_id": "6480644382a6427ae5b2292d",
      "title": "TET 1-3",
      "category": "6476e5899e364a99b56bc947"
    }
  ]

  const data = watch();

  const handleChange = (value) => {
    if (value.length < 808) {
      setContent(value);
      // console.log(editorRef?.current.getHTML());
    }
  };
  const handleGetHtml = () => {
    if (editorRef.current) {
      const quillEditor = editorRef.current.getEditor();
      const html = quillEditor.root.innerHTML;
      setContentHTML(html);
    }
  };

  // LIVE PREVIEW OF IMAGE
  function livePreview(event) {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  // CREATE SERVICE

  // const createService = async (obj) => {
  //   const formData = new FormData();
  //   formData.append({
  //     "title": obj.title,
  //     "descripton": contentHTML?.toString(),
  //     "serviceImg": obj.serviceImg,
  //     "category": obj.category,
  //     "subCategory": obj.subCategory,
  //     "user": userLoggedIn._id,
  //     "basicPlan": {
  //       "price": obj.basicPrice,
  //       "description": obj.basicDescription
  //     },
  //     "premiumPlan": {
  //       "price": obj.premiumPrice,
  //       "description": obj.premiumDescription
  //     }

  //   })
  //   console.log(obj);
  //   const { data } = CreateService.CreateNewService(formData);
  //   console.log(data);
  // }
  const createService = async (obj) => {
    const formData = new FormData();
    formData.append("title", obj.title);
    formData.append("description", contentHTML?.contentHTML);
    formData.append("serviceImg", obj.serviceImg);
    formData.append("category", obj.category);
    formData.append("subCategory", obj.subCategory);
    formData.append("user", userLoggedIn._id);
  
    // Convert nested objects to JSON strings
    const basicPlanString = JSON.stringify({
      price: obj.basicPrice,
      description: obj.basicDescription
    });
    const premiumPlanString = JSON.stringify({
      price: obj.premiumPrice,
      description: obj.premiumDescription
    });
  
    // Append nested objects as JSON strings
    formData.append("basicPlan", basicPlanString);
    formData.append("premiumPlan", premiumPlanString);
  
    console.log(obj);
    const { data } = CreateService.CreateNewService(formData);
    console.log(data);
  }
  
  

  useEffect(() => {
    handleGetHtml();
  }, [content]);

  return <>
    <UserNavbar />
    <Container>
      <h3 className="mt-3">Create New Service</h3>

      <form onSubmit={handleSubmit(createService)}>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <Form.Label htmlFor="basic-url" className="h5">Title</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">I will</InputGroup.Text>
              <Form.Control
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
                {...register("title", { required: true })}
              />
            </InputGroup>
          </Col>

          <Col sm={12} md={12} lg={12}>
            <h5>Description</h5>
            <ReactQuill style={{ height: 300 }} ref={editorRef} modules={modules} theme="snow" value={content} onChange={handleChange} />
          </Col>
          {/* <p className="text-end">{contentLength}/800</p> */}

          <div className='row' style={{ position: "relative", top: 60 }}>
            <Col sm={6} md={6} lg={6} >
              <Form.Label htmlFor="basic-url" className="h5">Category</Form.Label>
              <Form.Select aria-label="Default select example" {...register("category", { required: true })}>
                <option value="" defaultValue disabled>Category</option>
                {categories ? categories.map((item, i) => {
                  return <option value={item._id} key={i}>{item.title}</option>
                }) : null}
              </Form.Select>
            </Col>

            <Col sm={6} md={6} lg={6}>
              <Form.Label htmlFor="basic-url" className="h5">Sub-category</Form.Label>
              <Form.Select aria-label="Default select example" {...register("subCategory", { required: true })}>
                <option value="" defaultValue disabled>Sub-category</option>
                {data.category ? subCategories.map((subCategory, i) => {
                  return <>
                    {subCategory.category === data.category ? <option value={subCategory._id} key={i}>{subCategory.title}</option> : null}
                  </>
                }) : null}
              </Form.Select>
            </Col>

            <Col sm={12} md={12} lg={12}>
              <Form.Group controlId="formFile" className="my-3">
                <Form.Label className='h5'>Default file input example</Form.Label>
                <Form.Control {...register("serviceImg", { required: true })} type="file" multiple onInput={(event) => livePreview(event)} />
              </Form.Group>

              {image && <div className="row">
                <Col sm={12} md={12} lg={12}>
                  <div className="text-center">
                    <img src={image} style={{ objectFit: "cover", maxHeight: 300, aspectRatio: "1/1.6" }} className="rounded border" />
                  </div>
                </Col>
              </div>}
            </Col>

            <Col sm={6} md={6} lg={6} className='mt-3'>
              <Card>
                <Card.Body>
                  <h5 className='text-center'>Basic Plan</h5>
                  <InputGroup className="my-3">
                    <InputGroup.Text id="basic-addon1">PKR</InputGroup.Text>
                    <Form.Control
                      type='number'
                      min={0}
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...register("basicPrice", { required: true })}
                    />
                  </InputGroup>
                  <FloatingLabel controlId="floatingTextarea2" label="Description">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      {...register("basicDescription", { required: true })}
                    />
                  </FloatingLabel>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} md={6} lg={6} className='mt-3'>
              <Card>
                <Card.Body>
                  <h5 className='text-center'>Premium Plan</h5>
                  <InputGroup className="my-3">
                    <InputGroup.Text id="basic-addon1">PKR</InputGroup.Text>
                    <Form.Control
                      type='number'
                      min={0}
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      {...register("premiumPrice", { required: true })}
                    />
                  </InputGroup>
                  <FloatingLabel controlId="floatingTextarea2" label="Description">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      {...register("premiumDescription", { required: true })}
                    />
                  </FloatingLabel>
                </Card.Body>
              </Card>
            </Col>

            <div className="text-end mt-3 mb-5">
              <button type='submit' className="btn service-button">Create Service</button>
            </div>
          </div>

        </Row>
      </form>

    </Container>
  </>
}

export default CreateNewService;