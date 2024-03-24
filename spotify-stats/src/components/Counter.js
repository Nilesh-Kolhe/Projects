import { React } from "react";
import { connect } from "react-redux";

const Counter = ({ counter, profile, increment, decrement, setProfile }) => {

    // const { profile } = useSelector(state => state.joke);
    console.log('Profile from Counter: ', profile);

    return (
        <div>
            <p className="counter_title">Counter: {counter}</p>
            <button className="button" onClick={increment}>
                Increment
            </button>
            <button className="button" onClick={decrement}>
                Decrement
            </button>
            <button className="button" onClick={setProfile}>
                Set Profile
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter,
    profile: state.profile
    //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    setProfile: () => dispatch({ type: "SET_PROFILE", payload: { displayName: ownProps.profile.displayName, country: ownProps.profile.country, email: ownProps.profile.email } })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);