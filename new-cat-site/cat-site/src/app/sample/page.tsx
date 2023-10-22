'use client'

import React from "react";
import {hello_world} from "age-calc-lib";

export default class Sample extends React.Component {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        hello_world()
    }

    render() {
        return <p>test</p>
    }
}