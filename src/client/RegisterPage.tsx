import * as React from 'react';

type Props {}
interface State {
    seconds: number;
};
export default class RegisterPage extends React.Component<Props, State> {
    state: State = {
        seconds: 0
    };
    increment = () => {
        this.setState({
            seconds: (this.state.seconds + 1)
        });
    };
    decrement = () => {
        this.setState({
            seconds: (this.state.seconds - 1)
        });
    };
    render () {
        return (
            <div> <p>The current time is {this.state.seconds}</p> </div>
        );
    }
}
