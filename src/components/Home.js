import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { CardBody } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function HomePage(props){

    

    return(
        <>
            <div>
                <h1 className="m-3">Tasks to Tackle</h1>
                <Badge bg="light" text='dark'>"Built using React. Check out more projects on <a href='https://github.com/JayakarAddepalli' target='_blank' rel="noreferrer">Github</a>." </Badge>
            </div>
            <form className='w-50 mx-auto m-3'>
                <div className="d-flex justify-content-center">
                    <input type="text" className="form-control w-100" id="userdata" required maxLength={40} placeholder='Please enter upto 40 characters'></input>
                    <button className="btn btn-primary" onClick={(e)=>props.onHandle(e, props.indexValue)} id="addbutton">{props.buttonContent}</button>
                    <Modal
                        size="lg"
                        show={props.stateModel}
                        onHide={() => props.setStateModel(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Warning!
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Input field must not be empty.</Modal.Body>
                    </Modal>
                </div>
            </form>
            <ListGroup className='w-50 mx-auto m-3'>
                {
                ((!props.AM) && (!props.CM)) ? 
                    props.data.map((i, index)=>
                    {
                        return (
                        <ListGroup.Item action variant="light" className='w-auto d-flex justify-content-between align-items-center' key={i} id={index} onClick={()=>{props.onChangeColor(index)}}>
                        <h5 style={{ color: 'black' }}>{i.text}</h5> 
                        <span><Badge bg={i.completed ? 'success' : 'warning'} text={i.completed ? 'white' : 'dark'}>
                                {i.completed ? 'Completed' : 'Not Completed'}
                        </Badge>
                        </span>
                        <div>
                            <button className="btn btn-info m-2 p-2 pt-1 pb-1" onClick={(e)=>props.onEdit(e, index)}>Edit</button>
                            <button className="btn btn-danger m-2 p-2 pt-1 pb-1" onClick={(e)=>props.ondeleteContent(e, index)}>Delete</button>
                        </div>
                        </ListGroup.Item>)
                    })
                    : (props.AM && !props.CM) ?  
                    props.onupdateArray.map((i, index) => {
                        return (
                            <ListGroup.Item action variant="light" disabled className='w-auto d-flex justify-content-between align-items-center' key={i} id={index} onClick={()=>{props.onChangeColor(index)}}>
                                <h5 style={{ color: 'black' }}>{i.text}</h5> 
                                <span><Badge bg={i.completed ? 'success' : 'warning'} text={i.completed ? 'white' : 'dark'}>
                                        {i.completed ? 'Completed' : 'Not Completed'}
                                </Badge>
                                </span>
                            </ListGroup.Item>
                        )
                    }) : 
                    props.onCompletedArray.map((i, index) => {
                        return (
                            <ListGroup.Item action variant="light" disabled className='w-auto d-flex justify-content-between align-items-center' key={i} id={index} onClick={()=>{props.onChangeColor(index)}}>
                                <h5 style={{ color: 'black' }}>{i.text}</h5> 
                                <span><Badge bg={i.completed ? 'success' : 'warning'} text={i.completed ? 'white' : 'dark'}>
                                        {i.completed ? 'Completed' : 'Not Completed'}
                                </Badge>
                                </span>
                            </ListGroup.Item>
                        )
                })
            }
                
                    
                    
            </ListGroup>
            <Card className='w-50 mx-auto m-3'>
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <CardBody>{((!props.AM) && (!props.CM)) ? 'Total tasks: ' + props.data.length : (props.AM && !props.CM) ? 'Active tasks: ' +  props.onupdateArray.length : 'Completed tasks: ' +  props.onCompletedArray.length}</CardBody>
                        {props.data.length === 0 ? (<CardBody><h6>'You have no tasks to perform'</h6></CardBody>) :
                        (<Card.Body>
                            {/* <button className='btn btn-light' onClick={()=>props.onALL()}>All</button>
                            <button className='btn btn-light' onClick={()=>props.onActiveElement()}>Active</button>
                            <button className='btn btn-light' onClick={()=>props.onCompletedElement()}>Completed</button> */}
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton id="tbg-radio-1" className='btn btn-light' value={1} onClick={()=>props.onALL()}>
                                ALL
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" className='btn btn-light' value={2} onClick={()=>props.onActiveElement()}>
                                Active
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" className='btn btn-light' value={3} onClick={()=>props.onCompletedElement()}>
                                Completed
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Card.Body>) }
                    </div>
                    
            </Card>
                
        </>
    )
}

export default HomePage