import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/containers.css';

/* Containers */
/*
Containers description and use
*/

/* Start of Container 1 Component */
export default class Container1 extends Component {

    render() {
        return (
            <section className="container1">
                <div className="container1-block1">{this.props.children || <div />}</div>
            </section>
        )
    }
}

/* End of Container 1 Component */
/* Start of Container 2 Component */
export class Container2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container2">
                <div className="container2-block1">{childs[0] || <div />}</div>
                <div className="container2-block2">{childs[1] || <div />}</div>
            </section>
        )
    }
}

/* End of Container 2 Component */
/* Start of Container 3 Component */
export class Container3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container3">
                <div className="container3-block1">{childs[0] || <div />}</div>
                <div className="container3-block2">{childs[1] || <div />}</div>
            </section>
        )
    }
}

/* End of Container 3 Component */
/* Start of Container 4 Component */
export class Container4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container4">
                <section className="container4-top">
                    <div className="container4-block1">{childs[0] || <div />}</div>
                    <div className="container4-block3">{childs[2] || <div />}</div>
                </section>
                <section className="container4-bottom">
                <div className="container4-block2">{childs[1] || <div />}</div>
                <div className="container4-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 4 Component */
/* Start of Container 5 Component */
export class Container5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container5">
            </section>
        )
    }
}

/* End of Container 5 Component */
/* Start of Container 6 Component */
export class Container6 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container6">
            </section>
        )
    }
}

/* End of Container 6 Component */
/* Start of Container 7 Component */
export class Container7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container7">
            </section>
        )
    }
}

/* End of Container 7 Component */
/* Start of Container 8 Component */
export class Container8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container8">
            </section>
        )
    }
}

/* End of Container 8 Component */
/* Start of Container 9 Component */
export class Container9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container9">
            </section>
        )
    }
}

/* End of Container 9 Component */
/* Start of Container 10 Component */
export class Container10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container10">
            </section>
        )
    }
}

/* End of Container 10 Component */
/* Start of Container 11 Component */
export class Container11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container11">
            </section>
        )
    }
}

/* End of Container 11 Component */
/* Start of Container 12 Component */
export class Container12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container12">
            </section>
        )
    }
}

/* End of Container 12 Component */
/* Sytart of Container 13 Component */
export class Container13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container13">
            </section>
        )
    }
}

/* End of Container 13 Component */
/* Start of Container 14 Component */
export class Container14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container14">
            </section>
        )
    }
}

/* End of Container 14 Component */
/* Start of Container 15 Component */
export class Container15 extends Compoonent {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container15">
            </section>
        )
    }
}

/* End of Container 15 Component */
/* Start of Container 16 Component */
export class Container16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container16">
            </section>
        )
    }
}

/* End of Container 16 Component */
/* Start of Container 17 Component */
export class Container17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container17">
            </section>
        )
    }
}

/* End of Container 17 Component */
/* Start of Container 18 Component */
export class Container18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container18">
            </section>
        )
    }
}

/* End of Container 18 Component */
/* Start of Container 19 Component */
export class Container19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container19">
            </section>
        )
    }
}

/* End of Container 19 Component */
/* Start of Container 20 Component */
export class Container20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container20">
            </section>
        )
    }
}

/* End of Container 20 Component */