// import React, {useState} from "react";
// import SearchByText from "./SearchByText";
// import {Alert, Button, Form} from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//
// function SearchByDates({setUrl}){
//      const [startDate, setStartDate] = useState(new Date());
//      const [endDate, setEndDate] = useState((new Date()).toLocaleDateString());
//     // const [errorMessage, setErrorMessage] = useState("");
//     //
//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //
//     // }
//
//
//     return(
//         <>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//                     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//                 </Form.Group>
//                 {/*{errorMessage && <Alert variant={'danger'}>{errorMessage}</Alert>}*/}
//                 <Button variant="primary" type="submit" className={"mt-3"}>
//                     Submit
//                 </Button>
//             </Form>
//
//         </>
//     );
// }
//
// export default SearchByDates;