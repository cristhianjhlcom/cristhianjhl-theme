import React from 'react';
import { connect } from 'frontity';
import { Wrapper } from "./Error.styles";

function Error({ state }) {
    return (
        <Wrapper>
            <div>
                <h2>404 Error</h2>
                <p>
                    The path <em>{state.router.link}</em> cannot be found.
                </p>
            </div>
        </Wrapper>
    )
}

export default connect(Error);
