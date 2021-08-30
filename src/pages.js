import {Link, Outlet, useLocation} from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <h1>XYZ Is My Company</h1>
            <nav>
                <Link to='about'>About</Link>
                <Link to='events'>Events</Link>
                <Link to='contact'>Contact</Link>
            </nav>
        </>
    )
};

export function About() {
    return ( 
    <>
        <h1>What About?</h1>
        <Outlet></Outlet>
    </>
    )
}

export const Events = () => {
    return <h1>Walking on Air</h1>;
};

export function Contact() {
    return <h1>Not Our Address</h1>
}

export const Oops = () => {
    const badRoute = useLocation();

    return <h1>404: {badRoute.pathname} is not the page you are looking for.</h1>
};

export const Services = () => {
    return <h2>We hope you understand. Your wish is our command.</h2>
};

export const History = () => {
    return <h2>Once upon a time</h2>
};

export const Location = () => {
    return <h2>You are here.</h2>
};