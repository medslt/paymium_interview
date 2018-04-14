import React from "react";
import {Row, Col, Button } from 'reactstrap';

const Menu = () => (
    <aside className="bg-secondary w-100 h-100">
        <Row className="no-gutters">
                <Col className="bg-dark min-h-100"> 
                    <div className="text-white d-flex flex-column h-100px  justify-content-center p-5">
                        <h2> FINPAL</h2>
                    </div>
                </Col> 
        </Row>
        <div className="color1 flex-column min-h-200 d-flex justify-content-center p-5 border-bottom border-bottom-color1">
            <div className="m-b-20 clickable">
                <h5> Overviews</h5>
            </div>
            <div className="m-b-20 clickable">
                <h5> Transactions (3)</h5>
            </div>
        </div>

        <div className="color1 flex-column min-h-200 d-flex justify-content-center p-5 border-bottom border-bottom-color1">
            <div className="m-b-20 clickable">
                <h5> Transfers (2)</h5>
            </div>
            <div className="m-b-20 clickable">
                <h5> Invoices (1)</h5>
            </div>
        </div>

        <div className="color1 flex-column min-h-200 d-flex justify-content-center p-5 border-bottom border-bottom-color1">
            <div className="m-b-20 clickable">
                <h5> Manage cards</h5>
            </div>
            <div className="m-b-20 clickable">
                <h5> Manage accounts</h5>
            </div>
        </div>

        <div className="color1 flex-column h-auto d-flex justify-content-center p-5">
            <div className="m-b-20 clickable">
                <h5> Team</h5>
            </div>
            <div className="m-b-20 clickable">
                <h5> Manage accounts</h5>
            </div>
            <div className="m-b-20 clickable">
                <h5> Settings</h5>
            </div>
            <div className="m-b-20 ">
                <Button outline color="info" size="lg" block>UPGRADE ACCOUNT</Button>
            </div>
        </div>
    </aside>
);

export default Menu;
