import React from "react";
import Header from "../components/Header";
import Footer from "../components/Fotter";

function BaseLayout({ children }) {
    return (
        <>
            <Header />
            <main className="bg-white">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default BaseLayout;