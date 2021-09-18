import React, { Component } from 'react'
import { CnxtConsumer } from './Cnxt'
import {Form, TextFeild, Submit} from './Serachcss';
export default class Search extends Component {
    render() {
        const {formSubmit} = this.props;
        return (
                        <CnxtConsumer>
                            {changeState => {
                                console.log("Success")
                                return (
                                    <Form onSubmit={formSubmit}>
                                        <TextFeild type="text" placeholder="Enter GitHub Username" onChange={changeState} />
                                        <Submit type="Submit" className="btn btn-outline-primary" />
                                    </Form>
                                )
                            }
                            }
                        </CnxtConsumer>
        )
    }
}
