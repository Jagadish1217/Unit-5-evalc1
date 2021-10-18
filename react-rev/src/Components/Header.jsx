import React from "react";
export default function Header(props) {
    return (
        <header className="block row center">
            <div>
                <a href="#/cart">
                    cart{' '}{props.countCarItems ? (
                        <button className="badge">{props.countCarItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' '}
                <a href='#/Login'>Login</a>
            </div>
        </header>
    );
}