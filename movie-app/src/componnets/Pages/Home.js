import {Container} from "react-bootstrap";

function Home(){

    return(
        <Container className="position-absolute top-50 start-50 translate-middle">
            <div className="p-5 text-center bg-body-tertiary rounded-3">
                <svg className="bi mt-4 mb-3" style={{ color: 'var(--bs-indigo)', width: '100px', height: '100px' }}>
                </svg>
                <h1 className="text-body-emphasis">Jumbotron with icon</h1>
                <p className="col-lg-8 mx-auto fs-5 text-muted">
                </p>
                <div className="d-inline-flex gap-2 mb-5">
                    <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                            type="button">
                        Call to action
                        <svg className="bi ms-2" width="24" height="24">
                        </svg>
                    </button>
                    <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                        Secondary link
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default Home;