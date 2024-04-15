import React ,{useEffect} from 'react';
import { Container, Col, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Comments from './Comments';
import Summary from './Summary';
import TimeTracking from "./TimeTracking";
import {  useDispatch } from "react-redux";
import {
    getTaskById
  } from "../../../slices/thunks";

const TaskDetails = () => {
    document.title="Tasks Details ";
  const dispatch: any = useDispatch();
  const [dataTask, setDataTask] = React.useState({});

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');
  const getDataTask = async (id: number) => {
      const data = await dispatch(getTaskById(id));
      console.log(data);
      setDataTask(data.payload);

  };
  console.log(dataTask)
  useEffect(() => {
      console.log(id)
      if (id != undefined) {
          console.log(id);
          var id_parse = parseInt(id);
          getDataTask(id_parse);
      }
  }, []);
  function isObjectEmpty(obj:any) {
    return Object.keys(obj).length === 0;
  }
    return (
        <React.Fragment>
           {
            !isObjectEmpty(dataTask)&& <div className="page-content">
            <Container fluid>
                <BreadCrumb title="Tasks Details" pageTitle="Tasks" />
                <Row>
                    <Col xxl={3}>
                        <TimeTracking prop={dataTask} />
                    </Col>
                    <Col xxl={9}>
                        <Summary prop={dataTask}/>
                        <Comments />
                    </Col>
                </Row>
            </Container>
        </div>
           }
        </React.Fragment>
    );
};

export default TaskDetails;