import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/blocks.css';

/* Blocks */
/*
Blocks Description and use
*/


/* empty blocks */
/*
Empty blocks overview
*/

/* Start of Block 1 */
export default class Block1 extends Component {
    render() {
        return (
            <section>
            </section>
        )
    }
}

/* End of Block 1 */
/* Start of Block 2 */
export class Block2 extends Component {
    render() {
        return (
            <section>
                {this.props.children}
            </section>
        )
    }
}
/* End of Block 2 */
